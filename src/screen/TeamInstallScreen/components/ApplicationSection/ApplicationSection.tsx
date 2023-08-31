import { useState, useEffect } from "react";
import * as S from "./ApplicationSection.styled";
import ApplicationCard from "../ApplicationCard/ApplicationCard";

export default function ApplicationSection() {
  return (
    <S.Container>
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
