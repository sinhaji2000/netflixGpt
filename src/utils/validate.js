export const validateData = (email, password) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPawword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) return "email is not valid";
  if (isValidPawword) return "password is not valid";
  return null;
};
