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

const computeCoinCount = function(amount, denomination) {
  let totalCoins = 0;
  const denominationSet = maxSort(denomination);
  let remainingAmount = amount;

  for (const denominationValue of denominationSet) {
    const dispensedCoins = numberOfCoins(remainingAmount, denominationValue);
    totalCoins += dispensedCoins; 
    remainingAmount = calculateRemainingAmount(remainingAmount, denominationValue, dispensedCoins); 
  }

  return totalCoins;
}

const computeCountByDenominations = function(amount, denomination) {
  let dispensedCoins = {};
  const denominationSet = maxSort(denomination);
  let remainingAmount = amount;

  for (const denominationValue of denominationSet) {
    const coinsCount = numberOfCoins(remainingAmount, denominationValue);
    if (coinsCount !== 0) dispensedCoins[denominationValue] = coinsCount;
    remainingAmount = calculateRemainingAmount(remainingAmount, denominationValue, coinsCount); 
  }

  return dispensedCoins;
}

exports.computeCoinCount = computeCoinCount;
exports.maxSort = maxSort;
exports.computeCountByDenominations = computeCountByDenominations;
