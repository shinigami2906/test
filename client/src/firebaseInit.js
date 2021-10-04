import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyAGKRWu-Lm7nYLQW6X16Wocm2tLTV3563E",
  authDomain: "eduexam-338c1.firebaseapp.com",
  projectId: "eduexam-338c1",
  storageBucket: "eduexam-338c1.appspot.com",
  messagingSenderId: "1023086348133",
  appId: "1:1023086348133:web:1572d888f0c5f59f5d438c",
  measurementId: "G-1V36DKW0L2"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken({

      }))
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      console.log(payload)
      resolve(payload);
    });
  });
