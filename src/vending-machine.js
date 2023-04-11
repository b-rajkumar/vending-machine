const numberOfOneRupeeCoins = function(amount) {
  return amount;
}

const numberOfTwoRupeeCoins = function(amount) {
  return Math.trunc(amount/2);
}

const numberOfFiveRupeeCoins = function(amount) {
  return Math.trunc(amount/5);
}

const calculateRemainingAmount = function(amount, coinValue, numberOfCoins) {
  return amount - (coinValue * numberOfCoins);
}

const dispenseCoins = function(amount) {
  let totalCoins = 0;


  const fiveRupeeCoins = numberOfFiveRupeeCoins(amount);
  let remainingAmount = calculateRemainingAmount(amount, 5, fiveRupeeCoins); 
  totalCoins += fiveRupeeCoins; 

  const twoRupeeCoins = numberOfTwoRupeeCoins(remainingAmount);
  remainingAmount = calculateRemainingAmount(remainingAmount, 2, twoRupeeCoins); 
  totalCoins += twoRupeeCoins; 

  totalCoins += numberOfOneRupeeCoins(remainingAmount); 


  return totalCoins;
}

exports.dispenseCoins = dispenseCoins;

