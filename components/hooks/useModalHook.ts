import create from 'zustand';

const useModal = create<{
  shown: boolean;
  openModal: () => void;
  closeModal: () => void;
}>((set) => ({
  shown: false,
  loggedIn: false,
  openModal: () =>
    set(() => ({
      shown: true,
    })),
  closeModal: () =>
    set(() => ({
      shown: false,
    })),
}));
export default useModal;
