import create from 'zustand';
const useSideBar = create<{ sideBar: boolean; hideSideBar: () => void; showSideBar: () => void }>(
  (set) => ({
    sideBar: false,
    hideSideBar: () =>
      set(() => ({
        sideBar: false,
      })),
    showSideBar: () =>
      set(() => ({
        sideBar: true,
      })),
  })
);
export default useSideBar;
