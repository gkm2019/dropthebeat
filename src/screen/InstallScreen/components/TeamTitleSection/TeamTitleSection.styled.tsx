import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { B1_B, H3_B } from "../../../../styles/typography";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Title = styled.span`
  ${B1_B};
  color: ${Colors.black01};
`;

export const Platform = styled.span`
  ${H3_B};
  color: ${Colors.black01};
`;
