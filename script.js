        function showMessageBox(message) {
            document.getElementById('messageText').innerText = message;
            document.getElementById('messageBox').style.display = 'flex'; // Show the message box
        }

        document.getElementById('closeMessageBox').addEventListener('click', function() {
            document.getElementById('messageBox').style.display = 'none'; // Hide the message box
        });

        const getStartedButton = document.getElementById('getStartedButton');

        getStartedButton.addEventListener('click', function() {
            showMessageBox('Thank you for your interest! We will be in touch shortly.');
        });

        function showMessageBox(message) {
            document.getElementById('messageText').innerText = message;
            document.getElementById('messageBox').style.display = 'flex'; // Show the message box
        }

        document.getElementById('closeMessageBox').addEventListener('click', function() {
            document.getElementById('messageBox').style.display = 'none'; // Hide the message box
        });

        document.getElementById('signInForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            let isValid = true;

            const usernameInput = document.getElementById('username');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirmPassword');

            const usernameError = document.getElementById('usernameError');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const confirmPasswordError = document.getElementById('confirmPasswordError');

            usernameError.style.display = 'none';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            confirmPasswordError.style.display = 'none';

            if (usernameInput.value.trim() === '') {
                usernameError.style.display = 'block';
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                emailError.style.display = 'block';
                isValid = false;
            }

            if (passwordInput.value.length < 8) {
                passwordError.style.display = 'block';
                isValid = false;
            }

            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                showMessageBox('Sign Up Successful! (This is a demo. No data is actually submitted.)');
                this.reset(); 
            } else {
                showMessageBox('Please correct the errors in the form.');
            }
        });

          function showMessageBox(message) {
            document.getElementById('messageText').innerText = message;
            document.getElementById('messageBox').style.display = 'flex'; 
        }

        document.getElementById('closeMessageBox').addEventListener('click', function() {
            document.getElementById('messageBox').style.display = 'none'; 
        });

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            let isValid = true;

            const emailInput = document.getElementById('loginEmail');
            const passwordInput = document.getElementById('loginPassword');

            const emailError = document.getElementById('loginEmailError');
            const passwordError = document.getElementById('loginPasswordError');

            emailError.style.display = 'none';
            passwordError.style.display = 'none';

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                emailError.style.display = 'block';
                isValid = false;
            }

            if (passwordInput.value.trim() === '') {
                passwordError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                showMessageBox('Log In Successful! (This is a demo. No actual login occurs.)');
                this.reset(); 
            } else {
                showMessageBox('Please correct the errors in the form.');
            }
        });