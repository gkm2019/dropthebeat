import Colors from "@/styles/colors";
import { Body2 } from "@/styles/typography";
import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
  width: 100%;
  max-width: 500px;
  padding: 0;
  display: flex;
  align-items: center;

  .Toastify__toast {
    background: none;
    box-shadow: none;
    padding: 24px;
    width: 100%;
  }

  .Toastify__toast-body {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    border-radius: 8px;
    padding: 16px;
    gap: 8px;
    background-color: ${Colors.black01};
    color: ${Colors.white01};
    ${Body2}
  }

  .Toastify__toast-icon {
    height: 100%;
    margin: 0;
  }
`;