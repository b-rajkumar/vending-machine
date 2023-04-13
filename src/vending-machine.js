const sort = require('../lib/sort-utility.js');
const selectionSort = sort.selectionSort;

const numberOfCoins = function(amount, denominationValue) {
  return Math.trunc(amount/denominationValue);
}

const calculateRemainingAmount = function(amount, denominationValue) {
  return amount % denominationValue;
}

const coinsOfDenominations = function(amount, denomination) {
  let dispensedCoins = {};
  const denominationSet = selectionSort(denomination).reverse();
  let remainingAmount = amount;

  for (const denominationValue of denominationSet) {
    const coinsCount = numberOfCoins(remainingAmount, denominationValue);
    if (coinsCount !== 0) dispensedCoins[denominationValue] = coinsCount;
    remainingAmount = calculateRemainingAmount(remainingAmount, denominationValue); 
  }

  return dispensedCoins;
}

const vendCoins = function(amount, denomination) {
  const coins = coinsOfDenominations(amount, denomination);
  let totalCoins = 0;

  for (const key in coins) {
    totalCoins += coins[key];
  }

  return totalCoins;
}

exports.vendCoins = vendCoins;
exports.coinsOfDenominations = coinsOfDenominations;
