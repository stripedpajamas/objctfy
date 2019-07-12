# objectify

sometimes i get data in the form of arrays of arrays:

```javascript
const data = [
  ['jill', 'june', 'us']
  ['jack', 'january', 'gb']
]
```

array destructuring helps here:

```javascript
let [name, birthmonth, country] = data[0]
console.log(name) // jill
```

but sometimes i just want to work on the data without destructuring it all the time, especially if during an operation the only field i care about is nearer the end of the array.

```javascript
// name and birthmonth are unused vars :(
let gbPeople = data.some(([name, birthmonth, country]) => country === 'gb')

// opaque and confusing :(
let gbPeople = data.some(entry => entry[2] === 'gb')
```

so i usually end up mapping the data to objects so i can refer to fields by name

```javascript
// obvious what's going on here
let gbPeople = niceData.some(entry => entry.country === 'gb')
```

this is a very small utility (10 lines) to help do that

## install

```shell
npm install objctfy
```

## use

**objectify(arr, labels)**

`arr` is an array of arrays

`labels` is an array of labels that correspond to the data by index

```javascript
const objectify = require('@twoseventythree/objctfy')

const log = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0]
]

const niceLog = objectify(log, ['timestamp', 'count', 'arrived'])

/*
niceLog : [
  { timestamp: 1487799425, count: 14, arrived: 1 },
  { timestamp: 1487799425, count: 4, arrived: 0 },
  { timestamp: 1487799425, count: 2, arrived: 0 },
  { timestamp: 1487800378, count: 10, arrived: 1 },
  { timestamp: 1487801478, count: 18, arrived: 0 },
  { timestamp: 1487801478, count: 18, arrived: 1 },
  { timestamp: 1487901013, count: 1, arrived: 0 },
  { timestamp: 1487901211, count: 7, arrived: 1 },
  { timestamp: 1487901211, count: 7, arrived: 0 }
]
*/
```

## license
MIT
