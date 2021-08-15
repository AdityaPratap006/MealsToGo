import React from "react";
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

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some street some city",
        isOpenNow = true,
        rating = 4.2,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.round(rating)));
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
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
                <TypographyText variant="body">{address}</TypographyText>
            </RestaurantCardContent>
        </RestaurantCard>
    );
};
