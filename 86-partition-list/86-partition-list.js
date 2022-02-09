/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lessThanList = new ListNode();
    let greaterThanList = new ListNode();
    
    let lessThanHead = lessThanList;
    let greaterThanHead = greaterThanList;
    
    let current = head;
    
    while (current !== null) {
        if (current.val < x) {
            lessThanList.next = current;
            lessThanList = lessThanList.next;
        } else {
            greaterThanList.next = current;
            greaterThanList = greaterThanList.next;
        }
        current = current.next;
    }
    
    lessThanList.next = greaterThanHead.next;
    greaterThanList.next = null;
    
    return lessThanHead.next
};