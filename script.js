var catModel = function(name, picture, count){
	var self = this;
	this.name = name;
	this.picture = picture;
	if (typeof count === 'undefined') { count = 0; };
	this.count = count;
}

var catView = function(){
	var self = this;
	this.nameText = document.createElement('h2');
	this.img= new Image();
	this.bottomText = document.createElement('h3');

}

catController = function(model,view){
	var self = this;
	this.model = model;
	this.view = view;
	this.view.nameText.innerHTML= model.name;
	this.view.img.src = model.picture;
	this.view.bottomText.innerHTML="Clicked " + this.model.count + " times";
	document.body.appendChild(this.view.nameText);
	document.body.appendChild(this.view.img);
	document.body.appendChild(this.view.bottomText);
}



var cat1 = new catModel('cat1', 'img-bin/tibouchon.jpg');
var cat2 = new catModel('cat1', 'img-bin/tibouchon.jpg');
var cat3 = new catModel('cat1', 'img-bin/tibouchon.jpg');
var cat4 = new catModel('cat1', 'img-bin/tibouchon.jpg');
var cat5 = new catModel('cat1', 'img-bin/tibouchon.jpg');

console.log(cat1);

var view = new catView();

catController(cat1, view);
