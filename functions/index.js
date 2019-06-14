// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

var db = admin.firestore();
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original

var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

exports.queue=functions.https.onCall((data,context)=>{
  var setAda = docRef.set({
    username:data
  });
  
})

exports.hello = functions.https.onCall((data, context) => {
  console.log('helloworld')
  return {
    text: 'hello world'
  }
})