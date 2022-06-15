
// const isWindow = () => this === window;
// isWindow();

// const counter = {
//     number: 0,
//     increase() {
//         setInterval(() => console.log(++this.number), 1000);
//     }
// };

// solution 1: copy `this` object
// const counter = {
//     number: 0,
//     increase() {
//         const that = this;
//         setInterval( function() { console.log(++that.number)} , 1000);
//     }
// };

// solution 2: bind `this` object
const counter = {
    number: 0,
    increase() {
        setInterval( function() { console.log(++this.number)}.bind(this) , 1000);
    }
};

counter.increase();