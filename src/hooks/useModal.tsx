// import { InfoIcon } from "@/components/atoms/icon";
import showToast from "@/utils/showToast";
import { useMemo } from "react";

const useModal = () => {
  const isVisible = {};
  const open = useMemo(
    () => ({
      toast: showToast,
    }),
    []
  );
  const close = useMemo(() => ({}), []);

  return { isVisible, open, close };
};

export default useModal;
