import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCDbGtyH8C2-YvMALK3V-hwNRnTIbuUDrY",
    authDomain: "mytest-51680.firebaseapp.com",
    databaseURL: "https://mytest-51680.firebaseio.com",
    projectId: "mytest-51680",
    storageBucket: "mytest-51680.appspot.com",
    messagingSenderId: "322387539214",
    appId: "1:322387539214:web:522259a9feaf0083"
};

firebase.initializeApp(firebaseConfig);

export default firebase
var hello = firebase.functions().httpsCallable('hello');
hello({
    text: 'hi'
}).then(function (result) {
    // Read result of the Cloud Function.
    console.log(result)
    // ...
});