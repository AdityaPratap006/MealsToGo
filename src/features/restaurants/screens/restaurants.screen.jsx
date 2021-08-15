import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantList
                data={[
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
                ]}
                renderItem={() => (
                    <Spacer position="bottom" size="large">
                        <RestaurantInfoCard />
                    </Spacer>
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;
