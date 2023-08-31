import { useRouter } from "next/router";
import * as S from "./TeamListScreen.styled";
import { MOCK_TEAM_LIST } from "@/constants/mocks";

export function TeamListScreen() {
  const router = useRouter();

  const handleTeamCard = (id: string) => {
    router.push(`/installation/team/${id}`);
  };
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>팀을 선택해주세요</S.Title>
      </S.TitleContainer>
      <S.TeamContainer>
        {MOCK_TEAM_LIST.map(({ id, name }) => (
          <S.TeamCardContainer
            key={id}
            onClick={() => {
              handleTeamCard(id);
            }}
          >
            <S.TeamCardText>{name}</S.TeamCardText>
          </S.TeamCardContainer>
        ))}
      </S.TeamContainer>
    </S.Container>
  );
}
