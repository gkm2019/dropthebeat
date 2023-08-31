import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { H3_B } from "../../../../styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white01};
  gap: 16px;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
  max-height: 300px;
  overflow: auto;
  background-color: ${Colors.white02};
  border-radius: 24px;
`;

export const Title = styled.span`
  ${H3_B};
  color: ${Colors.black01};
`;

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  border: none;
  gap: 16px 2%;
`;
