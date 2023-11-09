import isEmail from "validator/lib/isEmail";

export const validateEmail = (email: string) => {
  if (!isEmail(email)) return false;
  if (!/@sca.com.au\s*$/.test(email)) return false;
  return true;
};
