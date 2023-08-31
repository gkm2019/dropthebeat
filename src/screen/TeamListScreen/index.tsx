import { useRouter } from "next/router";
import * as S from "./TeamListScreen.styled";
import { MOCK_TEAM_LIST } from "@/constants/mocks";
import useGetTeamList from "@/api/team/useGetTeamList";

export function TeamListScreen() {
  const router = useRouter();

  const { data: teamList } = useGetTeamList();

  const handleTeamCard = (id: string) => {
    router.push(`/installation/team/${id}`);
  };
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>팀을 선택해주세요</S.Title>
      </S.TitleContainer>
      <S.TeamContainer>
        {teamList?.map(({ id, name }) => (
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
