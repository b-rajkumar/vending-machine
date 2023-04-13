const numberOfCoins = function(amount, denominationValue) {
  return Math.trunc(amount/denominationValue);
}

const calculateRemainingAmount = function(amount, denominationValue, numberOfCoins) {
  return amount - (denominationValue * numberOfCoins);
}

const maxSort = function(denominationSet) {
  const sortedDenomination = denominationSet.slice();

  for (let index = 0; index < denominationSet.length; index++) {
    let maxDenomination = sortedDenomination[index];
    let indexOfmax = index; 
    for (let pos = index; pos < denominationSet.length; pos++) {
      if (sortedDenomination[pos] > maxDenomination) {
        maxDenomination = sortedDenomination[pos];
        indexOfmax = pos;
      }
    }
    let number = sortedDenomination[index];
    sortedDenomination[index] = maxDenomination;
    sortedDenomination[indexOfmax] = number;
  }
  return sortedDenomination;
}

const dispenseCoins = function(amount, denomination) {
  let totalCoins = 0;
  const denominationSet = maxSort(denomination);
  let remainingAmount = amount;

  for (const denominationValue of denominationSet) {
    const coinsCount = numberOfCoins(remainingAmount, denominationValue);
    totalCoins += coinsCount; 
    remainingAmount = calculateRemainingAmount(remainingAmount, denominationValue, coinsCount); 
  }

  return totalCoins;
}

const coins = function(amount, denomination) {
  let coinsCounts = {};
  const denominationSet = maxSort(denomination);
  let remainingAmount = amount;

  for (const denominationValue of denominationSet) {
    const coinsCount = numberOfCoins(remainingAmount, denominationValue);
    coinsCounts[denominationValue] = coinsCount;
    remainingAmount = calculateRemainingAmount(remainingAmount, denominationValue, coinsCount); 
  }
  return coinsCounts;
}

exports.dispenseCoins = dispenseCoins;
exports.maxSort = maxSort;
exports.coins = coins;
