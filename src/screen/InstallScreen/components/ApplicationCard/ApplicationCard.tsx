import React, { useState } from "react";
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
  script,
}: ApplicationCardProps) {
  const { open } = useModal();

  const [isInstallLoading, setIsInstallLoading] = useState(false);

  const {
    data: checkInstall,
    refetch: refetchCheckInstall,
    isLoading: isLoadingCheckInstall,
  } = useGetApplicationCheckInstall(script);

  const handleInstall = async () => {
    setIsInstallLoading(true);
    await getApplicationInstall(script, "arm64")
      .then((res) => {
        if (teamToolType === "auto") {
          open.toast("설치가 완료되었습니다.", `application-success-${script}`);
        } else if (teamToolType === "manual") {
          navigator.clipboard.writeText(res);
          open.toast(
            "명령어가 복사되었습니다.",
            `application-success-${script}`
          );
        } else if (teamToolType === "link") {
          window.open(res);
        }
        refetchCheckInstall();
        setIsInstallLoading(false);
      })
      .catch(() => {
        open.toast("설치에 실패했습니다.", `application-error-${script}`);
        setIsInstallLoading(false);
      });
  };

  console.log(isInstallLoading, isLoadingCheckInstall);

  return (
    <S.Container
      onClick={handleInstall}
      disabled={!!checkInstall || isInstallLoading || isLoadingCheckInstall}
      checkInstall={!!checkInstall}
    >
      {isInstallLoading || isLoadingCheckInstall ? (
        <LoadingIndicator />
      ) : (
        <S.TextContainer>
          <S.Title
            disabled={
              !!checkInstall || isInstallLoading || isLoadingCheckInstall
            }
          >{`${name}${!!checkInstall ? " ✅" : ""}`}</S.Title>
          <S.Version
            disabled={
              !!checkInstall || isInstallLoading || isLoadingCheckInstall
            }
          >
            Version: {version}
          </S.Version>
          <S.Description
            disabled={
              !!checkInstall || isInstallLoading || isLoadingCheckInstall
            }
          >
            {description}
          </S.Description>
        </S.TextContainer>
      )}
    </S.Container>
  );
}
