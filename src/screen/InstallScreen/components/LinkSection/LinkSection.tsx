import React, { useState } from "react";
import { ConfluenceIcon, GithubIcon } from "../../../../components/atoms/icon";
import * as S from "./LinkSection.styled";
import Colors from "../../../../styles/colors";
import { GithubURL } from "@/types/api/teamTool";

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

interface LinkSectionProps {
  confluenceLink?: string;
  githubLink?: GithubURL[];
}

export default function LinkSection({
  confluenceLink,
  githubLink,
}: LinkSectionProps) {
  const [mouseOver, setMouseOver] = useState(false);
  const handleConfluenceClick = () => {
    window.open(confluenceLink);
  };
  const handleGithubClick = (link: string) => {
    window.open(link);
  };
  const handleGithubMouseEnter = () => {
    setMouseOver(true);
  };
  const handleGithubMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <S.Container>
      {confluenceLink && (
        <S.ButtonContainer
          onClick={handleConfluenceClick}
          colors={CONFLUENCE_COLOR}
          full={!githubLink?.length}
        >
          <ConfluenceIcon />
          <S.Text>Confluence</S.Text>
        </S.ButtonContainer>
      )}
      {!!githubLink?.length && (
        <S.ButtonContainer
          onMouseEnter={handleGithubMouseEnter}
          onMouseLeave={handleGithubMouseLeave}
          colors={GITHUB_COLOR}
          full={!confluenceLink}
        >
          <GithubIcon />
          <S.Text>Github</S.Text>
        </S.ButtonContainer>
      )}
      {mouseOver && (
        <S.DropdownContainer
          onMouseEnter={handleGithubMouseEnter}
          onMouseLeave={handleGithubMouseLeave}
          confluenceLink={!!confluenceLink}
        >
          {githubLink?.map(({ name, url }) => {
            return (
              <div
                key={name}
                className="dropdownItem"
                onClick={() => {
                  handleGithubClick(url);
                }}
              >
                {name}
              </div>
            );
          })}
        </S.DropdownContainer>
      )}
    </S.Container>
  );
}
