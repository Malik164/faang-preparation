/*  linked list are bette than arrays  due to following reasons
👉 First insertion in array  measn to shift whole array indexes by 1  so this operation costs us O(n) time complexity
similarly deletion
and disadvatange of linked list is that they  allocate more space than array
and getting an item in linkd list costs us O(n) but in array we can directly lookup an individual element like array[3]
*/

///------------ IMPLEMENTATION--------------------
//we have two classes one which is actually  a linked list and other is for creating node
class Node{
    constructor(data){
        this.data=data  
        this.next=null
    }
}


// main linked list class
class Linked_List{
    constructor(head=null){
        this.head=head
        this.size=0
    }

    // helper methods
    // add a node at head
     insertAtHead(data){
        // simple the node that was head before the new node will point to that
        let newNode=this.#insertValidator(data)
        if (!newNode) return
        newNode.next=this.head
        this.head=newNode
        this.size++;
        return newNode

    }

    // insert at the last of linked list a new node
    insertAtLast(data){
        let newNode=this.#insertValidator(data)
        if (!newNode) return

        // now iterate to last node and insert ther the node created
        let current=this.head
        while (current.next!==null) 
            current=current.next
        
        // now insert here
        current.next=newNode
        this.size++
    }

    //insert at specific index
    insertAtIndex(index,data){
        if(this.#indexValidator(index)===true) return;
        let newNode=new Node(data)
        // now insert at given index
        // the logic is that we have to iterate to the given index and reach there
        let i=1
        let current=this.head
        while (i<index-1) {
            current=current.next
            i++
        }
        //now current is pointing to the the pointer
        newNode.next=current.next
        current.next=newNode
        this.size++;
    }

    //DELETE AT GIVEN INDEX
    delteAtIndex(index){
        if(this.#indexValidator()===true) return;
        //now loop to the current index and simply previous will point to the index'node next one
        let i=1;
        let prevNode;
        let current=this.head
        while(i<index){
            prevNode=current
            current=current.next
            i++;
        }
        prevNode.next=current.next
        this.size--
    }
    // delete at head
    deleteAtHead(){
        this.#deleteValidator()
        // now simply head will be null and next elemnt will be the head
        this.head=this.head.next
        this.size--;
    }

    //delte at last
    deleteAtLast(){
        this.#deleteValidator()

        // traverse to the  last node
        let current=this.head
        while(current.next.next!==null) {
            current=current.next
        }
        // now pointer is on last node simply  nulll it
        current.next=null
        this.size--;
    }

     #insertValidator(data){
        let newNode=new Node(data)
        if (this.head===null) {
            this.head=newNode
            this.size++
            return false
        }
        return newNode
    }

    #indexValidator(index){
        // here we check if give index is not greater than the size of linked list
        if (index>this.size+1 || index<1) {
            console.error('Please Enter a valid Index');
            return true
        }

    }
    #deleteValidator(){
        if (this.head===null) {
            console.log('List is Empty');
            return
        }
        
    }
}

// now create a first node elm

// initiate the linked list
let list1=new Linked_List()

// console.log(node1.next.data);

//👉✅ Insert at head node
list1.insertAtHead(3)
list1.insertAtHead(2)
list1.insertAtHead(1)
list1.insertAtHead(0)

//👉✅ Insert at last node
list1.insertAtLast(4)
list1.insertAtLast(5)
list1.insertAtLast(6)

//👉❌ Delet at head
// list1.deleteAtHead()
// list1.deleteAtHead()
 
//👉❌ Delet at tail
// list1.deleteAtLast()
// list1.deleteAtLast()
// list1.deleteAtLast()
// list1.insertAtHead(1)

//👉✅ Insert at given index
list1.insertAtIndex(3,11)
list1.insertAtIndex(9,2120)

//👉❌ Delete at give index
list1.delteAtIndex(3)
list1.delteAtIndex(8)
console.log(JSON.stringify(list1,undefined,2));
