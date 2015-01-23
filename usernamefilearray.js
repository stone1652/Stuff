function UserListObject (userName) {
    this.userName = userName;
	this.imageList = [];
	
	
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
	this.getNext = function() {
		
	};
	this.setImageList = function(imageList) {
		this.imageList = imageList;
	};
}
