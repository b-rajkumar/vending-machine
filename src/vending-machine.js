const numberOfTwoRupeeCoins = function(amount) {
  return Math.trunc(amount/2);
}

const numberOfOneRupeeCoins = function(amount) {
  return amount;
}

const dispenseCoins = function(amount) {
  let totalCoins = numberOfTwoRupeeCoins(amount);

  remainingAmount = amount - (2 * totalCoins);
  totalCoins += numberOfOneRupeeCoins(remainingAmount);

  return totalCoins;
}

exports.dispenseCoins = dispenseCoins;

