import { H1, H2 } from "@/styles/typography";
import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  overflow: hidden;
  width: 49%;
  height: 67px;
  position: relative;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const BannerContent = styled.div<{ translateY: number }>`
  display: flex;
  width: 100%;
  justify-content: left;
  flex-direction: column;
  transform: translateY(${(props) => props.translateY}%);
  transition: transform 1s ease-in-out;
`;

export const BannerTextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 67px;
  gap: 8px;
  align-items: center;
`;

export const RankText = styled.span`
  ${H2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
