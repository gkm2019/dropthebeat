import Colors from "@/styles/colors";
import styled from "@emotion/styled";

export const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${Colors.black05};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color:  ${Colors.black05} transparent transparent transparent;
  }
  div:nth-of-type(1) {
    animation-delay: -0.45s;
  }
  div:nth-of-type(2) {
    animation-delay: -0.3s;
  }
  div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function LoadingIndicator() {
  return (
    <LdsRing>
      <div />
      <div />
      <div />
      <div />
    </LdsRing>
  );
}
