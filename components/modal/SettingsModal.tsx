import React from 'react';
import ReactModal from 'react-modal';
import useModal from '../hooks/useModalHook';
import Button from '../UI/Button';
import CloseLogo from '../UI/CloseLogo';

const SettingsModal = () => {
  const { shown, closeModal } = useModal((state) => state);
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
          maxHeight: '24rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          alignItems: 'center',
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
      <div className='mt-5 mb-5 text-center font'>
        Unlock extra capabilities by signing in.
        <br /> Bookmarn, Filter, and Personalize your news.
      </div>
      <Button
        className='mt-2 flex bg-white border border-transparent rounded-lg py-1.5 px-2 text-black hover:bg-slate-400 items-center'
        onClick={closeModal}>
        <span className='font-serif text-sm font-medium ml-2'>Connect with Github</span>
      </Button>
      <Button
        className='mt-2 flex bg-white border border-transparent rounded-lg py-1.5 px-2 text-black hover:bg-slate-400 items-center'
        onClick={closeModal}>
        <span className='font-serif text-sm font-medium ml-2 '>Connect with Google</span>
      </Button>
      <div className='mt-6 mb-3 text-xs text-center'>
        <a href=''>
          <span>
            By signing in I accept the Terms of Services <br />& the Privacy Policy
          </span>
        </a>
      </div>
    </ReactModal>
  );
};

export default SettingsModal;
