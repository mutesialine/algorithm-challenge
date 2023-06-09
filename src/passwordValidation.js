export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if (forbiddenPasswords.includes(password)) {
    return false;
  }
  // Check if the password length is equal to 10
  if (password.length !== 10) {
    return false;
  }
  //check if the password contains only alphanumuric charatacter no special charatcer included
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return false;
  }

  // check if the password contains atleast one uppercase , lowercase or numbers
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
    return false;
  }
  //check if a sequence is found in the password
  if (hasSequence(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) {
    return false;
  }
  return true;
}
// Checks if the password contains a sequence of numbers in ascending or descending order it return True if a sequence is found, otherwise false.
function hasSequence(password) {
  for (let i = 0; i < password.length - 2; i++) {
    const current = Number(password[i]);
    const next1 = Number(password[i + 1]);
    const next2 = Number(password[i + 2]);
    const isAscending = current === next1 - 1 && next1 === next2 - 1; // ascending sequence
    const isDecending = current === next1 + 1 && next1 === next2 + 1; // descending sequence
    if (isAscending || isDecending) {
      return true;
    }
  }

  return false;
}
