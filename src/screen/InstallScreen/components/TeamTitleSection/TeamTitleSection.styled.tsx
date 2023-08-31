import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { B1_B, H3_B } from "../../../../styles/typography";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 16px 2%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 49%;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Title = styled.span`
  ${B1_B};
  color: ${Colors.black01};
`;

export const Platform = styled.span`
  ${H3_B};
  color: ${Colors.black01};
`;
