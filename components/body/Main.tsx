import React from 'react';
import Popup from 'reactjs-popup';
import usePopUp from '../hooks/usePopUpHook';
import useWindowSize from '../hooks/useWindowSize';
import MainDesktop from './MainDesktop';
import MainMobile from './MainMobile';
import MainTablet from './MainTablet';

const Main: React.FC = () => {
  const { width } = useWindowSize();
  const shown = usePopUp((state) => state.shown);
  return (
    <>
      {width! >= 992 ? <MainDesktop /> : ''}
      {width! > 768 && width! < 992 ? <MainTablet /> : ''}
      {width! <= 768 ? <MainMobile /> : ''}
      <Popup
        open={shown}
        {...{
          overlayStyle: { background: 'transparent' },
          contentStyle: {
            background: '#e2e8f0',
            color: '#111827',
            width: '13rem',
            borderWidth: '1px',
            borderRadius: '0.375rem',
            borderColor: '#94a3b8',
            margin: '10px auto',
            height: '2.3rem',
          },
        }}>
        <div className='text-center text-md font-bold'>Copied to your clipboard</div>
      </Popup>
    </>
  );
};

export default Main;
