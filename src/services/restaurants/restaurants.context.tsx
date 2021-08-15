import React, { useState, useEffect, createContext, FC } from "react";
import { Restaurant } from "../../models/restaurant";
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

    useEffect(() => {
        const retrieveRestaurants = async () => {
            try {
                setLoading(true);

                await new Promise((resolve) => setTimeout(resolve, 2000));

                const response = await restaurantRequest();
                const restuarantList = restaurantsTransform(response);

                setRestaurants(restuarantList);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        retrieveRestaurants();
    }, []);

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
