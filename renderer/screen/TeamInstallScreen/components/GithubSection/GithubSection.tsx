import { GithubIcon } from "../../../../components/atoms/icon";
import * as S from "./GithubSection.styled";

export default function GithubSection() {
  return (
    <S.Container>
      <GithubIcon />
      <S.Text>Our Github organization</S.Text>
    </S.Container>
  );
}
