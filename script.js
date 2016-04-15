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
	adminView.init();
	listView.init();
  },

	incrementCounter: function(model) {
    model.count++;
    catView.render();
	},

	setCurrentCat: function(cat){
		catList.currentCat= cat;
	},
  //catList commands
	addListElement: function (e, id) {
			//in other context this is an optional part of the function
		  var list = document.getElementById(id);
			var newListElement = document.createElement('li');
			newListElement.appendChild(document.createTextNode(e.name));
			list.appendChild(newListElement);
			return newListElement;
		},
  //adminForm commands
	showAdminForm: function(){
		  console.log('showAdminForm is ON!');
			this.adminForm = document.getElementById('admin-form');
			this.adminForm.style.visibility='visible';
	    
		},

  hideAdminForm: function() {
  	  console.log('hideAdminForm is ON!')
			this.adminForm = document.getElementById('admin-form');
			this.adminForm.style.visibility='hidden';
		},

	switchAdminForm: function(){
	  if(adminView.selected === false){
	  	this.showAdminForm();
	  	adminView.selected = true;
	  }
	  else if(adminView.selected === true){
	  	this.hideAdminForm();
	  	adminView.selected = false;
	  }
	  else {
	  	alert('error with the switch button :(')
	  };
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
		catController.incrementCounter(catList.currentCat);
	});

	//call render fnction
	this.render();
	},

	render: function(){
    this.name.textContent = catList.currentCat.name;
    this.picture.src = catList.currentCat.picturePath;
    this.bottomtext.textContent = "Clicked " + catList.currentCat.count + " times.";

	}

}
//view of elements to modify cat
var adminView = {
	init: function() {
		//set selected property to false
		this.selected = false;
		//add event listener to admin button
		this.adminButton = document.getElementById('admin-button');
		this.adminButton.addEventListener('click',function(){catController.switchAdminForm()},false);
		//hide admin form
		catController.hideAdminForm();
		
	}
}

var listView = {
	// store pointer to DOM elements for easy access later
	init: function() {
	  this.catlist = document.getElementById('cat-list');
	  this.render();
  },
  render: function() {

  	//empty the cat list
		catList.innerHTML = '';

  	for (var i = 0;i < catList.length;i++) {
    
    cat = catList[i];
    
    //refactor by putting this into the controller
		
    
    var listElement = catController.addListElement(cat, 'cat-list')
    // changes the view to the selected cat in the list
		
		listElement.addEventListener('click',(function(catCopy) {
      	return function() {
      	console.log('add event listener: '+catCopy);
      	catController.setCurrentCat(catCopy);
      	catView.render();
      };
    }(cat)));
    }

    
  }
}

  

//initiate cat variables
var cat1 = new catModel('cat1', 'img-bin/tibouchon.jpg');
var cat2 = new catModel('cat2', 'img-bin/black-cat.jpg');
var cat3 = new catModel('cat3', 'img-bin/computer-cat.jpg');
var cat4 = new catModel('cat4', 'img-bin/black-cat.jpg');
var cat5 = new catModel('cat5', 'img-bin/computer-cat.jpg');

//initiate currentCat
catList.currentCat = catList[0];

//start app by initiating controller
catController.init();
