//Reverse a single linked-list
//Example:
// Input : Head of following linked list  
//        1->2->3->4->NULL
// Output : Linked list should be changed to,
//        4->3->2->1->NULL

//Javascript
//Time complexity: O(n)
function reverseLinkedList(list, previous){

  //We need to use the the current setting of
  //list.next before we change it. We could save it in a temp variable,
  //or, we could call reverseLinkedList recursively
  if(list.next !== null){
    reverseLinkedList(list.next, list);
  }

  //Everything after 'list' is now reversed, so we don't need list.next anymore.
  //We passed previous in as an argument, so we can go ahead and set next to that.
  list.next = previous;
}
reverseLinkedList(list, null);

