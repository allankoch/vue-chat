// Initialize Firebase
let config = {
  apiKey: "AIzaSyDmRMaHhzm-D19Fqjw6Zdt8esA_cgTLw7M",
  authDomain: "vue-chat-7a4ee.firebaseapp.com",
  databaseURL: "https://vue-chat-7a4ee.firebaseio.com",
  projectId: "vue-chat-7a4ee",
  storageBucket: "",
  messagingSenderId: "237439797208"
};

firebase.initializeApp(config);

let firebaseDatabaseRef = firebase.database();
let firebaseMessagesRef = firebase.database().ref('messages');
let firebasePeopleRef = firebase.database().ref('people');
