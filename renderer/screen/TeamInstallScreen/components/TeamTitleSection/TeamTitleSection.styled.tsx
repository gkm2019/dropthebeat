import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { H1 } from "../../../../styles/typography";

export const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${Colors.white01};
  border: 2px solid ${Colors.black01};
  border-radius: 12px;
`;

export const Title = styled.span`
  ${H1};
  color: ${Colors.black01};
`;