const sumTest = require('./sum');

test('adds 1 + 2 equals to 3', () => {
  expect(sumTest(1, 2)).toBe(3);
});
