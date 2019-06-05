import { actionTypes } from "./actionTypes";
let url = "http://localhost:4000/api/login";
export let login = props => async (dispatch, getState) => {
  try {
    let res = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify({}) // body data type must match "Content-Type" header
    });
    let data = await res.json();
    if (data.username) {
      localStorage.setItem("username", data.username);
    }
    dispatch({ type: actionTypes.LOGIN_SUCCEED, payload: data });
  } catch (e) {
    console.log(e);
  }
};

export let logout = () => ({ type: actionTypes.LOGOUT });
