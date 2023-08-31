import React from "react";
import { ConfluenceIcon, GithubIcon } from "../../../../components/atoms/icon";
import * as S from "./LinkSection.styled";
import Colors from "../../../../styles/colors";

const CONFLUENCE_COLOR = {
  primary: "#0052CC",
  hover: "#0b57c8",
  active: "#1b5fc5",
};

const GITHUB_COLOR = {
  primary: Colors.black01,
  hover: Colors.black02,
  active: Colors.black03,
};

export default function LinkSection() {
  const handleConfluenceClick = () => {
    window.open("https://confluence.com");
  };
  const handleGithubClick = () => {
    window.open("https://github.com");
  };

  return (
    <S.Container>
      <S.ButtonContainer
        onClick={handleConfluenceClick}
        colors={CONFLUENCE_COLOR}
      >
        <ConfluenceIcon />
        <S.Text>Our Confluence</S.Text>
      </S.ButtonContainer>
      <S.ButtonContainer onClick={handleGithubClick} colors={GITHUB_COLOR}>
        <GithubIcon />
        <S.Text>Our Github organization</S.Text>
      </S.ButtonContainer>
    </S.Container>
  );
}
