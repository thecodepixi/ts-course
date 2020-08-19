import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  constructor() {
    super();
  }

  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    // check for existing head
    // if it doesn't exist, this node is the head
    if (!this.head) {
      this.head = node;
      return;
    }
    // otherwise, find the last node in the list, and make this node the next one after it
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    // iterate through the nodes to find all of them using their 'next' property and count as you go
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  // method to access a node at a specific index
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    // keep track of the counter and the current node, starting at the head
    let counter = 0;
    let node: Node | null = this.head;
    // iterate through until the current node matches the count
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    // throw an error in case the index is higher than the # of nodes
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
