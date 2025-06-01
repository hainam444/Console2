// Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyAo9526iKke809dBoLkofF83U5X2ppzKds",
          authDomain: "du-an-hai-nam-an-cam.firebaseapp.com",
          projectId: "du-an-hai-nam-an-cam",
          storageBucket: "du-an-hai-nam-an-cam.firebasestorage.app",
          messagingSenderId: "734967803010",
          appId: "1:734967803010:web:def3e718ac2c66b940589b",
          measurementId: "G-L1GX9RXWBD"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();
console.log(firebase.app().name)

