/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/*
  Time: O(n)
    3 pass
      find middle
      reverse second half
      reorder
  Space: O(1)
 */
const reverseLinkedList = (head) => {
  let prev = null,
    curr = head,
    next = head?.next;
  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next?.next;
  }
  return prev;
};

const reorderList = function (head) {
  let slowTail = new ListNode(null),
    slow = head,
    fast = head;

  // Find mid of LL
  while (fast) {
    slowTail = slow;
    slow = slow.next;
    fast = fast.next?.next;
  }
  slowTail.next = null;

  // Reverse second half of the list
  const reversed = reverseLinkedList(slow);

  // Reorder list
  let l1 = head,
    l2 = reversed;
  while (l1 && l2) {
    let l1Tmp = l1.next,
      l2Tmp = l2.next;
    l1.next = l2;
    l1 = l1Tmp;

    l2.next = l1Tmp;
    l2 = l2Tmp;
  }
};
