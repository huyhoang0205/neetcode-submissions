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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if(head === null) return null;
        let pre : ListNode | null = null;
        while(head != null) {
            const cur = head;
            head = head.next;
            cur.next = pre;
            pre = cur;
        }

        return pre;
    }
}
