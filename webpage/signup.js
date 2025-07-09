<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const inputs = form.querySelectorAll(".input");
    const emailInput = inputs[2];
    const passwordInput = inputs[3];
    const confirmPasswordInput = inputs[4];

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting normally

      const firstName = inputs[0].value.trim();
      const lastName = inputs[1].value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      // Simple email pattern check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // If all checks pass
      alert("Registration successful!\nWelcome, " + firstName + "!");
      form.reset(); // Clear the form
    });
  });
</script>
