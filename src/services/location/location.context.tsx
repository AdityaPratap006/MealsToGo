import React, { useState, createContext, FC, useEffect } from "react";
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

    const onSearch = async (searchTerm: string | null) => {
        if (!searchTerm) {
            return;
        }

        setLoading(true);
        setKeyword(searchTerm);
    };

    useEffect(() => {
        const getLocation = async () => {
            try {
                const rawLocationsData = await locationRequest(
                    keyword.toLowerCase()
                );
                const locationResult = locationTransform(rawLocationsData);
                setLocation(locationResult);
            } catch (err) {
                setError((err as Error).message);
                console.log("Error Location Ctx: ", err.message);
            } finally {
                setLoading(false);
            }
        };

        getLocation();
    }, [keyword]);

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
