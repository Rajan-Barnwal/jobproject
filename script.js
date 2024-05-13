
const firebaseConfig = {
  apiKey: "AIzaSyA4Q2kYoKmJMG-lGLF0OX11vRndf-0FcTU",
  authDomain: "usablityhub.firebaseapp.com",
  projectId: "usablityhub",
  storageBucket: "usablityhub.appspot.com",
  messagingSenderId: "629979190207",
  appId: "1:629979190207:web:47dbbb9ad0ee89cead870a",
  measurementId: "G-7FX2TL0S3C"
};
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);

const googleSignInButton = document.getElementById('googleSignIn');
googleSignInButton.addEventListener('click', async () => {
  
  const provider = new firebase.auth.GoogleAuthProvider();

  try {

    const result = await firebase.auth().signInWithPopup(provider);

    const token = result.credential.accessToken;

    const user = result.user;

    window.location.href = 'portal.html'; 
  } catch (error) {
  
    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.email;

  
    const credential = error.credential;

   
    alert(errorMessage);
  }
});