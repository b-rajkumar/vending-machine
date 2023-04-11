const test = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');

const testVendingMachine = function() {
  test.assertEquality(0, vendingMachine.dispenseCoins(0), '0 rupees amount should give nothing');
  test.assertEquality(1, vendingMachine.dispenseCoins(1), '1 rupees amount should give 1 coin');
  test.assertEquality(1, vendingMachine.dispenseCoins(2), '2 rupees amount should give 1 coins');
  test.assertEquality(23, vendingMachine.dispenseCoins(45) , '45 rupees amount should give 23 coins');
}

testVendingMachine();
