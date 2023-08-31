import { ButtonHTMLAttributes } from "react";
import * as S from "./CircleButton.styled";

interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CircleButton({ children, ...rest }: CircleButtonProps) {
  return <S.Container {...rest}>
    <S.ButtonText>{children}</S.ButtonText>
  </S.Container>
}
