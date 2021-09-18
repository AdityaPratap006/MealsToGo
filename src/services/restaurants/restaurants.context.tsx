import React, {
    useState,
    useEffect,
    createContext,
    FC,
    useContext,
} from "react";
import { Restaurant } from "../../models/restaurant";
import { LocationContext } from "../location/location.context";
import { ILocation } from "../location/location.mock";
import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

interface RestaurantContextValue {
    restaurants: Restaurant[];
    loading: boolean;
    error: string;
}

export const RestaurantContext = createContext<RestaurantContextValue>({
    restaurants: [],
    loading: false,
    error: null,
});

export const RestaurantsContextProvider: FC = ({ children }) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>(null);
    const { location } = useContext(LocationContext);

    useEffect(() => {
        const retrieveRestaurants = async (coordinates: ILocation) => {
            try {
                setLoading(true);
                console.log({ coordinates });
                await new Promise((resolve) => setTimeout(resolve, 2000));

                const response = await restaurantRequest(coordinates);
                const restuarantList = restaurantsTransform(response);

                setRestaurants(restuarantList);
            } catch (err) {
                setError((err as Error).message);
                console.log("Error Rest Context: ", err.message);
            } finally {
                setLoading(false);
            }
        };

        retrieveRestaurants(location);
    }, [location]);

    return (
        <RestaurantContext.Provider
            value={{
                restaurants,
                loading,
                error,
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};
