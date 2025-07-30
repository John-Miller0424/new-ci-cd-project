const { hello } = require('./index');

if (hello('World') !== 'Hello, World!') {
  throw new Error('Test failed');
}

console.log('Test passed');
