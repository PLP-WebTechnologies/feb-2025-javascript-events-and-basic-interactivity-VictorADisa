// Button click
document.getElementById('magicButton').addEventListener('click', function() {
    this.style.backgroundColor = "purple";
    this.innerText = "Magic! 🪄";
  });
  
  // Form validation
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/;
  
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters!");
      return;
    }
    if (!uppercasePattern.test(password)) {
      alert("Password must include at least one uppercase letter!");
      return;
    }
    if (!lowercasePattern.test(password)) {
      alert("Password must include at least one lowercase letter!");
      return;
    }
    if (!symbolPattern.test(password)) {
      alert("Password must include at least one special symbol!");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  
  
  // Bonus: Double click secret
  document.getElementById('magicButton').addEventListener('dblclick', function() {
    alert("🎉 You found the secret double-click!");
  });
  