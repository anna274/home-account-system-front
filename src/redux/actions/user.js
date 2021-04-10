import { loginUserInfo, registerUserInfo } from 'services'
import { userTypes } from 'redux/types'
import customHistory from 'customHistory';

const loginUser = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: userTypes.LOGIN_USER_REQUEST,
      });
      await loginUserInfo(formData);
      dispatch({
        type: userTypes.LOGIN_USER_SUCCESS,
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
      await registerUserInfo(formData);
      dispatch({
        type: userTypes.REGISTER_USER_SUCCESS,
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

export { loginUser, registerUser };
