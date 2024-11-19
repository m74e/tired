import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  setCount: () => set((state) => ({ count: state.count + 1 })),
  nextModal: 0,
  setNextModal: (nextModal) => set({ nextModal }),
  resetNextModal: () => set(() => ({ nextModal: 0 })),
}));

export default useStore;
