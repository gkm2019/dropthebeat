import React from "react";
import { GithubIcon } from "../../../../components/atoms/icon";
import * as S from "./ApplicationCard.styled";
import { ApplicationType } from "../../../../types/application";
import useModal from "@/hooks/useModal";

export default function ApplicationCard({
  id,
  name,
  version,
  description,
  type,
  script,
}: ApplicationType) {
  const { open } = useModal();

  return (
    <S.Container
      onClick={() => {
        open.toast("준비중입니다.", id);
      }}
    >
      <GithubIcon size="40" color="black" />
      <S.TextContainer>
        <S.Title>{name}</S.Title>
        <S.Version>Version: {version}</S.Version>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.Container>
  );
}
