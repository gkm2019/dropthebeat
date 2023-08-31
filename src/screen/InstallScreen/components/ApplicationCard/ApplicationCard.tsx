import React from "react";
import { GithubIcon } from "../../../../components/atoms/icon";
import * as S from "./ApplicationCard.styled";
import { ApplicationType } from "../../../../types/application";
import useModal from "@/hooks/useModal";
import { getApplicationInstall } from "@/api/install";
import useGetApplicationCheckInstall from "@/api/install/useGetApplicationCheckInstall";

interface ApplicationCardProps extends ApplicationType {}

export default function ApplicationCard({
  id,
  name,
  version,
  description,
  type,
  script,
}: ApplicationCardProps) {
  const { open } = useModal();

  const { data: checkInstall, refetch: refetchCheckInstall } = useGetApplicationCheckInstall(name);

  const handleInstall = async () => {
    await getApplicationInstall(name).then((res) => {
      if (res.status === 200) {
        refetchCheckInstall();
      } else {
        open.toast('설치에 실패했습니다.', `application-error-${name}`);
      }
    }).catch(() => {
      open.toast('설치에 실패했습니다.', `application-error-${name}`);
    });
  };

  return (
    <S.Container onClick={handleInstall} disabled={!!checkInstall}>
      <GithubIcon size="40" color="black" />
      <S.TextContainer>
        <S.Title disabled={!!checkInstall}>{`${name}${!!checkInstall ? ' ✅' : ''}`}</S.Title>
        <S.Version disabled={!!checkInstall}>Version: {version}</S.Version>
        <S.Description disabled={!!checkInstall}>{description}</S.Description>
      </S.TextContainer>
    </S.Container>
  );
}
