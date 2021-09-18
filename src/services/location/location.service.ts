import camelize from "camelize";
import { ILocationsData, locations } from "./location.mock";

export const locationRequest = (searchTerm: string) => {
    return new Promise<ILocationsData>((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("not found");
        }

        resolve(locationMock);
    });
};

export const locationTransform = (data: ILocationsData) => {
    const formattedResponse = camelize(data) as ILocationsData;
    const {
        geometry: { location },
    } = formattedResponse.results[0];
    return location;
};
