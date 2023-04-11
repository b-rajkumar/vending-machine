const expectationMismatch =  function(expected, actual) {
  let expectationMismatchMessage = "\n";
  expectationMismatchMessage += "\tExpected = " + expected;
  expectationMismatchMessage += "\n";
  expectationMismatchMessage += "\t  Actual = " + actual;

  return expectationMismatchMessage;
}

const formatTestMessage =  function(result, expected, actual, message) {
  const icon = result === true ?  '✅ ' : '❌ ';
  let formattedMessage = message;

  if (result === false) {
    formattedMessage += expectationMismatch (expected, actual);
  }

  return icon + formattedMessage;
}

const assertEquality =  function(expected, actual, message) {
  const result = expected === actual;
  console.log (formatTestMessage (result, expected, actual, message));
  return result;
}

const assertAlmostEqual =  function(expected, actual, message) {
  const result = Math.abs((expected - actual)) < 0.2;
  console.log (formatTestMessage (result, expected, actual, message));
  return result;
}

const assertListsEqual  = function(expected, actual, message) {
  const result = toString(expected) === toString(actual);
  console.log(formatTestMessage(result, expected, actual, message));
  return result;
}

const headLine = function(text) {
  const length = text.length;
  console.log(text);
  console.log("-".repeat(length));
}

exports.assertEquality = assertEquality;
exports.assertAlmostEqual = assertAlmostEqual;
exports.assertListsEqual = assertListsEqual;
exports.headLine = headLine;
