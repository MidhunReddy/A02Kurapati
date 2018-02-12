QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});
QUnit.test('Testing  with the two positive numbers ', function (assert) {
  assert.throws(function() { test(NaN) }, 'Given is not a number');
});
QUnit.test('Testing  with two negative numbers  ', function (assert) {
  assert.throws(function() { test(null) }, 'Given is not a number');
});
QUnit.test('missing or invalid argument return 0', function (assert) {
  assert.throws(function() { test("abc") }, 'Given is not a number');
});
QUnit.test('Testing  numbers with two zero numbers ', function (assert) {
  assert.throws(function() { test(undefined) }, 'Given is not a number');
});

