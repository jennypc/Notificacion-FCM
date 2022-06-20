////importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js');
////importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging.js');
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
//import { getMessaging, onBackgroundMessage}  from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging.js';
////import { onBackgroundMessage}  from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging-sw.js';
//
//const firebaseApp = {
//  apiKey: 'AIzaSyD417G-raCnishcFaE9VwH2KPRiDRDXL1s',
//  authDomain: 'mensajes-307ff.firebaseapp.com',
//  projectId: 'mensajes-307ff',
//  storageBucket: 'mensajes-307ff.appspot.com',
//  messagingSenderId: '876755473454',
//  appId: '1:876755473454:web:03173b77516be96df1bbbf',
//  measurementId: 'G-901C9N1G4K',
//}; 
//
//const app = initializeApp(firebaseConfig);
//const messaging = getMessaging(firebaseApp);
//
////const messaging = getMessaging();
//onBackgroundMessage(messaging, (payload) => {
//  console.log('[firebase-messaging-sw.js] Received background message ', payload);
//  const notificationTitle = 'Background Message Title';
//  const notificationOptions = {
//    body: 'Background Message body.',
//    icon: '/firebase-logo.png'
//  };
//
//  self.registration.showNotification(notificationTitle,
//    notificationOptions);
//});