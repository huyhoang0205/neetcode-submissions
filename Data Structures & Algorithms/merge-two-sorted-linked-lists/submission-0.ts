/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (list1 === null) return list2;
        if (list2 === null) return list1;
        if (!list1 && !list2 ) return null;

        let head, pre;
        if(list1.val <= list2.val) {
            head = list1;
            pre = list1;
        } else {
            head = list2;
            pre = list2;
        }

        while(list1 || list2) {
            if(!list1) {
                pre.next = list2;
                break;
            }
            if(!list2) {
                pre.next = list1;
                break;
            }
            let cur;
            if(list1.val<= list2.val) {
                cur = list1;
                list1 = list1.next;
                pre.next = cur;
                pre = cur;
            } else {
                cur = list2;
                list2 = list2.next;
                pre.next = cur;
                pre = cur;
            }
        }
        return head;
    }
}
