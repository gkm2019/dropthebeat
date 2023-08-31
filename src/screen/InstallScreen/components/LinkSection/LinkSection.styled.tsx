import styled from "@emotion/styled";
import Colors from "../../../../styles/colors";
import { Body1 } from "../../../../styles/typography";

interface ButtonColors {
  primary: string;
  hover: string;
  active: string;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  gap: 16px 2%;
`;

export const ButtonContainer = styled.button<{
  full?: boolean;
  colors: ButtonColors;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: ${({ colors }) => colors.primary};
  border: none;
  border-radius: 12px;
  gap: 8px;
  width: ${({ full }) => (full ? "100%" : "49%")};

  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 8px 12px rgb(0 0 0 / 10%);

  &:hover {
    background-color: ${({ colors }) => colors.hover};
  }
  &:active {
    background-color: ${({ colors }) => colors.active};
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Text = styled.span`
  ${Body1};
  color: ${Colors.white01};
`;

export const DropdownContainer = styled.div<{ confluenceLink: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: ${({ confluenceLink }) =>
    confluenceLink ? "calc((98% - 64px) / 2)" : "calc(100% - 64px)"};
  @media (max-width: 767px) {
    width: calc(100% - 64px);
  }
  background-color: ${Colors.white02};
  top: 160px;
  right: 32px;

  border-radius: 12px;
  box-shadow: 0 8px 12px rgb(0 0 0 / 10%);

  @media (max-width: 767px) {
    width: calc(100% - 64px);
    top: 220px;
  }

  .dropdownItem {
    display: block;
    align-items: center;
    cursor: pointer;
    gap: 8px;
    ${Body1};
    padding: 8px 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      background-color: ${Colors.white04};
    }
  }

  .dropdownItem:first-of-type {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .dropdownItem:last-of-type {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
