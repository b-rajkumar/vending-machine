const numberOfCoins = function(amount, coinValue) {
  return Math.trunc(amount/coinValue);
}

const calculateRemainingAmount = function(amount, coinValue, numberOfCoins) {
  return amount - (coinValue * numberOfCoins);
}

const dispenseCoins = function(amount) {
  let totalCoins = 0;
  const coins = [10, 5, 2, 1];
  let remainingAmount = amount;

  for (const coinValue of coins) {
    const coinsCount = numberOfCoins(remainingAmount, coinValue);
    totalCoins += coinsCount;
    remainingAmount = calculateRemainingAmount(remainingAmount, coinValue, coinsCount); 
  }

  return totalCoins;
}

exports.dispenseCoins = dispenseCoins;

