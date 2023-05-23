/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (!password) {
    return 0;
  }
  if (typeof password !== "string") password = String(password);
  //Match the  repeated sequences of alphanumeric characters
  const sequences = password.match(/([a-zA-Z0-9])\1{1,}/g);
  if (!sequences) {
    return 0;
  } else {
    // If sequences exist and are truthy
    return sequences.reduce((penalty, sequence) => {
      return (
        penalty + (sequence.length === 2 ? 1 : sequence.length >= 3 ? 2 : 0)
      );
    }, 0);
  }
}
