import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "./colors";

interface CardProps {
  children: React.ReactNode;
}

const CardView = styled.View`
  background-color: ${colors.white};
  width: 100%;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const Card: FunctionComponent<CardProps> = (props) => {
  return <CardView>{props.children}</CardView>;
};
export default Card;
