import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBeVSEskVx5P9zb2l3kU2Hg7tQwi6WdCI4",
  authDomain: "dragon-news-b4977.firebaseapp.com",
  projectId: "dragon-news-b4977",
  storageBucket: "dragon-news-b4977.firebasestorage.app",
  messagingSenderId: "538761740052",
  appId: "1:538761740052:web:c15ae38b70e58d60ee8c01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;