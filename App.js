import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
    return (
        <React.Fragment>
            <RestaurantScreen />
            <ExpoStatusBar style="auto" />
        </React.Fragment>
    );
}

const styles = StyleSheet.create({});
