// Adicione suas credenciais Firebase aqui
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyC0rk8tjhM3lWpRqnDF5uPTlT6eJD9m8Sc",
    authDomain: "redesocial-4337d.firebaseapp.com",
    projectId: "redesocial-4337d",
    storageBucket: "redesocial-4337d.appspot.com",
    messagingSenderId: "143189978122",
    appId: "1:143189978122:web:2285f1393b91352f3b03f3",
    measurementId: "G-Q5ZWBSMTCT"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Adicione um ouvinte de evento para o formulário de login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Faça a autenticação com Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
            console.log('Login bem-sucedido!', userCredential.user);
        })
        .catch((error) => {
            // Trate erros de autenticação
            console.error('Erro de autenticação:', error.message);
        });
});
