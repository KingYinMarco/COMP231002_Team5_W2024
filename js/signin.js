function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // TODO: Redirect to dashboard or show success message
            alert("Signed in successfully!");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

function signInAsGuest() {
    firebase.auth().signInAnonymously()
        .then(() => {
            // Signed in as a guest
            // TODO: Redirect to a guest-specific page or dashboard
            alert("Signed in as guest successfully!");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
