import React from "react";
import {
    Button
} from "antd";
import firebase from '../../../firebase'
import {
    showLoginModal
} from "../../Modal/LoginModal";

import {
    connect
} from 'react-redux'
import {
    firestoreConnect
} from 'react-redux-firebase'



let nowHandler = () => {
    let user = firebase.auth().currentUser;
    if (!user) {
        showLoginModal()
    }
    console.log('user', user)
    const name = user.displayName
    firebase.database().ref('queue/').set({
        name
    });
}


export function _HeadBackground(props) {
    console.log(props)
    return ( < div id = "background-container" >
        <
        div id = "head-background" >
        <
        Button ghost type = 'danger'
        onClick = {
            nowHandler
        } > Now < /Button> <Button ghost type='danger' > tradition < /Button > < / div > </div >
    );
}

const mapStateToProps = (state) => {
    return {
        // projects: state.firestore.ordered.projects,
        // auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export const HeadBackground = connect(mapStateToProps)(firestoreConnect([{
    collection: 'queue'
}])(_HeadBackground))