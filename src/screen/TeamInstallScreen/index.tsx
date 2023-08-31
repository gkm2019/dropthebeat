import { useState, useEffect } from "react";
import * as S from "./TeamInstallScreen.styled";
import ApplicationSection from "./components/ApplicationSection";
import GithubSection from "./components/GithubSection";
import TeamTitleSection from "./components/TeamTitleSection";

export default function TeamInstallScreen() {
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.includes("Mac")
      ? "Mac"
      : "Windows";

    setPlatform(userAgent);
  }, []);

  return (
    <S.Container>
      <TeamTitleSection />
      <GithubSection />
      <S.TitleContainer>
        <S.Title>Applications & packages to install</S.Title>
        <S.Title>Your OS is {platform}</S.Title>
      </S.TitleContainer>
      <ApplicationSection />
    </S.Container>
  );
}
