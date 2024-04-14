import { create } from "zustand";

export interface SidebarState {
  isOpen: boolean;
  isMinimal: boolean;
  handleOpenOrClose: () => void;
  handleClose: () => void;
  handleChangeSidebar: () => void;
  handleOpenOnMobile: () => void;
}

export const useSidebarStore = create<SidebarState>()((set) => ({
  isOpen: false,
  isMinimal: false,
  handleOpenOrClose: () => set((state) => ({ isOpen: !state.isOpen })),
  handleClose: () => set({ isOpen: false }),
  handleChangeSidebar: () => set((state) => ({ isMinimal: !state.isMinimal })),
  handleOpenOnMobile: () => set({ isOpen: true, isMinimal: false }),
}));
