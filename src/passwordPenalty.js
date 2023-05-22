/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (!password) {
    return 0;
  }
  if (typeof password !== "string")
    //convert password to a stirng if it not a string
    password = String(password);
  //match the  repeated sequences of alphanumeric characters
  const sequences = password.match(/([a-zA-Z0-9])\1{1,}/g);
  return sequences
    ? sequences.reduce(
        (penalty, sequence) =>
          penalty + (sequence.length === 2 ? 1 : sequence.length >= 3 ? 2 : 0),
        0
      )
    : 0;
}
