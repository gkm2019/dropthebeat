import { GithubIcon } from "../../../../components/atoms/icon";
import * as S from "./ApplicationCard.styled";

export default function ApplicationCard() {
  return (
    <S.Container>
      <GithubIcon size="40" color="black" />
      <S.TextContainer>
        <S.Title>Github</S.Title>
        <S.Version>Version: 0.0.2</S.Version>
        <S.Description>Description</S.Description>
      </S.TextContainer>
    </S.Container>
  );
}
