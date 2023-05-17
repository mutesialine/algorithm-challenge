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
  if (typeof password !== "string") password = String(password);
  const sequenceRegex = /([a-zA-Z0-9])\1{1,}/g;
  const sequences = password.match(sequenceRegex);
  return sequences
    ? sequences.reduce(
        (penalty, seq) =>
          penalty + (seq.length === 2 ? 1 : seq.length >= 3 ? 2 : 0),
        0
      )
    : 0;
}
