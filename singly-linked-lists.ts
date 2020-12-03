interface dataType {
  name: string;
  age: number;
}

class ListNode {
  data: dataType;
  next: any;
  constructor(data: dataType) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: any;
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode({ name: "John", age: 20 });
let node2 = new ListNode({ name: "Jane", age: 30 });
node1.next = node2;

const list = new LinkedList(node1);

console.log(list.head.data);
