const test = require('../lib/test-framework.js');
const source = require('../src/vending-machine.js');

test.assertEquality(source.one, source.one, 'passing test');
test.assertEquality(source.one, source.two, 'failing test');
