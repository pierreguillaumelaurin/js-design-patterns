var cats = [];

function Cat(name,path){
	var self = this;
	this.name=name;
	this.path=path;
	this.count=0;
	this.nameText=document.createElement('h2');
	this.nameText.innerHTML=this.name;
	this.bottomText=document.createElement('h3');
	this.bottomText.innerHTML="Clicked " +this.count + " times";
	this.img=new Image();
	this.img.addEventListener('click', this.handler.bind(this), false);
	this.img.src=this.path;
	this.appendCat = function appendCat() {
		cats.push(name);
	}
	document.body.appendChild(this.nameText);
	document.body.appendChild(this.img);
	document.body.appendChild(this.bottomText);
	this.appendCat();
	
}


Cat.prototype={
	constructor:Cat,
	handler:function(){
		this.count++;
		this.bottomText.innerHTML='Clicked '+this.count+' times';
	}
}

function list(name, obj){
	var self = this;
	var contentText = document.createElement('ul');
	this.name = name;
	this.nameText = document.createElement('h1');;
	this.obj = obj;
	document.body.appendChild(this.nameText);
	document.body.appendChild(this.contentText);
}

list.prototype.appendObjects = function appendObjects(obj){
		li = [];
		for(var i;i < obj.length;i++) {
      li.push('<li>'+ obj[i] + '</li>');
		}
		return li;
		this.contentText.innerHTML = this.appendObjects(obj)
	};

//var listOfCats = new list('list of Cats', cats);
var cat1 = new Cat('cat1', 'img-bin/tibouchon.jpg');
var cat2 = new Cat('cat2', 'img-bin/tibouchon.jpg');
var cat3 = new Cat('cat2', 'img-bin/tibouchon.jpg');
var cat4 = new Cat('cat2', 'img-bin/tibouchon.jpg');
var cat5 = new Cat('cat2', 'img-bin/tibouchon.jpg');
//listOfCats.appendObjects(cats);

//find a way to build a list of cats
//add selection
//keep each cats number separate


