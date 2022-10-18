export function validate($form) {
  $form.classList.add('validation-detected')
  const $inputs = Array.from($form.querySelectorAll('[required]'))
  return $inputs.map($input => $input.checkValidity()).every(Boolean)
}
