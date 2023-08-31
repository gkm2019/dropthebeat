import { ReactNode } from "react";
import { create } from "zustand";

interface ModalStoreState {
  content: ReactNode;

  setContent: (content: ReactNode) => void;
  clearContent: () => void;
}

const useModalStore = create<ModalStoreState>((set) => ({
  content: null,

  setContent: (content) => set(() => ({ content })),
  clearContent: () => set(() => ({ content: null })),
}));

export default useModalStore;
