import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from 'redux/actions';
import AccountModal from './accountModal';
import { ACCOUNT_MODAL } from 'consts/modalTypes';

const Modal = () => {
  const { modalType, modalProps } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!modalType) {
    return <></>;
  }

  const onClose = () => {
    dispatch(closeModal());
    if (modalProps.onClose) {
      modalProps.onClose();
    }
  };

  switch (modalType) {
    case ACCOUNT_MODAL:
      return <AccountModal {...modalProps} onClose={onClose} isOpen />;
    default: {
      throw new Error('Modal type is not specified!');
    }
  }
};

export default Modal;