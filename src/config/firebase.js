import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb50yAg1QxdqykAxnbPMOkZwwa61LZnZQ",
  authDomain: "join-react.firebaseapp.com",
  projectId: "join-react",
  storageBucket: "join-react.appspot.com",
  messagingSenderId: "447374627906",
  appId: "1:447374627906:web:75dc2cffa7e49be66d89db",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

