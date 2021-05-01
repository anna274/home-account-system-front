import { modalTypes } from 'redux/types';
const initialState = { modalType: null };

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.SHOW_MODAL: {
      const { modalType, ...modalProps } = action.payload;
      return { ...state, modalType, modalProps };
    }
    case modalTypes.CLOSE_MODAL: {
      return { ...state, modalType: null };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;