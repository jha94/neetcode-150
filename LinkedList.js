const LinkedList = function (head, size) {
  this.head = head;
  this.size = size;
};

const Node = function (value, next) {
  this.value = value;
  this.next = next;
};

LinkedList.prototype.addAtHead = function (value) {
  let current = this.head;
  let node = new Node(value);
  if (!current) {
    this.head = node;
  } else {
    node.next = current;
    this.head = node;
  }
  this.size++;
};

LinkedList.prototype.get = function (index) {
  const node = this.getNode(index);
  return node?.value || -1;
};

LinkedList.prototype.getNode = function (index) {
  if (index === 0) {
    return this.head;
  }
  let current = this.head;
  for (let ind = 0; ind < index; ind++) {
    current = current.next;
  }
  return current;
};

LinkedList.prototype.addAtTail = function (value) {
  const node = new Node(value);
  let current = this.head;
  if (!current) {
    this.head = node;
  } else {
    while (current?.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.size++;
};

LinkedList.prototype.addAtIndex = function (value, index) {
  if (index < 0 || index > this.size) {
    return "Oops! wrong index";
  }
  const node = new Node(value);
  let current = this.head;
  if (index === 0) {
    this.head = node;
  }
  for (let ind = 0; ind < index; ind++) {
    current = current.next;
  }
  node.next = current.next;
  current.next = node;
  this.size++;
};

LinkedList.prototype.print = function (head) {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

// reverse
// checkDuplicate
// removeByValue
// removeByIndex
// hasCycle

LinkedList.prototype.reverse = function (head) {
  let [prev, current, next] = [null, head, null];
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

LinkedList.prototype.checkDuplicates = function (head) {
  const arr = [];
  let current = head;
  while (current) {
    if (arr.includes(current.value)) {
      return true;
    } else {
      arr.push(current.value);
      current = current.next;
    }
  }
  return false;
};

LinkedList.prototype.removeByValue = function (value, head) {
  if (head === null) {
    return null;
  }
  if (head.value === value) {
    return head.next;
  }
  let current = head;
  while (current?.value) {
    if (current.next.value === value) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
};

LinkedList.prototype.removeByIndex = function (head, index) {
  if (index < 0 || index > this.size) {
    return "Oops! wrong index";
  }
  if (index === 0) {
    return head;
  }
  let current = head;
  let ind = 0;
  while (current?.next) {
    if (index === ind + 1) {
      current.next = current.next.next;
    } else {
      current = current.next;
      ind++;
    }
  }
  return head;
};

LinkedList.prototype.hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

LinkedList.prototype.removeNthNodeFromEnd = function (head, n) {
  const dummy = new Node(0);
  dummy.next = head;
  let first = dummy;
  let sec = dummy;
  for (let index = 0; index <= n; index++) {
    first = first.next;
  }
  while (first !== null) {
    first = first.next;
    sec = sec.next;
  }
  sec.next = sec.next.next;
  return dummy.next;
};

const ll = new LinkedList();
ll.addAtHead(1);
ll.addAtHead(2);
ll.addAtIndex(3, 0);
ll.addAtTail(4);
ll.print(ll.head);
// console.log(ll.checkDuplicates(ll.head));
// const noDupHead = ll.removeByValue(4, ll.head);
// ll.print(noDupHead);

// const reversedHead = ll.reverse(ll.head);
// ll.print(reversedHead);
