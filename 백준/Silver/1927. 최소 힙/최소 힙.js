const fs=require("fs");
const input=fs.readFileSync(0).toString().split("\n");
const N=parseInt(input[0]);
const op=input.slice(1).map(Number);

class MiniHeap{
    constructor(){
        this.heap=[null];
    }
    push(value){
        this.heap.push(value);
        let cur=this.heap.length-1;
        while (cur>1){
            let parent = Math.floor(cur / 2);
      if (this.heap[cur] < this.heap[parent]) {
        [this.heap[cur], this.heap[parent]] = [this.heap[parent], this.heap[cur]];
        cur = parent;
      } else break;
    }
  }

  pop() {
    if (this.heap.length <= 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    const min = this.heap[1];
    this.heap[1] = this.heap.pop();
    let cur = 1;

    while (cur * 2 < this.heap.length) {
      let left = cur * 2;
      let right = cur * 2 + 1;
      let smaller = left;

      if (right < this.heap.length && this.heap[right] < this.heap[left]) {
        smaller = right;
      }

      if (this.heap[cur] > this.heap[smaller]) {
        [this.heap[cur], this.heap[smaller]] = [this.heap[smaller], this.heap[cur]];
        cur = smaller;
      } else break;
    }
    return min;
  }
}

const heap = new MiniHeap();
let result = [];

for (let i = 0; i < N; i++) {
  const x = op[i];
  if (x === 0) {
    result.push(heap.pop());
  } else {
    heap.push(x);
  }
}

console.log(result.join("\n"));