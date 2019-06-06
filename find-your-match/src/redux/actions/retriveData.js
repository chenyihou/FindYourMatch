import { actionTypes } from "./actionTypes";

let url = "http://localhost:4000/api/ladder";
export let retriveLadder = () => async dispatch => {
  try {
    // let res = await fetch(url);
    // let data = await res.json();
    // if (data.status) {
    //   console.log(data);
    // }
    let data = { username: "sdf" };
    dispatch({ type: actionTypes.RETRIVE_LADDER_SUCCEED, payload: data });
  } catch (e) {
    console.log(e);
  }
};
