/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  const heap = gifts.slice();
  const n = heap.length;

  const heapifyDown = (i) => {
    while (true) {
      let largest = i;
      const left = i * 2 + 1;
      const right = i * 2 + 2;

      if (left < n && heap[left] > heap[largest]) largest = left;
      if (right < n && heap[right] > heap[largest]) largest = right;

      if (largest === i) break;
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      i = largest;
    }
  };

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(i);
  }

  for (let i = 0; i < k; i++) {
    heap[0] = Math.floor(Math.sqrt(heap[0]));
    heapifyDown(0);
  }

  return heap.reduce((sum, v) => sum + v, 0);
    
    
};
