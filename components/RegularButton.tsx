import React, { FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

import { colors } from "./colors";

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const ButtonView = styled.TouchableOpacity`
  background-color: ${colors.btnBlue};
  width: 100%;
  height: 52px;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
`;

const MyText = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: white;
`;

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <MyText style={props.textStyles}>{props.children}</MyText>
    </ButtonView>
  );
};
export default RegularButton;
