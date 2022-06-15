class Queue {
    
    elements = [];

    enqueue(e) {this.elements.push(e); };

    dequeue() {return this.elements.shift();};

    isEmpty() {return this.elements.length == 0;};

    peek() {return !this.isEmpty() ? this.elements[0] : undefined;};

    length() {return this.elements.length;};

}


let q = new Queue();

async function evento1(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('finalizo evento1');
            resolve();
        },3000);        
    })
}

async function evento3(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('finalizo evento3');
            resolve();
        },2000);
    })
}

async function evento2(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('finalizo evento2');
            resolve();
        },2000);
    })
}

q.enqueue({method: evento1, args: 'evento1'});
q.enqueue({method: evento3, args: 'evento3'});
q.enqueue({method: evento2, args: 'evento2'});

(async () => {
    for(let i=0; !q.isEmpty(); i++){
      const func = q.dequeue();
      console.log('ejecutando', func.args)
      await func.method(func.args)
    } 
})();