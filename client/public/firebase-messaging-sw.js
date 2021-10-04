importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

const config = {
  apiKey: "AIzaSyA7qGymRTzEFxHCJeLPl87qK50FgqVuZfc",
  authDomain: "level-calculus-304907.firebaseapp.com",
  projectId: "level-calculus-304907",
  storageBucket: "level-calculus-304907.appspot.com",
  messagingSenderId: "1030644308568",
  appId: "1:1030644308568:web:23e2e62141d3108c85882d",
  measurementId: "G-RDC5RH0JBM"
};


firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});
