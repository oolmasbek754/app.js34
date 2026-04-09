
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    return [];
  }

  let positives = 0;
  let negatives = 0;

  for (el of input) {
    if (el > 0) {
      positives += 1;
    } else {
      negatives += key;
    }
  }

  return [positives, negatives];
}
countPositivesSumNegatives([1, 2, 3, -4, -5, 6, -7, 8]);
