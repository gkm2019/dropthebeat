import { toast } from "react-toastify";
import { StyledToastContainer } from "./Toast.styled";

export default function Toast() {
  return (
    <StyledToastContainer
      position={toast.POSITION.BOTTOM_CENTER}
      limit={1}
      hideProgressBar
      pauseOnHover
      draggable
      autoClose={3000}
      theme="dark"
      closeButton={false}
    />
  );
}
