import {
  actionTypes
} from "./actionTypes";
// let url = "http://localhost:4000/api/login";
// export let login = props => async (dispatch, getState) => {
//   try {
//     let res = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, cors, *same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json"
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrer: "no-referrer", // no-referrer, *client
//       body: JSON.stringify({}) // body data type must match "Content-Type" header
//     });
//     let data = await res.json();
//     if (data.username) {
//       localStorage.setItem("username", data.username);
//     }
//     dispatch({ type: actionTypes.LOGIN_SUCCEED, payload: data });
//   } catch (e) {
//     console.log(e);
//   }
// };


export let login = (credentials) => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({
        type: 'LOGIN_SUCCESS'
      });
    }).catch((err) => {
      dispatch({
        type: 'LOGIN_ERROR',
        err
      });
    });

  }
}

export const signOut = () => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({
        type: 'SIGNOUT_SUCCESS'
      })
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({
        type: 'SIGNUP_SUCCESS'
      });
    }).catch((err) => {
      dispatch({
        type: 'SIGNUP_ERROR',
        err
      });
    });
  }
}