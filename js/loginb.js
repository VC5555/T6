<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA6xAIy_Hq014u4Ronl661Rni-E25ZFB0s",
    authDomain: "login-bc68f.firebaseapp.com",
    projectId: "login-bc68f",
    storageBucket: "login-bc68f.appspot.com",
    messagingSenderId: "832494997695",
    appId: "1:832494997695:web:7b102a98c60ac3b48e360a",
    measurementId: "G-ECZKQTTV4L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>