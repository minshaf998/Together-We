import { StatusBar } from "react-native";
import React from "react";

import MyStack from "./navigation/MyStack";

export default function App() {
  return (
    <>
      <StatusBar />
      <MyStack />
    </>
  );
}
