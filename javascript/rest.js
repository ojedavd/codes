
// function add(x,y) {
//     return x + y;
// }

// console.log(add(1,2,3,4,5));


// function add(...args) {
//     return args.reduce((previous, current) => previous + current, 0);
// }

// console.log(add(1,2,3,4,5));


function process(x, y, ...args) {
    console.log(args);
}

process(1,2,3,4,5);