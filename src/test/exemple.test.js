const fns = require('../index.js');

describe('Test Fibonacci', () => {
    test('it 4th fibonacci postion', () => {
        const fib = fns.fibonacci(4);
        expect(fib[fib.length - 1]).toEqual(3);
    })
})
