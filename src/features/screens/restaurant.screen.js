import React from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../restaurants/components/restaurant-info-card.component";
import styled from "styled-components/native";

export const RestaurantsScreen = () => {
  const SafeViewContainer = styled(SafeAreaView)`
    flex: 1;
    padding-top: ${StatusBar.currentHeight}px;
  `;
  const SearchbarContainer = styled(View)`
    background-color: ${(props) => props.theme.colors.bg.secondary};
    padding: ${(props) => props.theme.space[3]};
  `;
  const RestaurantsListContainer = styled(View)`
    flex: 1;
    flex-grow: 1;
    background-color: ${(props) => props.theme.colors.bg.secondary};
    padding: ${(props) => props.theme.space[3]};
  `;

  return (
    <SafeViewContainer>
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <RestaurantsListContainer>
        <RestaurantInfo />
      </RestaurantsListContainer>
    </SafeViewContainer>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "blue",
    padding: 20,
  },
});
