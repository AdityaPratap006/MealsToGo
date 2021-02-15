import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
    useFonts as useOswaldFonts,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
    useFonts as useLatoFonts,
    Lato_400Regular,
} from "@expo-google-fonts/lato";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
    const [oswaldLoaded] = useOswaldFonts({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLatoFonts({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <RestaurantScreen />
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </React.Fragment>
    );
}
