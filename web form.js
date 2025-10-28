function blurEmail(element) {
            element.classList.remove('email-focus');
        }

        function focusEmail(element) {
            element.classList.add('email-focus');
        }
        
        // --- Question b.iii ---
        function toCaps(element) {
            element.value = element.value.toUpperCase();
        }

        // --- Question b.iv ---
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Create a new Bootstrap Modal object and show it
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        });