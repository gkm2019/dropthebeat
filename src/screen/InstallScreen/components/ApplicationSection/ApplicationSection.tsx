import React, { useState, useEffect } from "react";
import * as S from "./ApplicationSection.styled";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import { ApplicationType } from "../../../../types/application";

interface ApplicationSectionProps {
  isAuto?: boolean;
}

const MOCK_DATA: ApplicationType = {
  id: "0",
  image: "",
  name: "Github",
  version: "0.0.2",
  description: "Github 설명",
  type: "auto",
  script: "https://github.com",
};

const MOCK_LIST = new Array(10).fill(MOCK_DATA);

export default function ApplicationSection({
  isAuto,
}: ApplicationSectionProps) {
  return (
    <S.Container>
      <S.Title>{isAuto ? "자동 설치 가능" : "수동 설치"}</S.Title>
      <S.CardContainer>
        <S.CardWrap>
          {MOCK_LIST.map((item, i) => {
            return <ApplicationCard key={i} {...item} />;
          })}
        </S.CardWrap>
      </S.CardContainer>
    </S.Container>
  );
}
