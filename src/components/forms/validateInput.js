import { isValidEmail } from "../../utils/helpers.js";

const setInvalid = ({ input, $input, $feedback, message }) => {
  input?.setCustomValidity(message);
  $input.addClass("is-invalid").removeClass("is-valid");
  $feedback.addClass("invalid-feedback").text(message);
};

const setValid = ({ input, $input, $feedback }) => {
  input.setCustomValidity("");
  $input.removeClass("is-invalid").addClass("is-valid");
  $feedback.text("");
};

export const validateInput = (input) => {
  const $input = $(input);
  const nameField = $input.next()?.text();
  const $feedback = $input.siblings(".feedback");

  input.setCustomValidity("");
  $feedback.text("");

  if (input.validity.valueMissing) {
    setInvalid({
      input,
      $input,
      $feedback,
      message: `El campo ${nameField} debe ser rellenado`,
    });
    return;
  }

  if (
    input.type === "text" &&
    (input.value.length < 2 || input.value.length > 150)
  ) {
    setInvalid({
      input,
      $input,
      $feedback,
      message: `El campo ${nameField} debe tener entre 2 y 150 caracteres`,
    });
    return;
  }

  if (input.type === "email" && !isValidEmail(input.value)) {
    setInvalid({
      input,
      $input,
      $feedback,
      message: `El campo ${nameField} no es válido`,
    });
    return;
  }

  if (input.tagName === "TEXTAREA" && input.value.length > 500) {
    setInvalid({
      input,
      $input,
      $feedback,
      message: `El campo ${nameField} debe tener menos de 500 caracteres`,
    });
    return;
  }

  setValid({ input, $input, $feedback });
};
