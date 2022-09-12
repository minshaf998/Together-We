import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../components/colors";
import Card from "../components/Card";
import { Container } from "../components/shared";
import ProjectText from "../components/ProjectText";

const MyView = styled(View)`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${colors.white};
`;

const Welcome: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ProjectText />
      <Card>
        <Text>hiasdf</Text>
      </Card>
    </Container>
  );
};

export default Welcome;
