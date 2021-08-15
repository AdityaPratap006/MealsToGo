import camelize from "camelize";
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
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isClosedTemporarily:
                restaurant.business_status === "CLOSED_TEMPORARILY",
            isOpenNow: restaurant.opening_hours?.open_now,
        };
    });

    return camelize(mappedResults);
};
