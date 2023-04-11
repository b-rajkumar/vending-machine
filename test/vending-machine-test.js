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
}

testVendingMachine();
