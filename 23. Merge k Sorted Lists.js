/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  const mergedLists = lists.slice();

  const mergeTwoLists = function (first, second) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (first !== null && second !== null) {
      if (first.val <= second.val) {
        tail.next = first;
        first = first.next;
      } else {
        tail.next = second;
        second = second.next;
      }
      tail = tail.next;
    }

    tail.next = first !== null ? first : second;
    return dummy.next;
  };

  for (let interval = 1; interval < mergedLists.length; interval *= 2) {
    for (let i = 0; i + interval < mergedLists.length; i += interval * 2) {
      mergedLists[i] = mergeTwoLists(mergedLists[i], mergedLists[i + interval]);
    }
  }

  return mergedLists[0];
};
