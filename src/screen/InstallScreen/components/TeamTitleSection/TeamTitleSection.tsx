import React, { useEffect, useState } from "react";
import * as S from "./TeamTitleSection.styled";

interface TeamTitleSectionProps {
  teamName: string;
  platform?: string;
}

export default function TeamTitleSection({ teamName, platform }: TeamTitleSectionProps) {
  return (
    <S.Container>
      <S.Title>{teamName}</S.Title>
      <S.Platform>Your OS is {platform}</S.Platform>
    </S.Container>
  );
}
