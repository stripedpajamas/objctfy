const assert = require('assert')
const objctfy = require('.')

function test(input, labels, expected) {
  assert.deepStrictEqual(objctfy(input, labels), expected)
}

// basics
test([
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0]
], ['timestamp', 'count', 'arrived'], [
  { timestamp: 1487799425, count: 14, arrived: 1 },
  { timestamp: 1487799425, count: 4, arrived: 0 },
  { timestamp: 1487799425, count: 2, arrived: 0 },
  { timestamp: 1487800378, count: 10, arrived: 1 },
  { timestamp: 1487801478, count: 18, arrived: 0 },
  { timestamp: 1487801478, count: 18, arrived: 1 },
  { timestamp: 1487901013, count: 1, arrived: 0 },
  { timestamp: 1487901211, count: 7, arrived: 1 },
  { timestamp: 1487901211, count: 7, arrived: 0 }
])

// missing a label
test([['a', 'b'], ['c', 'd']], ['first'], [{ first: 'a', '1': 'b' }, { first: 'c', '1': 'd' }])

// nothing
test([], [], [])

// no labels
test([['a'], ['b']], undefined, [{ '0': 'a' }, { '0': 'b' }])

console.log('Tests pass')
