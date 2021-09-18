import camelize from "camelize";
import { ILocationsData, locations } from "./location.mock";

export const locationRequest = async (searchTerm: string) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
        throw new Error("not found");
    }

    return locationMock;
};

export const locationTransform = (data: ILocationsData) => {
    const formattedResponse = camelize(data) as ILocationsData;
    const {
        geometry: { location },
    } = formattedResponse.results[0];
    return location;
};
