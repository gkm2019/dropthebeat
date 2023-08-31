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
  script
}: ApplicationCardProps) {
  const { open } = useModal();

  const {
    data: checkInstall,
    refetch: refetchCheckInstall,
    isLoading,
  } = useGetApplicationCheckInstall(script);

  const handleInstall = async () => {
    await getApplicationInstall(script, "arm64")
      .then((res) => {
        if (teamToolType === "auto") {
          open.toast("설치가 완료되었습니다.", `application-success-${script}`);
        } else if (teamToolType === "manual") {
          navigator.clipboard.writeText(res);
          open.toast("명령어가 복사되었습니다.", `application-success-${script}`);
        } else if (teamToolType === "link") {
          window.open(res.data);
        }
        refetchCheckInstall();
      })
      .catch(() => {
        open.toast("설치에 실패했습니다.", `application-error-${script}`);
      });
  };

  return (
    <S.Container
      onClick={handleInstall}
      disabled={!!checkInstall || isLoading}
      checkInstall={!!checkInstall}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <S.TextContainer>
          <S.Title disabled={!!checkInstall || isLoading}>{`${name}${
            !!checkInstall ? " ✅" : ""
          }`}</S.Title>
          <S.Version disabled={!!checkInstall || isLoading}>
            Version: {version}
          </S.Version>
          <S.Description disabled={!!checkInstall || isLoading}>
            {description}
          </S.Description>
        </S.TextContainer>
      )}
    </S.Container>
  );
}
