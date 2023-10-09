/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
  Time: O(n + m)
    n is the length of list1
    m is the length of list
  Space: O(1)
*/
export const mergeTwoSortedLists = function (list1, list2) {
  let l1, l2, l1Tail;
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    l1 = list1;
    l2 = list2;
  } else {
    l1 = list2;
    l2 = list1;
  }
  const newHead = new ListNode(null, l1);

  while (l1 && l2) {
    l1Tail = new ListNode(null);
    while (l1?.val <= l2?.val) {
      l1Tail = l1;
      l1 = l1.next;
    }
    l1Tail.next = l2;

    if (l2?.val < l1?.val) {
      const tmpForSwap = l1;
      l1 = l2;
      l2 = tmpForSwap;
    }
  }
  if (!l1) l1Tail.next = l2;
  return newHead.next;
};
