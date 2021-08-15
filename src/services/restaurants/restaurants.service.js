import { mocks } from "./mock";

export const restaurantRequest = async (location = "51.219448,4.402464") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found!");
        }
        resolve(mock);
    });
};

restaurantRequest()
    .then((mock) => console.log("Place: ", mock.results[0]))
    .catch((err) => console.error(err));
