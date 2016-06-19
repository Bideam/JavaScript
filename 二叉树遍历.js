//实现二叉树
function Node(data,left,right)
{
	this.data=data;
	this.left=left;
	this.right=right;
	this.show=show;

}

function show(){
	return this.data;
}

function BST(){
	this.root=root;
	this.insert=insert;
	this.inOrder=inOrder;
}

function insert(data){
	var n= new Node(data,null,null);
	if(this.root=null){
		this.root=n;
	}
	else{
		var current=this.root;
		var paretn;
		while(true){
			paretn=current;
			if (data<current.data) {
				current=current.left;
				if (current=null) {
					paretn.left=n;
					break;
				}
			}
			else{
				current=current.right;
				if (current=null) {
					paretn.right=n;
					break
				}
			}
		}
	}
}


//中序遍历
function inOrder(node){
	if (!(node=null)) {
		inOrder(node.left);
		putstr(node.show()+'');
		inOrder(node.right);
	}
}