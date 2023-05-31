class Queue {
    constructor() {
        this.items = [] ;
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if(this.isEmpty()) {
            return 'Queue is empty' ;
        }
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0 ;
    }
    size() {
        return this.items.length ;
    }
    front() {
        if(this.isEmpty()) {
            return 'Queue is empty' ;
        }
        return this.items[0]
    }
}

const queue = new Queue() ;
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log(queue.front()) ;
console.log(queue.dequeue()) ;
console.log(queue.size()) ;
