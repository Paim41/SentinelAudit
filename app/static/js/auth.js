(function () {
  document.querySelectorAll("[data-password-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var input = button.parentElement.querySelector("input");
      if (!input) return;
      var showing = input.type === "text";
      input.type = showing ? "password" : "text";
      button.textContent = showing ? "Show" : "Hide";
      button.setAttribute("aria-label", showing ? "Show password" : "Hide password");
    });
  });

  document.querySelectorAll("[data-auth-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      clearErrors(form);
      var valid = true;
      form.querySelectorAll("input[required]").forEach(function (input) {
        if (!input.value.trim()) {
          setError(form, input.name, "This field is required.");
          valid = false;
        } else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
          setError(form, input.name, "Enter a valid email address.");
          valid = false;
        } else if (input.minLength > 0 && input.value.length < input.minLength) {
          setError(form, input.name, "Use at least " + input.minLength + " characters.");
          valid = false;
        }
      });

      var password = form.querySelector("input[name='password']");
      var confirm = form.querySelector("input[name='confirm_password']");
      if (password && confirm && password.value && confirm.value && password.value !== confirm.value) {
        setError(form, "confirm_password", "Passwords must match.");
        valid = false;
      }

      var identifier = form.querySelector("[data-validate='identifier']");
      if (identifier && identifier.value.includes("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier.value.trim())) {
        setError(form, "identifier", "Enter a valid email address or use your username.");
        valid = false;
      }

      if (!valid) {
        event.preventDefault();
        var firstError = form.querySelector(".js-error:not(:empty), .field-error:not(:empty)");
        if (firstError) firstError.scrollIntoView({ block: "center" });
      }
    });
  });

  function clearErrors(form) {
    form.querySelectorAll(".js-error").forEach(function (error) {
      error.textContent = "";
    });
  }

  function setError(form, name, message) {
    var error = form.querySelector("[data-error-for='" + name + "']");
    if (!error) {
      var input = form.querySelector("[name='" + name + "']");
      if (!input) return;
      error = document.createElement("p");
      error.className = "field-error js-error";
      error.setAttribute("data-error-for", name);
      input.closest(".field-group").appendChild(error);
    }
    error.textContent = message;
  }
})();
