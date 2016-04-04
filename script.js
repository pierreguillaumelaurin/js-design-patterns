function Cat(name,path){
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
	document.body.appendChild(this.nameText);
	document.body.appendChild(this.img);
	document.body.appendChild(this.bottomText);
}

Cat.prototype={
	constructor:Cat,
	handler:function(){
		this.count++;
		this.bottom.innerHTML='Clicked '+thiscount+' times';
	}
}

var cat1 = new Cat('cat1', 'pics/cat1.jpg');
var cat2 = new Cat('cat2', 'pics/cat2.jpg');


