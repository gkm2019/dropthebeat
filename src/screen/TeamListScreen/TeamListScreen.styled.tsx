import Colors from "@/styles/colors";
import { Body1, H1 } from "@/styles/typography";
import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 32px;
  gap: 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.span`
  ${H1};
  color: ${Colors.black01};
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
  padding-bottom: 24px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TeamCardContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: ${Colors.white02};

  box-shadow: 0 8px 12px rgb(0 0 0 / 10%);

  cursor: pointer;

  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${Colors.white04};
  }
  &:active {
    background-color: ${Colors.white05};
  }
`;

export const TeamCardText = styled.span`
  color: ${Colors.black01};
  ${Body1};
`;
