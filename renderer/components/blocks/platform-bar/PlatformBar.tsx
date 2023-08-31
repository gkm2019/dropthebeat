import { useEffect, useState } from "react";
import * as S from "./PlatformBar.styled";

export default function PlatformBar() {
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.includes("Mac")
      ? "Mac"
      : "Windows";

    setPlatform(userAgent);
  }, []);
  return (
    <S.Container>
      <S.PlatformText>{platform}</S.PlatformText>
    </S.Container>
  );
}
