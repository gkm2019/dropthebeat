import styled from "@emotion/styled";
import { H1, H3_B } from "../../styles/typography";
import Colors from "../../styles/colors";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 32px;
  gap: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.span`
  ${H3_B};
  color: ${Colors.black01};
`;

