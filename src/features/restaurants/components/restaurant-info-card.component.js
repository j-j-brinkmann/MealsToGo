import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import IconFoundation from "react-native-vector-icons/Foundation";
import { Spacer } from "../../../components/spacer/spacer.component";

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
    isClosedTemporarily = false,
  } = restaurant;

  const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
  `;

  const CardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.ui.quaternary};
  `;

  const InfoView = styled(View)`
    padding: ${(props) => props.theme.space[3]};
  `;

  const RestaurantName = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.title};
    color: ${(props) => props.theme.colors.ui.primary};
  `;

  const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `;

  const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[1]}
    padding-bottom: ${(props) => props.theme.space[1]}
  `;
  const Section = styled(View)`
    flex-direction: row;
    align-items: center;
  `;
  const SectionEnd = styled(View)`
    flex: 1  
    flex-direction: row;
    justify-content: flex-end;
  `;

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
                  <Text variant="label" style={{ color: "red" }}>
                    Closed Temporarily
                  </Text>
                )}
                <View style={{ paddingLeft: 16 }} />
                {isOpenNow && <IconFoundation name="burst-sale" size={32} />}
                <View style={{ paddingLeft: 16 }} />
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </SectionEnd>
            </Rating>
          </Section>
          <Address>{address}</Address>
        </InfoView>
      </RestaurantCard>
    </>
  );
};
