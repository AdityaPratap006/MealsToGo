import React, { FC } from "react";
import starRatingSVG from "../../../../assets/star";
import openSVG from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TypographyText } from "../../../components/typography/text.component";
import {
    Icon,
    OpenIcon,
    StarIcon,
    RestaurantCard,
    RestaurantCardContent,
    RestaurantCardCover,
    Row,
    SectionEnd,
} from "./restaurant-info-card.styles";
import { Restaurant } from "../../../models/restaurant";
import { mockImages } from "../../../services/restaurants/mock";

interface RestaurantInfoCardProps {
    restaurant?: Restaurant;
}

export const RestaurantInfoCard: FC<RestaurantInfoCardProps> = ({
    restaurant,
}) => {
    const defaultImageUrl = mockImages[0];
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            {
                htmlAttributions: [defaultImageUrl],
            },
        ],
        vicinity,
        isOpenNow = true,
        rating = 4.2,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.round(rating)));
    const mockImageUrl = mockImages[Math.floor(Math.random() * 5)];
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover
                key={name}
                source={{
                    uri: photos[0].htmlAttributions[0] || mockImageUrl,
                }}
            />
            <RestaurantCardContent>
                <TypographyText variant="title">{name}</TypographyText>
                <Row>
                    {ratingArray.map((_, index) => (
                        <StarIcon
                            key={index}
                            width={20}
                            height={20}
                            xml={starRatingSVG}
                        />
                    ))}
                    <SectionEnd>
                        <Spacer position="left" size="large">
                            {isClosedTemporarily && (
                                <TypographyText variant="error">
                                    CLOSED TEMPORARILY
                                </TypographyText>
                            )}
                        </Spacer>
                        <Spacer position="left" size="large">
                            {isOpenNow && (
                                <OpenIcon
                                    height={20}
                                    width={20}
                                    xml={openSVG}
                                />
                            )}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Row>
                <TypographyText variant="body">{vicinity}</TypographyText>
            </RestaurantCardContent>
        </RestaurantCard>
    );
};
