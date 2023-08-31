import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { H3_B } from "../../../../styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white01};
  gap: 16px;
  overflow: auto;
`;

export const Title = styled.span`
  ${H3_B};
  color: ${Colors.black01};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  background-color: ${Colors.white01};
  border: none;
  gap: 20px 2%;
`;