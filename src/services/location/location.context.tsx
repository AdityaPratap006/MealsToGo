import React, { useState, createContext, FC } from "react";
import { ILocation } from "./location.mock";
import { locationRequest, locationTransform } from "./location.service";

interface LocationContextValue {
    loading: boolean;
    error: string | null;
    location: ILocation | null;
    search: (term: string) => void;
    keyword: string | null;
}

export const LocationContext = createContext<LocationContextValue>({
    loading: false,
    error: null,
    location: null,
    search: (_term: string) => null,
    keyword: null,
});

export const LocationContextProvider: FC = ({ children }) => {
    const [keyword, setKeyword] = useState<string>(null);
    const [location, setLocation] = useState<ILocation>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>(null);

    const onSearch = async (term: string | null) => {
        if (!term || !term.length) {
            return;
        }
        const searchTerm = term.toLowerCase();

        setLoading(true);
        setKeyword(searchTerm);

        try {
            const rawLocationsData = await locationRequest(searchTerm);
            const locationResult = locationTransform(rawLocationsData);
            setLocation(locationResult);
        } catch (err) {
            setError((err as Error).message);
            console.log("Error Location Ctx: ", err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <LocationContext.Provider
            value={{
                location,
                error,
                loading,
                keyword,
                search: onSearch,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
