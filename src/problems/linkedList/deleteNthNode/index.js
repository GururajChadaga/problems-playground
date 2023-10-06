/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let start = new ListNode(0, head),
    slow = start,
    fast = start;
  /*
    head = [1,2,3,4,5], n = 2
    start, slow, fast -> head = [1,2,3,4,5]
  */

  while (n) {
    fast = fast.next;
    n--;
  }
  /*
    start -> head = [1,2,3(slow),4,5(fast)]
  */
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  /*
    start -> head = [1,2,3(slow),5(fast)]
  */
  return start.next;
};
