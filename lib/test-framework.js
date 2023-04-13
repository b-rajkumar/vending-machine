let totalTests = 0;
let passedTests = 0;
let testLog = [];

const getTotalTests = function() {
  return totalTests;
}

const getPassedTests = function() {
  return passedTests;
}

const createLog =  function(result, expected, actual, message) {
  const icon = result === true ?  '✅' : '❌';
  let testResult = {icon, expected, actual, message};
  return testResult;
}

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
    formattedMessage += expectationMismatch(expected, actual);
  }

  return icon + formattedMessage;
}

const assertEquality =  function(expected, actual, message) {
  const result = expected === actual;
  console.log(formatTestMessage(result, expected, actual, message));
  totalTests += 1;
  if (result) passedTests += 1;
  testLog.push(createLog(result, expected, actual, message));
  return result;
}

const assertAlmostEqual =  function(expected, actual, message) {
  const result = Math.abs((expected - actual)) < 0.2;
  console.log(formatTestMessage(result, expected, actual, message));
  totalTests += 1;
  if (result) passedTests += 1;
  testLog.push(createLog(result, expected, actual, message));
  return result;
}

const assertListsEqual  = function(firstList, secondList, message) {
  const firstListLength = firstList.length;
  const secondListLength = secondList.length;
  let result = true;

  if (firstListLength === secondListLength) {
    for (let currentIndex = 0; currentIndex < firstListLength; currentIndex++){
      if (firstList[currentIndex] !== secondList[currentIndex]) result = false;
    }
  }
  console.log(formatTestMessage(result, firstList, secondList, message));
  totalTests += 1;
  if (result) passedTests += 1;
  testLog.push(createLog(result, firstList, secondList, message));
  return result;
}

const headLine = function(text) {
  const length = text.length;
  console.log(text);
  console.log("-".repeat(length));
}

const displaySummary = function() {
  summary = "\n" + "  Summary: " + getPassedTests() + " / " + getTotalTests() + " passed";
  console.log(summary);
}

const displayLogTable = function() {
  console.table(testLog);
}

const assertObjectsEqual =  function(expected, actual, message) {
  let result = Object.keys(expected).length === Object.keys(actual).length;
  if (result){
    for (const key in expected) {
      if (expected[key] !== actual[key]) result = false;
    }
  }
  totalTests += 1;
  if (result) passedTests += 1;
  const icon = result === true ?  '✅ ' : '❌ ';

  console.log(icon, message);
  if (result === false) console.log("\t", "Expected =", expected, "\n\t  ", "Actual =", actual);
  testLog.push(createLog(result, expected, actual,  message));
  return result;
}

exports.assertEquality = assertEquality;
exports.assertAlmostEqual = assertAlmostEqual;
exports.assertListsEqual = assertListsEqual;
exports.headLine = headLine;
exports.displaySummary = displaySummary;
exports.displayLogTable = displayLogTable;
exports.assertObjectsEqual = assertObjectsEqual;
