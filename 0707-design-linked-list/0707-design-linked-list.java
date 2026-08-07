class MyLinkedList {

    class Node{
        int val;
        Node next = null;

        //constructor
        Node(int val){
             this.val = val;
             this.next = null;
        }

        Node(int val, Node next){
             this.val = val;
             this.next = next;
        }
        
    }

    Node head;
    int size;

    public MyLinkedList() {
        head = null;
        size = 0;  
    }
    
    public int get(int index) {
        if (index<0 || index>=size) return -1;
        int cnt=0;
        Node temp=head;
        while(temp!=null){
            if(cnt==index){
                return temp.val;
            }
            temp=temp.next;
            cnt++;
        }
        return -1;
        
    }
    
    public void addAtHead(int val) {
        Node temp = new Node(val);
        temp.next = head;
        head = temp;
        size++;
    }
    
    public void addAtTail(int val) {

        if(head==null){
            head=new Node(val);
            size++;
            return;
        }
        Node temp = head;

        while (temp.next!=null){
            temp=temp.next;
        }
        temp.next= new Node(val);
        size++;
    }
    
    public void addAtIndex(int index, int val) {
        Node temp = new Node(val);
        Node curr = head;

        //invalid index
        if (index<0 || index>size){
            return;
        }
        if (index==0){
            head = new Node(val,head);
            size++;
            return;
        }
    
        for (int i=1;i<index;i++){
            curr=curr.next;
        }
        Node next = curr.next; 
        curr.next = temp;
        temp.next = next;
        size++;
    }
    
    public void deleteAtIndex(int index) {
        Node temp = head;
        int cnt=0;
        Node dummy = new Node(0);
        dummy.next=head;
        Node prev=dummy;

        if (index<0 || index>size) return;

        while(temp!=null){
            if(cnt==index){
                prev.next=temp.next;
                head = dummy.next;
                size--;
                return; //or break;
            }
            prev=temp;
            temp=temp.next;
            cnt++;
        }
        
        
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */