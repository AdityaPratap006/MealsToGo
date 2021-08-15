import React, { useContext, FC } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Restaurant } from "../../../models/restaurant";

export const RestaurantScreen: FC = () => {
    const restaurantsContext = useContext(RestaurantContext);

    const renderRestaurants: ListRenderItem<Restaurant> = ({ item }) => (
        <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
        </Spacer>
    );

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" value={""} />
            </SearchContainer>
            {restaurantsContext.loading && (
                <ActivityIndicatorContainer>
                    <ActivityIndicatorStyled
                        animating
                        color={Colors.orange700}
                        size={50}
                    />
                </ActivityIndicatorContainer>
            )}
            {!restaurantsContext.loading && (
                <RestaurantList
                    data={restaurantsContext.restaurants}
                    renderItem={renderRestaurants}
                    keyExtractor={(item) => item.placeId}
                />
            )}
        </SafeArea>
    );
};

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const ActivityIndicatorContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const ActivityIndicatorStyled = styled(ActivityIndicator)`
    margin-left: -25px;
`;

const RestaurantList = styled(FlatList as new () => FlatList<Restaurant>).attrs(
    {
        contentContainerStyle: {
            padding: 16,
        },
    }
)``;
