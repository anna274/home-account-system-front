import { modalTypes } from 'redux/types';

export const showModal = (modalInfo) => ({
  type: modalTypes.SHOW_MODAL,
  payload: modalInfo,
});

export const closeModal = () => ({
  type: modalTypes.CLOSE_MODAL,
});