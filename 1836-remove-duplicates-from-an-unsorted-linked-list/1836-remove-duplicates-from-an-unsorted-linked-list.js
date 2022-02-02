/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {
//     store values in map with key = node value & value = node value count
//     
    console.log(head)
    
    let current = head;
    let countNodes = new Map();
    
    while (current !== null) {
        countNodes.set(current.val, countNodes.get(current.val)+1 || 1);
        
        current = current.next;
    }
    
    let dummyHead = new ListNode();
    dummyHead.next = head;
    current = head;

    
    let prev = dummyHead;

    while (current !== null) {
        
        if (countNodes.get(current.val) > 1) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        
        current = current.next;
    }
    return dummyHead.next;
    
};