const test = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');
const assertListsEqual = test.assertListsEqual;
const assertObjectsEqual = test.assertObjectsEqual;
const assertEquality = test.assertEquality;
const headLine = test.headLine;
const coinsOfDenominations = vendingMachine.coinsOfDenominations;
const vendCoins = vendingMachine.vendCoins;

const testOrderedDenominations = function() {
  headLine('Testing vendCoins function for ordered denominations');

  assertEquality(0, vendCoins(10, []),'Testing for zero denominations should give 0');
  assertEquality(0, vendCoins(1, [5]),'Testing for amount less than denominations should give 0');
  assertEquality(1, vendCoins(10, [10]),'Testing for denomination value equal to amount should give 1 coin');
  assertEquality(12, vendCoins(103, [1, 2, 5, 10]), 'Testing for a set of denominations should give optimum coins');

  console.log();
}

const testUnorderedDenominations = function() {
  headLine('Testing vendCoins function for unordered denominations');

  assertEquality(0, vendCoins(1, []),'Testing for no denominations should give 0');
  assertEquality(4, vendCoins(13, [4, 1, 7]),'Testing for unordered set of denominations');

  console.log();
}

const testCoinsByDenominationsFn = function() {
  headLine('Testing CoinsByDenominations function');
  assertObjectsEqual({}, coinsOfDenominations(45, []),'Testing for 0 denomination should give nothing');
  assertObjectsEqual({5:9}, coinsOfDenominations(45, [5]),'Testing for one denomination should give the coin count');
  assertObjectsEqual({7:1, 1:2, 4:1}, coinsOfDenominations(13, [4, 1, 7]),'Testing for a set of denominations should give coin count of each denomination');
}

const runTests = function() {
  testOrderedDenominations();
  testUnorderedDenominations();
  testCoinsByDenominationsFn();
  test.displaySummary();
}

runTests();
