import * as S from "./TeamInstallScreen.styled";
import ApplicationSection from "./components/ApplicationSection";
import GithubSection from "./components/GithubSection";
import TeamTitleSection from "./components/TeamTitleSection";

export default function TeamInstallScreen() {
  return (
    <S.Container>
      <TeamTitleSection />
      <GithubSection />
      <ApplicationSection />
    </S.Container>
  );
}
