import React from 'react';
import ReactModal from 'react-modal';
import useDarkModeHook from '../hooks/useDarkMode';
import useLayout from '../hooks/useLayout';
import useModal from '../hooks/useModalHook';
import Button from '../UI/Button';
import CloseLogo from '../UI/CloseLogo';
import ListPadded from '../UI/ListPadded';

const SettingsModal = () => {
  const { shown, closeModal } = useModal((state) => state);
  const [isDark, setIsDark] = useDarkModeHook();
  const { spacingHandler, spacingType, layoutHandler, layoutType } = useLayout((state) => state);
  return (
    <ReactModal
      isOpen={shown}
      closeTimeoutMS={250}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
          display: 'flex',
          position: 'fixed',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '40',
        },
        content: {
          maxWidth: '24rem',
          maxHeight: '33rem',
          margin: '0 auto',
          top: '-50px',
          bottom: '0',
          right: '0',
          left: '0',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid rgb(51 65 85 / 1)',
          background: 'rgb(51 65 85 / 1)',
          color: 'white',
          width: '75%',
          position: 'relative',
          zIndex: '50',
        },
      }}>
      <Button
        className='transition-colors duration-250 hover:text-slate-500 absolute right-6 '
        onClick={closeModal}>
        <CloseLogo />
      </Button>
      <div className='mb-2 '>
        <span className='desktop:text-xl tracking-tight font-semibold phone:text-base'>
          Personalize your View
        </span>
      </div>
      <div className='border-b border-slate-500 my-2 -mx-6'></div>
      <div className='mt-3 mb-2 text-center'>
        <span className='text-xs font-bold pb-1 text-slate-200 font-mono tracking-tight'>
          Layout
        </span>
        <ul className='list-none'>
          <ListPadded>
            <div className='flex items-center justify-center'>
              <span className='tracking-tight font-semibold '>Grid</span>
              {layoutType !== 'grid' ? (
                <input
                  className=' bg-gray-300 transition-colors duration-300 cursor-pointer shadow-sm checked:bg-slate-800'
                  type='checkbox'
                  id='switch'
                  onClick={() => layoutHandler('GRID')}
                />
              ) : (
                <input
                  className=' bg-gray-300  transition-colors duration-300 cursor-pointer shadow-sm checked:bg-slate-800'
                  type='checkbox'
                  id='switch'
                  onClick={() => layoutHandler('FLEX')}
                />
              )}
              <label
                className='tracking-tight  after:bg-white after:hover:bg-slate-800 bg-slate-500 hover:bg-slate-300 ml-2 mr-2'
                htmlFor='switch'></label>
              <span className='tracking-tight font-semibold '>Row</span>
            </div>
          </ListPadded>
        </ul>
      </div>
      <div className='mt-3 mb-2 text-center'>
        <span className='text-xs font-bold pb-1 text-slate-200 font-mono tracking-tight'>
          Theme
        </span>

        <ul className='list-none'>
          <ListPadded>
            <Button
              className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold transition-colors duration-300'
              onClick={() => setIsDark(true)}>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                {!isDark ? (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white hover:border-3 transition-colors duration-300' />
                ) : (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white bg-white transition-colors duration-300' />
                )}
              </span>
              <span className='tracking-tight'>Dark</span>
            </Button>
          </ListPadded>
          <ListPadded>
            <Button
              className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold  transition-colors duration-300'
              onClick={() => setIsDark(false)}>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                {isDark ? (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white hover:border-3 transition-colors duration-300' />
                ) : (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white bg-white transition-colors duration-300 ' />
                )}
              </span>
              <span className='tracking-tight'>Light</span>
            </Button>
          </ListPadded>
        </ul>
      </div>
      <div className='my-2 text-center'>
        <span className='text-xs font-bold pb-1 text-slate-200 font-mono tracking-tight'>
          Density
        </span>
        <ul className='list-none'>
          <ListPadded>
            <Button
              className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold transition-colors duration-300'
              onClick={() => spacingHandler('COMPACT')}>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                {spacingType === '0.5rem' || '' ? (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white bg-white  transition-colors duration-300' />
                ) : (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white hover:border-3 transition-colors duration-300'></span>
                )}
              </span>
              <span className='tracking-tight'>Compact</span>
            </Button>
          </ListPadded>
          <ListPadded>
            <Button
              className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold transition-colors duration-300'
              onClick={() => spacingHandler('NORMAL')}>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                {spacingType === '1.5rem' || '' ? (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white bg-white  transition-colors duration-300' />
                ) : (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white hover:border-3 transition-colors duration-300'></span>
                )}
              </span>
              <span className='tracking-tight'>Normal</span>
            </Button>
          </ListPadded>
          <ListPadded>
            <Button
              className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold transition-colors duration-300'
              onClick={() => spacingHandler('COZY')}>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                {spacingType === '2.5rem' || '' ? (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white bg-white  transition-colors duration-300' />
                ) : (
                  <span className='w-full h-full flex rounded-full border-2 border-slate-400 center hover:border-white hover:border-3 transition-colors duration-300'></span>
                )}
              </span>
              <span className='tracking-tight font-semibold'>Cozy</span>
            </Button>
          </ListPadded>
        </ul>
      </div>
      <div className='my-2 text-center'>
        <span className='text-xs font-bold pb-1 text-slate-200 font-mono tracking-tight'>
          Preferences
        </span>
        <ul className='list-none'>
          <ListPadded>
            <div className='flex items-center'>
              <input
                className=' bg-gray-300  cursor-pointer shadow-sm checked:bg-slate-800'
                type='checkbox'
                id='switch2'
                // checked
              />
              <label
                className='tracking-tight  after:bg-white after:hover:bg-slate-800 bg-slate-500 hover:bg-slate-300 ml-1 mr-2'
                htmlFor='switch2'></label>
              <span className='tracking-tight font-semibold'>Open links in new tab</span>
            </div>
          </ListPadded>
        </ul>
      </div>
    </ReactModal>
  );
};

export default SettingsModal;
