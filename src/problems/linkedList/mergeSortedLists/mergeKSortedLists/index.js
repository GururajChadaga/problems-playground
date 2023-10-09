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

import { mergeTwoSortedLists } from '../merge2SortedLists';

/*
  Time: O(klogk)
  Space: O(k)
 */
export const mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  else if (lists.length === 1) return lists[0];

  let mergedLists = [];

  while (lists.length > 1) {
    mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      mergedLists.push(
        mergeTwoSortedLists(
          lists[i],
          i + 1 < lists.length ? lists[i + 1] : null
        )
      );
    }
    lists = mergedLists;
  }
  return lists[0];
};
