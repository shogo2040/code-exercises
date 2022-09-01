// Divide & conquer / D&C
// greatest common divisor (Euclid's algorithm)
//
// A land plot of 1680 x 640 needs to be split up
// into the largest square size possible.
export function euclidsAlgorithm(a, b) {
  if (a * 2 === b) {
    return a;
  }

  if (b * 2 === a) {
    return b;
  }

  if (a > b) {
    return euclidsAlgorithm(b, a - b);
  } else {
    return euclidsAlgorithm(a, b - a);
  }
}
