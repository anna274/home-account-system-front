import { loginUserInfo, registerUserInfo, editAccountInfo } from 'services';
import { userTypes, modalTypes } from 'redux/types';
import customHistory from 'customHistory';

const successfulLoginUser = () => {
  return async (dispatch) => {
    try {
      let user = localStorage.getItem('homeToken')
        ? JSON.parse(localStorage.getItem('homeToken'))
        : null;
      if (!user) {
        dispatch({
          type: userTypes.LOGIN_USER_REQUEST,
        });
        user = await loginUserInfo();
      }
      customHistory.push('/');
      dispatch({
        type: userTypes.LOGIN_USER_SUCCESS,
        payload: user,
      });
    } catch (e) {
      dispatch({
        type: userTypes.LOGIN_USER_FAILURE,
        payload: e,
      });
    }
  };
};

const loginUser = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: userTypes.LOGIN_USER_REQUEST,
      });
      const user = await loginUserInfo(formData);
      // console.log(user.headers['Set-Cookie'])
      localStorage.setItem('homeToken', JSON.stringify(user.data));
      dispatch({
        type: userTypes.LOGIN_USER_SUCCESS,
        payload: user.data,
      });
      customHistory.push('/');
    } catch (e) {
      dispatch({
        type: userTypes.LOGIN_USER_FAILURE,
        payload: e,
      });
    }
  };
};

const registerUser = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: userTypes.REGISTER_USER_REQUEST,
      });
      const user = await registerUserInfo(formData);
      localStorage.setItem('homeToken', JSON.stringify(user.data));
      dispatch({
        type: userTypes.REGISTER_USER_SUCCESS,
        payload: user.data,
      });
      customHistory.push('/');
    } catch (e) {
      dispatch({
        type: userTypes.REGISTER_USER_FAILURE,
        payload: e,
      });
    }
  };
};

const logoutUser = () => {
  return function (dispatch) {
    localStorage.removeItem('homeToken');
    // localStorage.removeItem('refreshToken');
    // setAuthToken(false);
    dispatch({
      type: userTypes.LOGOUT_USER_SUCCESS,
    });
    customHistory.push('/login');
  };
};

const editUser = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: userTypes.EDIT_USER_REQUEST,
      });
      const updatedUser = await editAccountInfo(formData);
      dispatch({
        type: userTypes.EDIT_USER_SUCCESS,
        payload: updatedUser.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    } catch (e) {
      dispatch({
        type: userTypes.EDIT_USER_FAILURE,
        payload: e,
      });
    }
  };
};

export { loginUser, registerUser, editUser, successfulLoginUser, logoutUser };
