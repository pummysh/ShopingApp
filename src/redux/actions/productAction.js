import {AUTH} from '../configs/types';

export const login = payload => ({
  type: AUTH.LOGIN,
  payload: payload,
});

export const logout = () => ({
  type: AUTH.LOGOUT,
});

export const saveDynamicLink = link => {
  return dispatch => {
    try {
      dispatch({
        type: AUTH.SAVE_DYNAMIC_LINK_SUCCESS,
        payload: link,
      });
    } catch (err) {
      dispatch({type: AUTH.SAVE_DYNAMIC_LINK_FAIL, payload: err});
    }
  };
};

export const setDynamicLinkLoader = value => {
  return dispatch => {
    dispatch({
      type: AUTH.SET_DYNAMIC_LINK_LOADER,
      payload: value,
    });
  };
};
