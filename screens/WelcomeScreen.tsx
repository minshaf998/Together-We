import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Gradient } from "../components/Gradient";
import { colors } from "../components/colors";

const MyGradient = styled(Gradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MyView = styled(View)`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${colors.white};
`;

const MyText = styled(Text)`
font-size:38px
font-weight: 900;
font-style: normal;
color: ${colors.white};
`;
const Welcome: FunctionComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LandingScreen");
    }, 1000);
  }, []);

  return (
    <MyGradient>
      <MyView></MyView>
      <MyText>Together We</MyText>
    </MyGradient>
  );
};

export default Welcome;
