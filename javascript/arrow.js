
// const add = function(x) {
//     return function(y) {
//         return x + y;
//     }
// }


const add = x => y => x + y;

const addTwo = add(2); // addTwo = function(y)
console.log(addTwo(5)); // function(5)