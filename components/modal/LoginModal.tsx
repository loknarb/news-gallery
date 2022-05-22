import React from 'react';
import ReactModal from 'react-modal';
import Button from '../UI/Button';
import CloseLogo from '../UI/CloseLogo';
import icon from '../../public/favicon.png';
import Image from 'next/image';
import useUserAuth from '../hooks/useUserAuthHook';
import GithubLogo from '../header/GithubLogo';
import GoogleLogo from '../UI/GoogleLogo';
import Link from 'next/link';
const LoginModal = () => {
  const { shown, closeModalAuth } = useUserAuth((state) => state);
  console.log(shown);
  return (
    <ReactModal
      isOpen={shown}
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
      <Button className='absolute right-6 ' onClick={closeModalAuth}>
        <CloseLogo />
      </Button>
      <Image className='px-4' width={'35px'} height={'35px'} src={icon} />
      <div className='mt-5 mb-5 text-center font'>
        Unlock extra capabilities by signing in.
        <br /> Bookmarn, Filter, and Personalize your news.
      </div>
      <Button
        className='mt-2 flex bg-white border border-transparent rounded-lg py-1.5 px-2 text-black hover:bg-slate-400 '
        onClick={closeModalAuth}>
        <GithubLogo />
        <span className='font-mono ml-2'>Connect with Github</span>
      </Button>
      <Button
        className='mt-2 flex bg-white border border-transparent rounded-lg py-1.5 px-2 text-black hover:bg-slate-400 '
        onClick={closeModalAuth}>
        <GoogleLogo />
        <span className='font-mono ml-2 black'>Connect with Google</span>
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

export default LoginModal;
