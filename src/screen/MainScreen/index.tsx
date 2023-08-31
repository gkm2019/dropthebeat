import React from 'react';
import { useRouter } from "next/router";
import { CircleButton } from "../../components/atoms/button";
import * as S from "./MainScreen.styled";

export default function MainScreen() {
  const router = useRouter();

  const goToTeam = () => {
    router.push("/team/list");
  };

  return (
    <S.Container>
      <S.ButtonContainer>
        <CircleButton onClick={goToTeam}>팀</CircleButton>
      </S.ButtonContainer>
    </S.Container>
  );
}
