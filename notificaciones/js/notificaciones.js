import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD417G-raCnishcFaE9VwH2KPRiDRDXL1s",
    authDomain: "mensajes-307ff.firebaseapp.com",
    projectId: "mensajes-307ff",
    storageBucket: "mensajes-307ff.appspot.com",
    messagingSenderId: "876755473454",
    appId: "1:876755473454:web:03173b77516be96df1bbbf",
    measurementId: "G-901C9N1G4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

  window.onload=function(){
    pedirPermiso();
    document.getElementById("autorizar").addEventListener('click',function(){
        pedirPermiso();
    });
    let enableForegroundNotification=true;
    messaging.onMessage(function(payload){
        console.log("mensaje recibido");
        if(enableForegroundNotification){
            const {title, ...options}=JSON.parse(payload.data.notification);
            navigator.serviceWorker.getRegistrations().then( registration =>{
                registration[0].showNotification(title, options);
            });
        }
    });

    function pedirPermiso(){
        messaging.requestPermission()
        .then(function(){
            console.log("Se han aceptado las notificaciones");
            hideAlert();
            return messaging.getToken();
        }).then(function(token){
            console.log(token);
            guardarToken(token);
        }).catch(function(err){
            console.log('No se ha recibido el permiso');
            showAlert();
        });
    }
    function guardarToken(token){
        var formData=new FormData();
        formData.append('token',token);
        axios.post('./php/guardarToken.php',formData).then( respuesta=>{
            console.log(respuesta);
        }).catch( e=>{
            console.log(e);
        });
    }
    function showAlert(){
        document.querySelector("#alertaError").classList.remove('d-none');
    }
    function hideAlert(){
        document.querySelector("#alertaError").classList.add('d-none');
    }
  }//llave on load