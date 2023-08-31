import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { Body1, Body1_B, Body2, Caption1, Caption2 } from "../../../../styles/typography";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background-color: ${Colors.white02};
  border: none;
  border-radius: 12px;
  gap: 24px;
  width: 32%;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.white04};
  }
  &:active {
    background-color: ${Colors.white05};
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
`

export const Title = styled.span`
  ${Body1_B};
  color: ${Colors.black01};
`;

export const Version = styled.span`
  ${Caption2};
  color: ${Colors.black05};
`;

export const Description = styled.span`
  ${Caption1};
  color: ${Colors.black05};
`;
