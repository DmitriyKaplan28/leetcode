/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  if (!nums1.length || !nums2.length || k <= 0) {
    return [];
  }

  const heap = [];

  const siftUp = (index) => {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (heap[parent][0] <= heap[index][0]) {
        break;
      }
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
    }
  };

  const siftDown = (index) => {
    while (true) {
      let smallest = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;

      if (left < heap.length && heap[left][0] < heap[smallest][0]) {
        smallest = left;
      }
      if (right < heap.length && heap[right][0] < heap[smallest][0]) {
        smallest = right;
      }
      if (smallest === index) {
        break;
      }
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      index = smallest;
    }
  };

  for (let i = 0; i < nums1.length; i++) {
    heap.push([nums1[i] + nums2[0], i, 0]);
    siftUp(heap.length - 1);
  }

  const result = [];

  while (heap.length && result.length < k) {
    const [sum, i, j] = heap[0];
    result.push([nums1[i], nums2[j]]);

    heap[0] = heap[heap.length - 1];
    heap.pop();

    if (heap.length) {
      siftDown(0);
    }

    if (j + 1 < nums2.length) {
      heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
      siftUp(heap.length - 1);
    }
  }

  return result;
};
