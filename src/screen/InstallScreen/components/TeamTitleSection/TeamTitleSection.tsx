import React, { useEffect, useState } from 'react';
import * as S from "./TeamTitleSection.styled";

export default function TeamTitleSection() {
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.includes("Mac")
      ? "Mac"
      : "Windows";

    setPlatform(userAgent);
  }, []);

  return (
    <S.Container>
      <S.Title>드랍더비트</S.Title>
      <S.Platform>Your OS is {platform}</S.Platform>
    </S.Container>
  );
}
