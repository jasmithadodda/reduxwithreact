import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST,
    };
  };
  export const fetchUsersSuccess = () => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
    };
  };
  export const fetchUsersError = () => {
    return {
      type: FETCH_USERS_ERROR,
      payload: error,
    };
  };