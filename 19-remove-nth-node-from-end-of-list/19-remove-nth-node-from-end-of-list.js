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
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode();
    dummyHead.next = head;
    
    let current = dummyHead;
    let size = 0;
    
    while (current.next !== null) {
        size++;
        current = current.next;
    }
    
    current = dummyHead;
    size -= n;
    
    while (size > 0) {
        size--;
        current = current.next;
    }
    current.next = current.next.next;
    
    return dummyHead.next
};