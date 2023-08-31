import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { B1_B } from "../../../../styles/typography";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border: none;
  border-radius: 50%;

  background-color: ${Colors.americanPurpleTint};
  transition: all 0.2s ease;

  position: relative;
  top: 0;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.americanPurple};
    top: -16px;

    box-shadow: 0 12px 12px rgb(0 0 0 / 10%);
  }
  &:active {
    background-color: ${Colors.americanPurpleShade};

    box-shadow: 0 24px 24px rgb(0 0 0 / 10%);
  }
`;

export const ButtonText = styled.span`
  color: ${Colors.white01};
  ${B1_B}
`;
