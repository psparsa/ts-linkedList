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

  size(): number {
    let count: number = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear(): void {
    this.head = null;
  }

  getLast(): dataType | null {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
}

let node1 = new ListNode({ name: "John", age: 20 });
let node2 = new ListNode({ name: "Jane", age: 30 });
let node3 = new ListNode({ name: "Tom", age: 10 });
node1.next = node2;
node2.next = node3;

const list = new LinkedList(node1);

console.log("size:", list.size());
console.log("last element:", list.getLast());
