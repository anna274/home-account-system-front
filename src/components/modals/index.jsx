import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from 'redux/actions';
import AccountModal from './accountModal';
import ConfirmationModal from './confirmationModal';
import CategoryModal from './categoryModal';
import LoginSettingModal from './loginSettingModal';
import AccountMembersModal from './accountMembersModal';
import BankAccountModal from './bankAccountModal';
import IncomesModal from './incomesModal';
import ExpensesModal from './expensesModal';
import ChartModal from './chartModal';
import PasswordSettingsModal from './passwordSettingsModal';
import {
  ACCOUNT_MODAL,
  CONFIRMATION_MODAL,
  CATEGORY_MODAL,
  LOGIN_SETTINGS_MODAL,
  ACCOUNT_MEMBER_MODAL,
  BANK_ACCOUNT_MODAL,
  INCOMES_MODAL,
  EXPENSES_MODAL,
  CHART_MODAL,
  PASSWORD_SETTINGS_MODAL,
} from 'consts/modalTypes';

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
    case CONFIRMATION_MODAL:
      return <ConfirmationModal {...modalProps} onClose={onClose} isOpen />;
    case CATEGORY_MODAL:
      return <CategoryModal {...modalProps} onClose={onClose} isOpen />;
    case LOGIN_SETTINGS_MODAL:
      return <LoginSettingModal {...modalProps} onClose={onClose} isOpen />;
    case ACCOUNT_MEMBER_MODAL:
      return <AccountMembersModal {...modalProps} onClose={onClose} isOpen />;
    case BANK_ACCOUNT_MODAL:
      return <BankAccountModal {...modalProps} onClose={onClose} isOpen />;
    case INCOMES_MODAL:
      return <IncomesModal {...modalProps} onClose={onClose} isOpen />;
    case EXPENSES_MODAL:
      return <ExpensesModal {...modalProps} onClose={onClose} isOpen />;
    case CHART_MODAL:
      return <ChartModal {...modalProps} onClose={onClose} isOpen />;
    case PASSWORD_SETTINGS_MODAL:
      return <PasswordSettingsModal {...modalProps} onClose={onClose} isOpen />;
    default: {
      throw new Error('Modal type is not specified!');
    }
  }
};

export default Modal;