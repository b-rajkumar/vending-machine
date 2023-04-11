const test = require('../lib/test-framework.js');
const source = require('../src/vending-machine.js');

test.assertEquality(45, source.dispenseCoins(45) , '45 amount should give 45');
test.assertEquality(0, source.dispenseCoins(0), '0 amount should give nothing');
