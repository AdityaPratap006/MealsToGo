import camelize from "camelize";
import { BusinessStatus, Restaurant } from "../../models/restaurant";
import { mocks } from "./mock";

export const restaurantRequest = async (location = "51.219448,4.402464") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject({ message: "not found!" });
        }
        resolve(mock);
    });
};

export const restaurantsTransform = ({ results = [] }) => {
    const restaurants: Restaurant[] = camelize(results);
    const mappedResults = restaurants.map((restaurant) => {
        return {
            ...restaurant,
            isClosedTemporarily:
                restaurant.businessStatus === BusinessStatus.ClosedTemporarily,
            isOpenNow: restaurant.openingHours?.openNow,
        };
    });

    return mappedResults;
};
