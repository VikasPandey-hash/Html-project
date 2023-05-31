class Node {
    constructor(data) {
        this.data = data ;
        this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
    }
    addNode(data) {
        const newNode = new Node(data) ;
        if(this.head === null) {
            this.head = newNode;
        }else {
            let currentNode = this.head ;
            while(currentNode.next !== null) {
                currentNode = currentNode.next ;
            }
            currentNode.next = newNode ;
        }
    }
    reverse(){
        let prevNode = null ;
        let currentNode = this.head ;
        let nextNode = null ;

        while(currentNode !== null) {
            nextNode = currentNode.next ;
            currentNode.next = prevNode ;
            prevNode = currentNode ;
            currentNode = nextNode ;
        }
        this.head = prevNode ;
    }
    printList() {
        let currentNode = this.head ;
        while(currentNode !== null) {
            console.log(currentNode.data) ;
            currentNode = currentNode.next ;
        }
    }
}

const LinkedLis = new LinkedList() ;
LinkedLis.addNode('A') ;
LinkedLis.addNode('B') ;
LinkedLis.addNode('C') ;
LinkedLis.reverse() ;
LinkedLis.printList() ; 
