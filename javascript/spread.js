
const numbers = [5,7,9,1];
console.log(Math.min(...numbers));

const post = {title: "Operador spread", content: "lorem ipsum"};
const postCloned = Object.assign({}, post);
const postCloned = { ...post }; 

const myArray = [3,6,4,1];
const arrayCloned = myArray.slice();
const arrayCloned = [ ...myArray ];

const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];
const myArray = arrayOne.concat(arrayTwo);
const myArray = [ ...arrayOne, ...arrayTwo ];

