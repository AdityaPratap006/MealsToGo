import React from "react";
import { Card, Title } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some street some city",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false,
    } = restaurant;
    return (
        <StyledCard elevation={5}>
            <StyledCardCover key={name} source={{ uri: photos[0] }} />
            <Card.Content>
                <Title>{name}</Title>
            </Card.Content>
        </StyledCard>
    );
};

const StyledCard = styled(Card)`
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
`;

const StyledCardCover = styled(Card.Cover)`
    margin: 10px;
    background-color: white;
`;
