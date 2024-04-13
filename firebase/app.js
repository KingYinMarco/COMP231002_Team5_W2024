// document.addEventListener('DOMContentLoaded', function () {
//     const registerForm = document.getElementById('register-form');
//     const passwordInput = document.getElementById('password');
//     const strengthMeter = document.getElementById('password-strength-meter');

//     // Attach event listeners if elements are present

//     if (registerForm) {
//         registerForm.addEventListener('submit', function (e) {
//             e.preventDefault();
//             const email = registerForm.email.value;
//             const password = registerForm.password.value;
//             const userType = registerForm.userType.value;

//             firebase.auth().createUserWithEmailAndPassword(email, password)
//                 .then(userCredential => {
//                     // Write user info to Firebase Database
//                     return firebase.database().ref('users/' + userCredential.user.uid).set({
//                         email, userType
//                     });
//                 })
//                 .then(() => {
//                     alert('Registration successful! You can now sign in.');
//                     registerForm.reset(); // Reset form fields
//                 })
//                 .catch(error => {
//                     console.error(error.message);
//                     alert(`Failed to register: ${error.message}`);
//                 });
//         });
//     }
// });

// // Sign-in logic
// const signInForm = document.getElementById('signin-form');
// if (signInForm) {
//     signInForm.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const email = signInForm['email'].value;
//         const password = signInForm['password'].value;

//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 console.log('User signed in');
//                 // Here you could redirect to a dashboard or user-specific page
//             })
//             .catch((error) => {
//                 console.error(error.message);
//                 alert(`Failed to sign in: ${error.message}`);
//             });
//     });
// }


document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');

    // Attach event listeners if elements are present
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = registerForm.email.value;
            const password = registerForm.password.value;
            const userType = registerForm.userType.value;

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                    // Write user info to Firebase Database
                    return firebase.database().ref('users/' + userCredential.user.uid).set({
                        email, userType
                    });
                })
                .then(() => {
                    alert('Registration successful! You can now sign in.');
                    registerForm.reset(); // Reset form fields
                     // Redirect to sign-in page
                     window.location.href = 'signin.html'; // Change 'signin.html' to your actual sign-in page URL
                })
                .catch(error => {
                    console.error(error.message);
                    alert(`Failed to register: ${error.message}`);
                });
        });
    }
});

// Modified sign-in logic with additional error handling and redirection
const signInForm = document.getElementById('signin-form');
if (signInForm) {
    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = signInForm['email'].value;
        const password = signInForm['password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('User signed in');
                // Redirect to a blank page upon successful sign-in
                // window.location.href = 'index.html'; // Ensure you have a blank.html file
                window.location.href = 'main_dashboard.html';  //for registered users
            })
            .catch((error) => {
                console.error(error);
                if (error.code === 'auth/wrong-password') {
                    alert('The password is incorrect. Please try again.');
                } else {
                    alert('Failed to sign in. Please check your email and password and try again.');
                }
            });
        });
}

