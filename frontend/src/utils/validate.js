export const checkValidData = (email, password, cnfPassword) => {
  console.log("in");

  if (!email || !password || (cnfPassword !== undefined && !cnfPassword))
    return "Fill details";
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);

  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!isEmailValid) return "Enter valid Email";
  if (cnfPassword !== undefined && password != cnfPassword)
    return "Confirm password should be same";
  if (!isPasswordValid) return "Enter valid password";
  // return "Your password must be at least 6 characters long, include an uppercase letter, a lowercase letter, and a digit, and cannot end with a space";

  return null;
};
