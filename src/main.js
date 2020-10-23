import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBllMYRnD0tIum9xdSzsHdGt_OK5XRLzhQ",
  authDomain: "vue-todo-b9c9e.firebaseapp.com",
  databaseURL: "https://vue-todo-b9c9e.firebaseio.com",
  projectId: "vue-todo-b9c9e",
  storageBucket: "vue-todo-b9c9e.appspot.com",
  messagingSenderId: "663003617878",
  appId: "1:663003617878:web:4d0a3abaa6b5d7570af9f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
