// stacks are simple LIFO data structure means last in first out just like you are browsing and go to google -> facebook -> udemy -> repl.it
// then if you now want to  go back you have to go back one by one means last in first out repl.it -> udemy -> facebook
// so let's implement it stack are very easily can be implementd by array having push() and pop() method
// but we are doing to implement by linked list
class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}


class Stack{
    constructor(){
        this.peak=null
        this.tail=null
    }

    push(data){
        let node=new Node(data)
        // we are going to push in end in above of tail
        if (this.peak==null) {
            this.peak=node
            this.tail=node
        }else{
            node.next=this.peak
            this.peak=node
        }
        // now add it the end
       }
      pop(){
        if (this.peak===null) {
            return 'Stack is Empty'
        }
        this.peak=this.peak.next
      } 
      get peakVal(){
        return this.peak.data
      }

}
let historyStack=new Stack()
historyStack.push('google')
historyStack.push('youtube')
historyStack.push('facebook')
historyStack.push('udemy')
historyStack.push('AWS')
historyStack.push('Digital Ocean')
historyStack.pop()
historyStack.pop()
historyStack.pop()
console.log(historyStack.peakVal)
console.log(JSON.stringify(historyStack,null,2));