<script>
  // Wait until the page is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberMeCheckbox = document.querySelector('input[type="radio"]');
    const signInButton = document.querySelector(".button-submit");

    // Load saved email if "Remember Me" was selected before
    if (localStorage.getItem("rememberMe") === "true") {
      emailInput.value = localStorage.getItem("email");
      rememberMeCheckbox.checked = true;
    }

    signInButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form from submitting

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      // Basic validation
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // Simple email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Store email if "Remember me" is checked
      if (rememberMeCheckbox.checked) {
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("email");
      }

      // For demonstration, just show success
      alert("Login successful!\nEmail: " + email);
      // You can redirect or send data to a backend server here
    });
  });
</script>
