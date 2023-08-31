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

  cursor: pointer;

  &:hover {
    background-color: ${Colors.americanPurple};
  }
  &:active {
    background-color: ${Colors.americanPurpleShade};
  }
`;

export const ButtonText = styled.span`
  color: ${Colors.white01};
  ${B1_B}
`;