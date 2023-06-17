export default function Validation(userData) {
  const errors = {};

  if (!userData.email) {
    errors.email = "Ingresa el correo electrónico";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
    errors.email = "Correo electrónico inválido";
  } else if (userData.email.length > 35) {
    errors.email = "El correo electrónico supera el límite de caracteres";
  }

  if (!userData.password) {
    errors.password = "Ingresa la contraseña";
  } else if (!/\d/.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
}
