document.addEventListener("DOMContentLoaded", (event) => {
  const firebaseConfig = {
    // Firebase configuration object
    apiKey: "AIzaSyA4Q2kYoKmJMG-lGLF0OX11vRndf-0FcTU",

    authDomain: "usablityhub.firebaseapp.com",

    projectId: "usablityhub",

    storageBucket: "usablityhub.appspot.com",

    messagingSenderId: "629979190207",

    appId: "1:629979190207:web:47dbbb9ad0ee89cead870a",

    measurementId: "G-7FX2TL0S3C",
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Get the sign-in button element
  const signInButton = document.getElementById("googleSignIn");

  // Add a click event listener to the sign-in button
  signInButton.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
        window.location.href = "signin.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/popup-closed-by-user") {
          console.error(
            "The sign-in popup was closed by the user before finalizing the operation."
          );
        } else {
          console.error(errorCode, errorMessage);
        }
      });
  });
});
