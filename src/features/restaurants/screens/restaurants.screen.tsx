import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const listData = [
    { name: "Rest 1" },
    { name: "Rest 2" },
    { name: "Rest 3" },
    { name: "Rest 4" },
    { name: "Rest 5" },
    { name: "Rest 6" },
    { name: "Rest 7" },
    { name: "Rest 8" },
    { name: "Rest 9" },
    { name: "Rest 10" },
];

export const RestaurantScreen = () => {
    const renderRestaurants: ListRenderItem<{ name: string }> = () => (
        <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
        </Spacer>
    );
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" value={"London"} />
            </SearchContainer>
            <RestaurantList
                data={listData}
                renderItem={renderRestaurants}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(
    FlatList as new () => FlatList<{ name: string }>
).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;
