import camelize from "camelize";
import { BusinessStatus, Restaurant } from "../../models/restaurant";
import { ILocation } from "../location/location.mock";
import { mocks } from "./mock";

export const restaurantRequest = async (location: ILocation) => {
    if (!location) {
        throw new Error("invalid coordinates");
    }

    const key = `${location.lat},${location.lng}`;
    const mock = mocks[key];

    if (!mock) {
        throw new Error("not found");
    }

    return mock;
};

export const restaurantsTransform = ({ results = [] }): Restaurant[] => {
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
