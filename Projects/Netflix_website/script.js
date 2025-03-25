// SET UP THE ICONE
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.querySelector(".icon");
  if (!icon) return;
  // Hide the icon
  icon.style.display = "none";
  // Show the icon after scrolling down 200px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });
  // Scroll to the top when clicking the icon
  icon.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const form = document.querySelector(".registration-form");
const nameInput = document.querySelector(".firstName");
const lastNameInput = document.querySelector(".lastName");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".password_confirm");

const notName = document.querySelector(".notificationName");
const notNameError = document.querySelector(".notificationNameError");
const notLastName = document.querySelector(".notificationLastName");
const notLastNameError = document.querySelector(".notificationLastNameError");
const notEmail = document.querySelector(".notificationEmail");
const notPassword = document.querySelector(".notificationPassword");
const notPasswordConfirm = document.querySelector(
  ".notificationPasswordConfirm"
);

function validateName(input, notification, emptyNotification) {
  if (input.value.trim() === "") {
    emptyNotification.style.display = "block";
    notification.style.display = "none";
    input.style.borderColor = "red";
    return false;
  } else if (input.value.charAt(0) !== input.value.charAt(0).toUpperCase()) {
    emptyNotification.style.display = "none";
    notification.style.display = "block";
    input.style.borderColor = "red";
    return false;
  } else {
    emptyNotification.style.display = "none";
    notification.style.display = "none";
    input.style.borderColor = "green";
    return true;
  }
}

function validateEmail() {
  if (!emailInput.value.includes("@")) {
    notEmail.style.display = "block";
    emailInput.style.borderColor = "red";
    return false;
  } else {
    notEmail.style.display = "none";
    emailInput.style.borderColor = "green";
    return true;
  }
}

function validatePassword() {
  const hasSpecialChar = /[.*_-]/.test(passwordInput.value);
  const hasDigit = /\d/.test(passwordInput.value);
  const isPasswordValid = hasSpecialChar && hasDigit;

  if (!isPasswordValid) {
    notPassword.style.display = "block";
    passwordInput.style.borderColor = "red";
    return false;
  } else {
    notPassword.style.display = "none";
    passwordInput.style.borderColor = "green";
    return true;
  }
}

function validatePasswordConfirmation() {
  if (
    passwordInput.value !== passwordConfirmInput.value ||
    passwordConfirmInput.value === ""
  ) {
    notPasswordConfirm.style.display = "block";
    passwordConfirmInput.style.borderColor = "red";
    return false;
  } else {
    notPasswordConfirm.style.display = "none";
    passwordConfirmInput.style.borderColor = "green";
    return true;
  }
}

// Attach event listeners for real-time validation
nameInput.addEventListener("input", () =>
  validateName(nameInput, notName, notNameError)
);
lastNameInput.addEventListener("input", () =>
  validateName(lastNameInput, notLastName, notLastNameError)
);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
passwordConfirmInput.addEventListener("input", validatePasswordConfirmation);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNameValid = validateName(nameInput, notName, notNameError);
  const isLastNameValid = validateName(
    lastNameInput,
    notLastName,
    notLastNameError
  );
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isPasswordConfirmValid = validatePasswordConfirmation();

  if (
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPasswordConfirmValid
  ) {
    alert("Formulář byl úspěšně odeslán!");
    form.reset();
    document
      .querySelectorAll("input")
      .forEach((input) => (input.style.borderColor = ""));
    document.querySelectorAll("p").forEach((p) => (p.style.display = "none"));
  }
});
