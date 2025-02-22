  document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".input");

    inputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (e.inputType !== "deleteContentBackward" && input.value.length === 1) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
          if (!input.value && index > 0) {
            inputs[index - 1].focus();
          }
        }

        if (e.key === "Delete") {
          input.value = "";
        }

        if (e.key === "ArrowLeft" && index > 0) {
          inputs[index - 1].focus();
        }

        if (e.key === "ArrowRight" && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
    });
  });
