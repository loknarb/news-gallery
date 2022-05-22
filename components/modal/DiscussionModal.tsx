import React from 'react';
import ReactModal from 'react-modal';
import Button from '../UI/Button';
import CloseLogo from '../UI/CloseLogo';
const DiscussionModal = () => {
  return (
    <ReactModal isOpen={false}>
      <Button>
        <CloseLogo />
      </Button>
      <div className='mt-6 mb-8 text-center text-theme-label-secondary'>DiscussionModal</div>;
    </ReactModal>
  );
};

export default DiscussionModal;
