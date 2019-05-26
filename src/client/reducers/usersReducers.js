import { FETCH_USERS } from "../actions/usersActions";

const initState = {
  userList: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        userList: action.payload.data
      };
    default:
      return state;
  }
};

// Same things
/* const userReducers = (state = initState, action) => {
  switch (action.type) {
    case FEATCH_USERS:
      return {
        ...state,
        users: action.payload.data
      };
    default:
      return state;
  }
};

export default userReducers; */
