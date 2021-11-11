// Usecase of using clouser over passing arguments in First function

// For better understanding of the use case, assume VAT of a given number is calculated as follows
// 1. Add 2 to the number (x + 2)
// 2. Multiply by 3 the result of step 1.


// We've implemented the problem in two algorithms to see the advantage of one over the other.
// 1. By passing the the number we want to calculate VAT and the functions to
//    calculate it directly to the first function as an argument.
//
// 2. By creating a closure function to close over the functions calculating VAT.




// 1. Pipe function implementation as parameter
const pipe = (input, ...funcs) => {
  return funcs.reduce((acc, func) => {
    return func(acc)
  }, input)
}

const firstCaseResults = {
  one: pipe(5, x => x + 2, x => x * 3),
  two: pipe(10, x => x + 2, x => x * 3),
  three: pipe(20, x => x + 2, x => x * 3)
}




// 2. Create a closure for the functions, so that we can calculate VAT
// without passing the functions in each call.
const pipeWithClosure = (...funcs) => x => {
  return funcs.reduce((acc, func) => {
    return func(acc)
  }, x)
}

const calculateVAT = pipeWithClosure(x => x + 2, x => x * 3)

// As you can see here, whenever we want to calculate a VAT of a given number,
// we're only passing the number we want to calculate VAT without much considering
// the functions calculating VAT, by creating a closure.

// So closure can make us create a shared logic(in our usecase it sets up the pipe function).

const secondCaseResults = {
  one: calculateVAT(5),
  two: calculateVAT(10),
  three: calculateVAT(20)
}

console.log({
  firstCaseResults,
  secondCaseResults
})
