import { validateInput } from "./validateInput.js";
import { successForm } from "./createSuccessForm.js";

export const initContactForm = ($form) => {
  const $inputs = $form.find("input, textarea");

  $inputs.on("input blur", function () {
    validateInput(this);
  });

  $form.on("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    $inputs.each(function () {
      validateInput(this);
    });

    if (!this.checkValidity()) {
      this.classList.add("was-validated");
      return;
    }

    const data = {};
    $inputs.each(function () {
      data[this.id] = this.value;
    });

    successForm($form.parent(), data);
  });
};
