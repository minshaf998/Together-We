import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

const ProjectView = styled.View`
  padding: 15px;
  padding-top: 0px;
  align-items: center;
`;

const MyText = styled.Text`
  font-weight: 900;
  font-size: 36px;
`;

const ProjectText: FunctionComponent = () => {
  return (
    <ProjectView>
      <MyText>Projects</MyText>
    </ProjectView>
  );
};
export default ProjectText;
