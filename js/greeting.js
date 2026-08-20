// Shows a greeting based on the visitor's current local time.
document.addEventListener("DOMContentLoaded", () => {

    const greetingEl = document.getElementById("greeting");

    if (!greetingEl) {
        return;
    }

    const hour = new Date().getHours();
    let message;

    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    greetingEl.textContent = message;
});
