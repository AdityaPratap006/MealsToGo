import React from "react";
import { View, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    useFonts as useOswaldFonts,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
    useFonts as useLatoFonts,
    Lato_400Regular,
} from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: {
        normal: "ios-restaurant-outline",
        focused: "ios-restaurant",
    },
    Map: {
        normal: "ios-map-outline",
        focused: "ios-map",
    },
    Settings: {
        normal: "ios-settings-outline",
        focused: "ios-settings",
    },
};

const SettingsScreen = () => {
    return (
        <SafeArea>
            <View>
                <Text>Settings</Text>
            </View>
        </SafeArea>
    );
};

const MapScreen = () => {
    return (
        <SafeArea>
            <View>
                <Text>Map</Text>
            </View>
        </SafeArea>
    );
};

const screenOptions = ({ route }) => {
    const icon = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? icon.focused : icon.normal;
            return <Ionicons name={iconName} size={size} color={color} />;
        },
    };
};

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
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={screenOptions}
                        tabBarOptions={{
                            activeTintColor: "tomato",
                            inactiveTintColor: "gray",
                            style: {
                                height: "8%",
                                minHeight: 90,
                                maxHeight: 110,
                                paddingVertical: 6,
                            },
                            labelStyle: {
                                fontWeight: "500",
                                fontSize: 12.75,
                                marginBottom: 4,
                            },
                        }}
                    >
                        <Tab.Screen
                            name="Restaurants"
                            component={RestaurantScreen}
                        />
                        <Tab.Screen name="Map" component={MapScreen} />
                        <Tab.Screen
                            name="Settings"
                            component={SettingsScreen}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </React.Fragment>
    );
}
