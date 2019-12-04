import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAfhEEloifNSMm2tj3m8VvHc5-NbGiD63k",
    authDomain: "todolist-3ef4d.firebaseapp.com",
    databaseURL: "https://todolist-3ef4d.firebaseio.com",
    projectId: "todolist-3ef4d",
    storageBucket: "todolist-3ef4d.appspot.com",
    messagingSenderId: "960221752935",
    appId: "1:960221752935:web:b534ed14f5681b09b06ec2",
    measurementId: "G-D4ZXKTZ78E"
  }

  

  firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();