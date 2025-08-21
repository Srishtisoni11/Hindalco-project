// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submit (no page reload)

    // Get input values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate successful message sent
    alert("✅ Log in successfully!");
    form.reset(); // Clear form after success
  });

  // Simple email format checker
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
