import React, { useEffect, useState } from "react";
import * as S from "./TeamTitleSection.styled";

interface TeamTitleSectionProps {
  teamName: string;
}

export default function TeamTitleSection({ teamName }: TeamTitleSectionProps) {
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.includes("Mac")
      ? "Mac"
      : "Windows";

    setPlatform(userAgent);
  }, []);

  return (
    <S.Container>
      <S.Title>{teamName}</S.Title>
      <S.Platform>Your OS is {platform}</S.Platform>
    </S.Container>
  );
}
