import { loginUserInfo, registerUserInfo, editAccountInfo } from 'services'
import { userTypes, modalTypes } from 'redux/types'
import customHistory from 'customHistory';

const successfulLoginUser = () => {
  // return async (dispatch) => {
  //   try{
  //     dispatch({
  //       type: userTypes.LOGIN_USER_REQUEST,
  //     });
  //     const user = await loginUserInfo();
  //     customHistory.push('/');
  //     dispatch({
  //       type: userTypes.LOGIN_USER_SUCCESS,
  //       payload: user,
  //     });
  //   }catch(e) {
  //     dispatch({
  //       type: userTypes.LOGIN_USER_FAILURE,
  //       payload: e,
  //     });
  //   }
  // };
}

const loginUser = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: userTypes.LOGIN_USER_REQUEST,
      });
      const user = await loginUserInfo(formData);
      console.log(user.headers['set-cookie'])
      dispatch({
        type: userTypes.LOGIN_USER_SUCCESS,
        payload: user.data,
      });
      customHistory.push('/');
    }catch(e) {
      dispatch({
        type: userTypes.LOGIN_USER_FAILURE,
        payload: e,
      });
    }
  };
}

const registerUser = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: userTypes.REGISTER_USER_REQUEST,
      });
      const user = await registerUserInfo(formData);
      dispatch({
        type: userTypes.REGISTER_USER_SUCCESS,
        payload: user.data,
      });
      customHistory.push('/');
    }catch(e) {
      dispatch({
        type: userTypes.REGISTER_USER_FAILURE,
        payload: e,
      });
    }
  };
}

const editUser = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: userTypes.EDIT_USER_REQUEST,
      });
      const updatedUser = await editAccountInfo(formData);
      dispatch({
        type: userTypes.EDIT_USER_SUCCESS,
        payload: updatedUser.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL
      });
    }catch(e) {
      dispatch({
        type: userTypes.EDIT_USER_FAILURE,
        payload: e,
      });
    }
  };
}

export { loginUser, registerUser, editUser, successfulLoginUser };
