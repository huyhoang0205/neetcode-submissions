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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const nodeMap = new WeakSet();
        let tmp= head;
        while(tmp) {
            if(nodeMap.has(tmp.next)) return true;
            nodeMap.add(tmp);
            tmp = tmp.next;
        }
        return false;
    }
}
