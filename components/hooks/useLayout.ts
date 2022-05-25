import create from 'zustand';

const useLayout = create<{
  layoutType: string;
  spacingType: string;
  spacingHandler: (spacingType: string) => void;
  layoutHandler: (layoutType: string) => void;
}>((set) => ({
  layoutType: 'grid',
  spacingType: '1.5rem',
  spacingHandler: (spacingType: string) => {
    switch (spacingType) {
      case 'COMPACT':
        set((state) => ({
          spacingType: '0.5rem',
          layoutType: state.layoutType,
        }));
        break;
      case 'COZY':
        set((state) => ({
          spacingType: '2.5rem',
          layoutType: state.layoutType,
        }));
        break;
      case 'NORMAL':
        set((state) => ({
          spacingType: '1.5rem',
          layoutType: state.layoutType,
        }));
        break;
      default:
        set((state) => ({
          spacingType: state.spacingType,
          layoutType: state.layoutType,
        }));
        break;
    }
  },
  layoutHandler: (layoutType: string) => {
    switch (layoutType) {
      case 'GRID':
        set((state) => ({
          spacingType: state.spacingType,
          layoutType: 'grid',
        }));
        break;
      case 'FLEX':
        set((state) => ({
          spacingType: state.spacingType,
          layoutType: 'flex',
        }));
        break;
      default:
        set((state) => ({
          spacingType: state.spacingType,
          layoutType: state.layoutType,
        }));
        break;
    }
  },
}));
export default useLayout;
