import Colors from "@/styles/colors";
import { Body2, H1, H2 } from "@/styles/typography";
import styled from "@emotion/styled";

export const BackDrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.black01}32;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  min-width: 320px;
  padding: 32px;
  background-color: ${Colors.white01};
  border-radius: 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  ${H2};
  color: ${Colors.black01};
`;

export const SubTitle = styled.span`
  ${Body2};
  color: ${Colors.black05};
`;
