import React from 'react';
import ReactModal from 'react-modal';
import useDarkModeHook from '../hooks/useDarkMode';
import useModal from '../hooks/useModalHook';
import Button from '../UI/Button';
import CloseLogo from '../UI/CloseLogo';
import Discussions from '../UI/Discussions';
import List from '../UI/List';
import Popular from '../UI/Popular';
import Upvote from '../UI/Upvote';

const SettingsModal = () => {
  const { shown, closeModal } = useModal((state) => state);
  const [isDark, setIsDark] = useDarkModeHook();
  console.log('isDark', isDark);
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
          maxHeight: '30rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid rgb(51 65 85 / 1)',
          background: 'rgb(51 65 85 / 1)',
          color: 'white',
          width: '100%',
          position: 'relative',
          zIndex: '50',
        },
      }}>
      <Button className='absolute right-6 ' onClick={closeModal}>
        <CloseLogo />
      </Button>
      <div className='mb-2 '>
        <span className='text-xl tracking-tight font-semibold '>Personalize your View</span>
      </div>
      <div className='border-b border-slate-500 my-2 -mx-6'></div>
      <div className='mt-3 mb-2 text-center'>
        <span className='text-xs font-bold pb-1 text-slate-200 font-mono tracking-tight'>
          Theme
        </span>
        <ul className='list-none'>
          <List>
            <Button
              className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold items-center'
              onClick={() => setIsDark(true)}>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                <span className='w-full h-full flex rounded-full border-2 border-white center'></span>
              </span>
              <span className='tracking-tight'>Dark</span>
            </Button>
          </List>
          <List>
            <Button
              className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold items-center'
              onClick={() => setIsDark(false)}>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                <span className='w-full h-full flex rounded-full border-2 border-white center'></span>
              </span>
              <span className='tracking-tight'>Light</span>
            </Button>
          </List>
        </ul>
      </div>
      <div className='my-2 text-center'>
        <span className='text-xs font-bold pb-1 text-slate-200 font-mono tracking-tight'>
          Density
        </span>
        <ul className='list-none'>
          <List>
            <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold items-center'>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                <span className='w-full h-full flex rounded-full border-2 border-white center'></span>
              </span>
              <span className='tracking-tight'>Compact</span>
            </Button>
          </List>
          <List>
            <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold items-center'>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                <span className='w-full h-full flex rounded-full border-2 border-white center'></span>
              </span>
              <span className='tracking-tight'>Normal</span>
            </Button>
          </List>
          <List>
            <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold items-center'>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                <span className='w-full h-full flex rounded-full border-2 border-white center'></span>
              </span>
              <span className='tracking-tight'>Cozy</span>
            </Button>
          </List>
        </ul>
      </div>
      <div className='my-2 text-center'>
        <span className='text-xs font-bold pb-1 text-slate-200 font-mono tracking-tight'>
          Preferences
        </span>
        <ul className='list-none'>
          <List>
            <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold items-center'>
              <span className='w-7 h-7 p-1.5 rounded-10 mr-1.5'>
                <span className='w-full h-full flex rounded-full border-2 border-white center'></span>
              </span>
              <span className='tracking-tight'>Open links in new tab</span>
            </Button>
          </List>
        </ul>
      </div>
    </ReactModal>
  );
};

export default SettingsModal;
