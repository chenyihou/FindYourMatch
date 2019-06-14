import {
  Modal,
  Button
} from "antd";
import React from "react";
import {
  connect
} from "react-redux";
import {
  bindActionCreators
} from "redux";
import {
  login
} from "../../redux/actions/loginAction";
import firebase from "firebase";
export let showLoginModal = () => {};

var provider = new firebase.auth.GoogleAuthProvider();
class _LoginModal extends React.Component {
  constructor(props) {
    super(props);
    showLoginModal = () => {
      this.setState({
        visible: true
      });
    };
  }
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false
  };

  handleOk = async () => {
    // this.setState({
    //   ModalText: "Verifying user information",
    //   confirmLoading: true
    // });
    // this.props.login();
    // let email = "hcy1391697848@gmail.com";
    // let password = "zxczxc";
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     // ...
    //   });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result);
        // ...
      })
      .catch(function (error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.isLogin) {
      return {
        visible: false,
        confirmLoading: false
      };
    }
    return null;
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };
  render() {
    const {
      visible,
      confirmLoading,
      ModalText
    } = this.state;
    return ( <
      Modal title = "Title"
      visible = {
        visible
      }
      onOk = {
        this.handleOk
      }
      confirmLoading = {
        confirmLoading
      }
      onCancel = {
        this.handleCancel
      } >
      <
      p > {
        ModalText
      } < /p> <
      /Modal>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.profile.isLogin
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);
export const LoginModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LoginModal);