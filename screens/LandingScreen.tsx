import React, { FunctionComponent, useEffect, useState, useMemo } from "react";
import styled from "styled-components/native";
import { Text, ScrollView, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

import { Gradient } from "../components/Gradient";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import RegularButton from "../components/RegularButton";
import ProjectText from "../components/ProjectText";
import Card from "../components/Card";
import CustomText from "../components/CustomText";
import axios from "axios";
import { config } from "../config";

const MyGradient = styled(Gradient)`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  height: 204px;
  margin-bottom: 15px;
`;

const LandingScreen: FunctionComponent = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState([]);
  const [data, setData] = useState<any[]>([]);

  const getItem = async () => {
    const res = await axios.get(config.api_fundrising, {
      headers: {
        "x-api-key": config.api_key,
      },
    });

    await setData(res.data.data);
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyGradient>
          <CustomText textStyles={{ color: "white", textAlign: "center" }}>
            We want give them a better tommorow!
          </CustomText>
        </MyGradient>
        <ProjectText />
        {data.map((item) => (
          <Card key={item.id}>
            <Image
              style={{ height: 174, borderRadius: 10 }}
              source={{ uri: item.urls.small }}
            />
            <CustomText>{item.title}</CustomText>
            <Slider
              disabled
              style={{
                width: 315,
                alignSelf: "center",
              }}
              maximumValue={item.target_amount + 5000}
              minimumValue={0}
              minimumTrackTintColor={colors.sliderMin}
              maximumTrackTintColor={colors.sliderMax}
              step={1}
              value={6000}
              onValueChange={(value) => setValue(value)}
            />
            <CustomText textStyles={{ fontWeight: "900" }}>
              $ {item.target_amount}
              <Text style={{ fontSize: 15, color: colors.smallText }}>
                Raised
              </Text>
            </CustomText>
            <RegularButton
              onPress={() => {
                // navigation.navigate("Donation");
              }}
              btnStyles={{ backgroundColor: colors.btnBlue }}
            >
              Donate Now
            </RegularButton>
          </Card>
        ))}
      </ScrollView>
    </Container>
  );
};

export default LandingScreen;
