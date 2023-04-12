const numberOfCoins = function(amount, denominationValue) {
  return Math.trunc(amount/denominationValue);
}

const calculateRemainingAmount = function(amount, denominationValue, numberOfCoins) {
  return amount - (denominationValue * numberOfCoins);
}

const swap = function(list, firstIndex, secondIndex) {
  const firstNumber = list[firstIndex];
  list[firstIndex] = list[secondIndex];
  list[secondIndex] = firstNumber;
  return list;
}

const max = function(list) {
  let max = list[0];
  for (let index = 0; index < list.length; index++) {
    max = (list[index] < max) ? max : list[index];
  }
  return max;
}

const maxSort = function(denominationSet) {
  const denomination = denominationSet.slice();
  const sortedDenominationSet = [];

  for (let index = 0; index < denominationSet.length; index++) {
    let maxDenomination = max(denomination);
    let IndexOfmax = denomination.indexOf(maxDenomination);
    sortedDenominationSet.push(maxDenomination);
    denomination.splice(IndexOfmax, 1);
  }
  return sortedDenominationSet;
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

exports.dispenseCoins = dispenseCoins;
exports.maxSort = maxSort;
exports.max = max;


