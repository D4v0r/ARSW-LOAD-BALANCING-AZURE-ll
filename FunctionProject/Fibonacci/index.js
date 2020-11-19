var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    let answer = bigInt.zero;
    let fibonacciSequence = new Map();
    fibonacciSequence.set(0, bigInt.zero);
    fibonacciSequence.set(1, bigInt.one);

    const fibonacci = (n) =>{
        if(fibonacciSequence.has(n)){
            return fibonacciSequence.get(n);
        }
        fibonacciSequence.set(n) = fibonacci(n - 1) + fibonacci(n-2);
        return fibonacci(n);
    }

    if (nth < 0) throw 'must be greater than 0';
    answer = fibonacci(nth);
    
    context.res = {
        body: answer.toString()
    };
}