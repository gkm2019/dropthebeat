import { useState, useEffect } from "react";
import * as S from "./ApplicationSection.styled";
import ApplicationCard from "../ApplicationCard/ApplicationCard";

export default function ApplicationSection() {
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.includes("Mac")
      ? "Mac"
      : "Windows";

    setPlatform(userAgent);
  }, []);

  return (
    <S.Container>
      <S.Title>Applications & packages to install</S.Title>
      <S.Title>Your OS is {platform}</S.Title>
      <S.CardContainer>
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
      </S.CardContainer>
    </S.Container>
  );
}
