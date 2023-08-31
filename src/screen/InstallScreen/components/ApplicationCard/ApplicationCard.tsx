import React from "react";
import * as S from "./ApplicationCard.styled";
import { ApplicationType } from "../../../../types/application";
import useModal from "@/hooks/useModal";
import { getApplicationInstall } from "@/api/install";
import useGetApplicationCheckInstall from "@/api/install/useGetApplicationCheckInstall";
import LoadingIndicator from "@/components/atoms/Indicator";
import { TeamToolType } from "@/types/api/teamTool";

interface ApplicationCardProps extends ApplicationType {
  teamToolType: TeamToolType;
}

export default function ApplicationCard({
  name,
  version,
  description,
  teamToolType,
}: ApplicationCardProps) {
  const { open } = useModal();

  const {
    data: checkInstall,
    refetch: refetchCheckInstall,
    isLoading,
  } = useGetApplicationCheckInstall(name);

  const handleInstall = async () => {
    await getApplicationInstall(name)
      .then((res) => {
        if (res.status === 200) {
          if (teamToolType === "auto") {
            open.toast("설치가 완료되었습니다.", `application-success-${name}`);
            refetchCheckInstall();
          } else if (teamToolType === "manual") {
            open.toast("설치가 완료되었습니다.", `application-success-${name}`);
          } else if (teamToolType === "link") {
            window.open(res.data);
          }
        } else {
          open.toast("설치에 실패했습니다.", `application-error-${name}`);
        }
      })
      .catch(() => {
        open.toast("설치에 실패했습니다.", `application-error-${name}`);
      });
  };

  return (
    <S.Container onClick={handleInstall} disabled={!!checkInstall || isLoading} checkInstall={!!checkInstall}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <S.TextContainer>
          <S.Title disabled={!!checkInstall || isLoading}>{`${name}${
            !!checkInstall ? " ✅" : ""
          }`}</S.Title>
          <S.Version disabled={!!checkInstall || isLoading}>Version: {version}</S.Version>
          <S.Description disabled={!!checkInstall || isLoading}>{description}</S.Description>
        </S.TextContainer>
      )}
    </S.Container>
  );
}
