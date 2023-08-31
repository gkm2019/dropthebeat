import { InfoIcon } from "@/components/atoms/icon";
import { toast } from "react-toastify";

const showToast = (message: string, toastId: string) => {
  toast(message, { icon: <InfoIcon />, toastId });
};

export default showToast;
