var catList = [];

var catModel = function(name, picturePath, count){
	var self = this;
	this.name = name;
	this.picturePath = picturePath;
	if (typeof count === 'undefined') { count = 0; };
	this.count = count;
	//append cat to list of cat
	catList.push(this);
}



var catController = {
	init: function() {
	catView.init();
	listView.init();
  },

	incrementCounter: function(model) {
    model.count++;
	},
	setCurrentCat: function(cat){
		catList.currentCat= cat;
	}
}

var catView = {
	init: function() {
	// store pointers to DOM elements for easy access later
	var self = this;
	this.cat = document.getElementById('cat');
	this.name = document.getElementById('name');
	this.picture = document.getElementById('picture');
	this.bottomtext = document.getElementById('bottomtext');
  
  // add event listener
	this.picture.addEventListener('click', function(){
		catController.incrementCounter();
	})

	//call render fnction
	console.log(catList.currentCat.picturePath);
	this.render(catList.currentCat);
	},

	render: function(current){
    this.name.textContent = current.name;
    this.picture.src = current.picturePath;
    console.log(current.picturePath.src);
    this.bottomtext.textContent = "Clicked " + current.count + " times.";

	}

}

var listView = {
	// store pointer to DOM elements for easy access later
	init: function() {
	for(var i = 0;i < catList.length;i++) {

		function addListElement(e, id) {
		  var list = document.getElementById(id);
			var newListElement = document.createElement('li');
			newListElement.appendChild(document.createTextNode(e.name));
			list.appendChild(newListElement);
		}
		console.log(catList[i]);
    console.log('function addListElement: '+ addListElement(catList[i], 'cat-list'));
		addListElement(catList[i], 'cat-list');

    }
  }
}
  

//initiate cat variables
var cat1 = new catModel('cat1', 'img-bin/tibouchon.jpg');
var cat2 = new catModel('cat2', 'img-bin/tibouchon.jpg');
var cat3 = new catModel('cat3', 'img-bin/tibouchon.jpg');
var cat4 = new catModel('cat4', 'img-bin/tibouchon.jpg');
var cat5 = new catModel('cat5', 'img-bin/tibouchon.jpg');

//initiate currentCat
catList.currentCat = catList[0];
console.log('currentCat: '+catList.currentCat);

//start app by initiating controller
catController.init();
