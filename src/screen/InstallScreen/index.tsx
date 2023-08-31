import React from "react";
import * as S from "./TeamInstallScreen.styled";
import ApplicationSection from "./components/ApplicationSection";
import LinkSection from "./components/LinkSection";
import TeamTitleSection from "./components/TeamTitleSection";

export default function TeamInstallScreen() {
  return (
    <S.Container>
      <TeamTitleSection />
      <LinkSection />
      <ApplicationSection isAuto />
      <ApplicationSection />
    </S.Container>
  );
}
