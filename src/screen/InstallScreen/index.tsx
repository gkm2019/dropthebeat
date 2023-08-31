import React, { useEffect, useState } from "react";
import * as S from "./InstallScreen.styled";
import ApplicationSection from "./components/ApplicationSection";
import LinkSection from "./components/LinkSection";
import TeamTitleSection from "./components/TeamTitleSection";
import { useRouter } from "next/router";
import useGetTeamToolInfo from "@/api/team/useGetTeamToolInfo";
import { TeamToolType } from "@/types/api/teamTool";
import Dialog from "@/components/molecules/modals/dialog/Dialog";

export default function InstallScreen() {
  const router = useRouter();
  const { teamId } = router.query as { teamId: string };

  const [platform, setPlatform] = useState("");

  const { data } = useGetTeamToolInfo(teamId);

  const teamtoolCategory = (teamToolType: TeamToolType) => {
    return data?.teamtoolList.filter(({ type }) => type === teamToolType) ?? [];
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent.includes("Mac")
      ? "Mac"
      : "Windows";

    setPlatform(userAgent);
  }, []);

  return (
    <S.Container>
      <TeamTitleSection teamName={data?.name ?? ""} platform={platform} />
      <LinkSection
        confluenceLink={data?.confluenceURL}
        githubLink={data?.githubURLs}
      />
      {!!teamtoolCategory("auto").length && (
        <ApplicationSection
          teamToolType="auto"
          teamToolList={teamtoolCategory("auto")}
        />
      )}
      {!!teamtoolCategory("manual").length && (
        <ApplicationSection
          teamToolType="manual"
          teamToolList={teamtoolCategory("manual")}
        />
      )}
      {!!teamtoolCategory("link").length && (
        <ApplicationSection
          teamToolType="link"
          teamToolList={teamtoolCategory("link")}
        />
      )}
      {/* <Dialog /> */}
    </S.Container>
  );
}
