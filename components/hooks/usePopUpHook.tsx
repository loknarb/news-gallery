import create from 'zustand';

const usePopUp = create<{ shown: boolean; openPopUp: () => void; closePopup: () => void }>(
  (set) => ({
    shown: false,
    openPopUp: () =>
      set(() => ({
        shown: true,
      })),
    closePopup: () =>
      set(() => ({
        shown: false,
      })),
  })
);

export default usePopUp;
