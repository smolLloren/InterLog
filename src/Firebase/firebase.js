import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCNP9-6EWyAOFa3db5oNyMa7M2beVC_J_I",
    authDomain: "crud-test-4857e.firebaseapp.com",
    projectId: "crud-test-4857e",
    storageBucket: "crud-test-4857e.appspot.com",
    messagingSenderId: "883132059970",
    appId: "1:883132059970:web:c2846ceb299eff7e3a78db",
    measurementId: "G-REL91NTCCL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);