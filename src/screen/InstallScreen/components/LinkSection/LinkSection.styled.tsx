import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { Body1 } from "../../../../styles/typography";

interface ButtonColors {
  primary: string;
  hover: string;
  active: string;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  gap: 16px 2%;
`;

export const ButtonContainer = styled.button<{ colors: ButtonColors }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: ${({ colors }) => colors.primary};
  border: none;
  border-radius: 12px;
  gap: 8px;
  width: 49%;

  cursor: pointer;

  &:hover {
    background-color: ${({ colors }) => colors.hover};
  }
  &:active {
    background-color: ${({ colors }) => colors.active};
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Text = styled.span`
  ${Body1};
  color: ${Colors.white01};
`;
