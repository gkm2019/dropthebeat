import React from "react";
import * as S from "./ApplicationSection.styled";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import { MOCK_APP_LIST } from "@/constants/mocks";
import { ApplicationType } from "@/types/application";
import { TeamToolType } from "@/types/api/teamTool";

interface ApplicationSectionProps {
  teamToolType: TeamToolType;
  teamToolList?: ApplicationType[];
}

export default function ApplicationSection({
  teamToolType,
  teamToolList,
}: ApplicationSectionProps) {
  const title = () => {
    switch (teamToolType) {
      case 'auto':
        return "자동 설치 가능";
      case 'manual':
        return "수동 설치";
      case 'link':
        return "링크";
      default:
        return "";
    }
  }
  return (
    <S.Container>
      <S.Title>{title()}</S.Title>
      <S.CardContainer>
        <S.CardWrap>
          {teamToolList?.map((item, i) => {
            return <ApplicationCard key={i} {...item} />;
          })}
        </S.CardWrap>
      </S.CardContainer>
    </S.Container>
  );
}
