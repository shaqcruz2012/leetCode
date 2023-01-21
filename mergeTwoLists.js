// You are given the heads of two sorted linked lists `list1` and `list2`.

// Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

// Return *the head of the merged linked list*.

// ```
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 !== null ? list1 : list2;
    return dummy.next;
};

```

// In this example, we create a dummy node to serve as the head of the new merged list. We also create a current pointer that starts at the dummy node. We then iterate through the two input lists using a while loop. Inside the loop, we compare the current value of list1 and list2, if the value of list1 is smaller we add it to the merged list, otherwise we add the value of list2 to the merged list.
// We then move the current pointer to the next node and continue the iteration until one of the input lists is fully traversed.
// Finally, we append the remaining elements of the non-empty list to the merged list. And return the next node of the dummy head, which is the head of the merged list.

// This algorithm has a linear time complexity of O(n), where n is the total number of elements in both input lists.