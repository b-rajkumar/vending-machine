const test = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');

const testVendingMachine = function() {
  test.assertEquality(0, vendingMachine.dispenseCoins(0, [1, 2, 5]), '0 rupees amount should give nothing');
  test.assertEquality(0, vendingMachine.dispenseCoins(1, [5]), '1 rupee and 5 as denomination should give nothing');
  test.assertEquality(2, vendingMachine.dispenseCoins(3, [1, 2]), '2 rupees and 1,2 as denomination should give 2 coins');
  test.assertEquality(3, vendingMachine.dispenseCoins(5, [1, 2]), '5 rupees and 1,2 as denomination should give 3 coin');
  test.assertEquality(1, vendingMachine.dispenseCoins(10, [10]), '10 rupees and 10 as denomination should give 1 coin');
  test.assertEquality(9, vendingMachine.dispenseCoins(45, [1, 10]) , '45 rupees and 1,10 as denomination should give 9 coins');
  test.assertEquality(12, vendingMachine.dispenseCoins(103, [1, 2, 5, 10]) , '103 rupees and 1,2,5,10 as denomination should give 12 coins');
  test.assertEquality(4, vendingMachine.dispenseCoins(13, [1, 4, 7]) , '13 rupees and 1,4,7 as denomination should give 4 coins');
  test.assertEquality(4, vendingMachine.dispenseCoins(13, [4, 1, 7]) , '13 rupees and 4,1,7 as denomination should give 4 coins');
}

const testMaxSort = function(){
  test.assertListsEqual([5, 2, 1], vendingMachine.maxSort([1, 5, 2]), 'max sort should give 5,2,1 for 1,5,2 input');
  test.assertListsEqual([10, 5, 2, 1], vendingMachine.maxSort([10, 1, 5, 2]), 'max sort should give 10,5,2,1 for 10,1,5,2 input');
  test.assertListsEqual([5, 2, 1], vendingMachine.maxSort([5, 2, 1]), 'max sort should give 5,2,1 for 5,2,1 input');
}

const testMax = function() {
  test.assertEquality(4, vendingMachine.max([2, 4, 1, 3]), '4 should be the max value of 2, 4, 1, 3');
  test.assertEquality(5, vendingMachine.max([5]), '5 should be the max value of 5');

}



testVendingMachine();
testMaxSort();
test.displaySummary();
//testMax();
