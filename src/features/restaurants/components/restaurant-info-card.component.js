import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import IconFoundation from "react-native-vector-icons/Foundation";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  CardCover,
  InfoView,
  RestaurantName,
  Address,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Random Street 2",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={3}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <InfoView>
          <RestaurantName>{name}</RestaurantName>
          <Section>
            <Rating>
              {ratingArray.map((val, index) => (
                <Text key={index}>⭐</Text>
              ))}
              <SectionEnd>
                {isClosedTemporarily && (
                  <Text variant="error">Closed Temporarily</Text>
                )}
                <View style={{ paddingLeft: 16 }} />
                {isOpenNow && <IconFoundation name="burst-sale" size={32} />}
                <View style={{ paddingLeft: 16 }} />
                <Icon source={{ uri: icon }} />
              </SectionEnd>
            </Rating>
          </Section>
          <Address>{address}</Address>
        </InfoView>
      </RestaurantCard>
    </>
  );
};
