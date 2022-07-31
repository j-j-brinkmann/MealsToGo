import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Random Street 2",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurant;

  const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
  `;

  const CardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.ui.quaternary};
  `;

  const RestaurantName = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
  `;

  return (
    <>
      <RestaurantCard elevation={3}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <RestaurantName>{name}</RestaurantName>
      </RestaurantCard>
    </>
  );
};
