import { createApp } from "vue"
// import { createApp } from 'vue/dist/vue.esm-bundler';
import router from "./router/router";
import { createPinia } from 'pinia'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwifuV-Ac0N0Y-uxzWe4NoXJA2Rnp01xE",
  authDomain: "housework-69e4d.firebaseapp.com",
  projectId: "housework-69e4d",
  storageBucket: "housework-69e4d.appspot.com",
  messagingSenderId: "674595343262",
  appId: "1:674595343262:web:9b090236cab7cc496ca48f",
  measurementId: "G-PSHLYZTL1X"
};


initializeApp(firebaseConfig);


const pinia = createPinia()
const app = createApp({});
app.use(router)
app.use(pinia)
app.mount("#app");