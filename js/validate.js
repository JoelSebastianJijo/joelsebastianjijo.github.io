// Client-side validation for the Contact form.
// Validates Name, Email and Message before allowing "submission".
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    if (!form) {
        return;
    }

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMsg = document.getElementById("form-success");

    // Simple helper to show/clear an error message for a field.
    const setError = (fieldId, message) => {
        const errorEl = document.getElementById(`${fieldId}-error`);
        if (errorEl) {
            errorEl.textContent = message;
        }
    };

    const isValidEmail = (value) => {
        // Basic pattern: something@something.something
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;

        // Clear old messages.
        ["name", "email", "message"].forEach((fieldId) => setError(fieldId, ""));
        successMsg.textContent = "";

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        if (nameValue === "") {
            setError("name", "Please enter your name.");
            isValid = false;
        }

        if (emailValue === "") {
            setError("email", "Please enter your email address.");
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            setError("email", "Please enter a valid email address.");
            isValid = false;
        }

        if (messageValue === "") {
            setError("message", "Please enter a message.");
            isValid = false;
        }

        if (isValid) {
            successMsg.textContent =
                "Thanks for your message! (This form does not send data to a server yet.)";
            form.reset();
        }
    });

    // Bonus: clear a field's error as soon as the user starts fixing it.
    [nameInput, emailInput, messageInput].forEach((input) => {
        input.addEventListener("input", () => setError(input.id, ""));
    });
});
