const numberOfCoins = function(amount, denominationValue) {
  return Math.trunc(amount/denominationValue);
}

const calculateRemainingAmount = function(amount, denominationValue, numberOfCoins) {
  return amount - (denominationValue * numberOfCoins);
}

const dispenseCoins = function(amount, denomination) {
  let totalCoins = 0;
  denomination.reverse();
  let remainingAmount = amount;

  for (const denominationValue of denomination) {
    const coinsCount = numberOfCoins(remainingAmount, denominationValue);
    totalCoins += coinsCount; 
    remainingAmount = calculateRemainingAmount(remainingAmount, denominationValue, coinsCount); 
  }

  return totalCoins;
}

exports.dispenseCoins = dispenseCoins;

