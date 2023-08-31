import useGetTeamtoolList from "@/api/teamtool/useGetTeamtoolRank";
import * as S from "./RankingCard.styled";
import { useEffect, useState } from "react";
import { GetTeamToolResponse } from "@/types/api/teamTool";

export default function RankingCard() {
  const { data: teamtoolList } = useGetTeamtoolList();

  const [toolList, setToolList] = useState<GetTeamToolResponse[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = toolList?.length ?? 1;
  const translateY = -currentIndex * (100 / totalItems);

  useEffect(() => {
    if (!teamtoolList) {
      return;
    }

    setToolList(teamtoolList.slice(0, 10));
  }, [teamtoolList]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <S.BannerContainer>
      <S.BannerContent translateY={translateY}>
        {toolList?.map(({ name }, i) => (
          <S.BannerTextContainer key={name}>
            <S.RankText>{i + 1}. </S.RankText>
            <S.RankText>{name}</S.RankText>
          </S.BannerTextContainer>
        ))}
      </S.BannerContent>
    </S.BannerContainer>
  );
}
