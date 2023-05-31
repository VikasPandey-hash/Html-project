class Node {
    constructor(data) {
        this.data = data ;
        this.next = null ;
    }
}

class Stack {
    constructor() {
        this.top = null ;
    }
push(data) {
    const newNode = new Node(data) ;
    if(this.top === null) {
        this.top = newNode;
    }else{
        newNode.next = this.top
        this.top = newNode ;
    }
}
pop() {
    if(this.top === null) {
        return "Stack is empty" ;
    }
    const poppedNode = this.top ;
    this.top = this.top.next ;
    return poppedNode.data ;
}
isEmpty() {
    return this.top === null ;
}
peek() {
    if(this.top === null) {
        return 'Stack is empty'
    }
    return this.top.data ;
}

}

const stack = new Stack() ;
stack.push('A') ;
stack.push('B') ;
stack.push('C') ;
console.log(stack.peek()) ;
console.log(stack.pop()) ;
console.log(stack.isEmpty()) ;
