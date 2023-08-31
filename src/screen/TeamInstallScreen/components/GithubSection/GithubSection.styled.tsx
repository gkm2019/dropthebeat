import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { Body1 } from "../../../../styles/typography";

export const Container = styled.button`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${Colors.black01};
  border: 2px solid ${Colors.black01};
  border-radius: 12px;
  gap: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.black02};
  }
  &:active {
    background-color: ${Colors.black03};
  }
`;

export const Text = styled.span`
  ${Body1};
  color: ${Colors.white01};
`;