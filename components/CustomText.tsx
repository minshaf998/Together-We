import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";

interface CardProps {
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const TextView = styled.Text`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  text-align: left;
  color: black;
  padding-vertical: 14px;
  line-height: 30px;
`;

const CustomText: FunctionComponent<CardProps> = (props) => {
  return <TextView style={props.textStyles}>{props.children}</TextView>;
};
export default CustomText;
