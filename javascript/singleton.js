class Singleton {

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this.title = "my singleton";
        Singleton.instance = this;
    }
}

let mySingleton = new Singleton()
let mySingleton2 = new Singleton()

console.log("Singleton 1: ", mySingleton.title);
mySingleton.title = "modified in instance 1";
console.log("Singleton 2: ", mySingleton2.title);