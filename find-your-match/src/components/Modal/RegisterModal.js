import { Modal, Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../redux/actions/loginAction";
import firebase from "firebase";
export let showRegisterModal = () => {};
class _RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    showRegisterModal = () => {
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
    let email = "hcy1391697848@gmail.com";
    let password = "zxczxc";
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        // ...
      });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user);

        // ...
      } else {
        // User is signed out.
        // ...
      }
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
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <Modal
        title="Title"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
      >
        <p>{ModalText}</p>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.profile.isLogin
});

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export const LoginModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(_RegisterModal);
