import React from "react";
import * as S from "./InstallScreen.styled";
import ApplicationSection from "./components/ApplicationSection";
import LinkSection from "./components/LinkSection";
import TeamTitleSection from "./components/TeamTitleSection";
import { useRouter } from "next/router";
import useGetTeamToolInfo from "@/api/team/useGetTeamToolInfo";
import { TeamToolType } from "@/types/api/teamTool";

export default function InstallScreen() {
  const router = useRouter();
  const { teamId } = router.query as { teamId: string };

  const { data } = useGetTeamToolInfo("22efc401-aa14-4026-a026-71777425bf7c");

  const teamtoolCategory = (teamToolType: TeamToolType) => {
    return data?.teamtoolList.filter(({ type }) => type === teamToolType) ?? [];
  };

  return (
    <S.Container>
      <TeamTitleSection teamName={data?.name ?? ""} />
      <LinkSection
        confluenceLink={data?.confluenceURL}
        githubLink={data?.githubURLs}
      />
      {!!teamtoolCategory('auto').length && (
        <ApplicationSection teamToolType='auto' teamToolList={teamtoolCategory('auto')} />
      )}
      {!!teamtoolCategory('manual').length && (
        <ApplicationSection teamToolType='manual' teamToolList={teamtoolCategory('manual')} />
      )}
      {!!teamtoolCategory('link').length && (
        <ApplicationSection teamToolType='link' teamToolList={teamtoolCategory('link')} />
      )}
    </S.Container>
  );
}
