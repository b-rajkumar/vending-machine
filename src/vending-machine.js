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
  let denomination = denominationSet.slice();

  for (let index = 0; index < denominationSet.length; index++) {
    let maxDenomination = denomination[index];
    let IndexOfmax = index;
    for (let pos = index; pos < denominationSet.length; pos++) {
      if (maxDenomination < denomination[pos]) {
        maxDenomination = denomination[pos];
        IndexOfmax = pos;
      }
    }

    swap(denomination, index, IndexOfmax);
  }  
  return denomination;
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


