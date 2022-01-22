import { formSelectors } from "./constants.js"
export const validationSettings = {
  formSelector: formSelectors.form,
  inputSelector: formSelectors.input,
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error'
}
