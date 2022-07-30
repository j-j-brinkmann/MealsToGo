import React from "react";
import { Text } from "react-native";
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

  return (
    <>
      <Card elevation={3}>
        <Card.Cover
          style={{ padding: 20, backgroundColor: "white" }}
          source={{ uri: photos[0] }}
        />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </Card>
    </>
  );
};
