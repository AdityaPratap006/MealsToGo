import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";

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

const screenOptions = ({ route }): BottomTabNavigationOptions => {
    const icon = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? icon.focused : icon.normal;
            return <Ionicons name={iconName} size={size} color={color} />;
        },
    };
};

interface AppNavigatorProps {}

const AppNavigator: React.FC<AppNavigatorProps> = () => {
    return (
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
                <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
