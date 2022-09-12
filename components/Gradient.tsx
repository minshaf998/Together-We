import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "./colors";

export const Gradient = styled(LinearGradient).attrs({
  colors: [colors.gradient1, colors.gradient2],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})``;
