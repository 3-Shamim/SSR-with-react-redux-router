import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  dispatch({
    type: FETCH_USERS,
    payload: res
  });

  // Without async and await
  /* res
    .then(res => {
      dispatch({
        type: FETCH_USERS,
        payload: res
      });
    })
    .catch(err => console.log(err)); */
};
