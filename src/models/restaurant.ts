export interface RestaurantsResponse {
    htmlAttributions: any[];
    nextPageToken: string;
    results: Restaurant[];
    status: string;
}

export interface Restaurant {
    businessStatus: BusinessStatus;
    geometry: Geometry;
    ix?: string;
    name: string;
    openingHours?: OpeningHours;
    photos: Photo[];
    placeId: string;
    plusCode: PlusCode;
    priceLevel: number;
    rating: number;
    reference: string;
    scope: string;
    types: string[];
    userRatingsTotal: number;
    vicinity: string;
    icon?: string;
    permanentlyClosed?: boolean;
}

export enum BusinessStatus {
    ClosedTemporarily = "CLOSED_TEMPORARILY",
    Operational = "OPERATIONAL",
}

export interface Geometry {
    location: Location;
    viewport: Viewport;
}

export interface Location {
    lat: number;
    lng: number;
}

export interface Viewport {
    northeast: Location;
    southwest: Location;
}

export interface OpeningHours {
    openNow: boolean;
}

export interface Photo {
    height: number;
    htmlAttributions: string[];
    photoReference: string;
    width: number;
}

export interface PlusCode {
    compoundCode: string;
    globalCode: string;
}
