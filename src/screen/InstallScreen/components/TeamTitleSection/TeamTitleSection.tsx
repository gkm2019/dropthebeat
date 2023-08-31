import React, { useEffect, useState } from "react";
import * as S from "./TeamTitleSection.styled";
import RankingCard from "../RankingCard/RankingCard";

interface TeamTitleSectionProps {
  teamName: string;
  platform?: string;
}

export default function TeamTitleSection({
  teamName,
  platform,
}: TeamTitleSectionProps) {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{teamName}</S.Title>
        <S.Platform>OS: {platform}</S.Platform>
      </S.TitleContainer>
      <RankingCard />
    </S.Container>
  );
}
