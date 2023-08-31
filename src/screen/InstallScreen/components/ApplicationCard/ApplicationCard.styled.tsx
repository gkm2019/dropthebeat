import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import {
  Body1,
  Body1_B,
  Body2,
  Caption1,
  Caption2,
} from "../../../../styles/typography";

export const Container = styled.button<{ checkInstall: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background-color: ${Colors.white02};
  border: none;
  border-radius: 12px;
  gap: 24px;
  width: 32%;

  height: 120px;

  box-shadow: 0 8px 12px rgb(0 0 0 / 10%);

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${Colors.white04};
  }
  &:active {
    background-color: ${Colors.white05};
  }
  &:disabled {
    background-color: ${({ checkInstall }) =>
      checkInstall ? Colors.jetStreamShade : Colors.black05}98;
    cursor: default;
    box-shadow: none;
  }

  @media (max-width: 767px) {
    width: 48%;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.span<{ disabled: boolean }>`
  ${Body1_B};
  color: ${({ disabled }) => (disabled ? Colors.black03 : Colors.black01)};
`;

export const Version = styled.span<{ disabled: boolean }>`
  ${Caption2};
  color: ${({ disabled }) => (disabled ? Colors.black03 : Colors.black05)};
`;

export const Description = styled.span<{ disabled: boolean }>`
  ${Caption1};
  color: ${({ disabled }) => (disabled ? Colors.black03 : Colors.black05)};
`;

export const IndicatorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
