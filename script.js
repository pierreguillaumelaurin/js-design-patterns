
var clickCountModel = 0;
var catPictureContainer = document.getElementById('cat-picture-container');
var clickCountView = document.getElementById('click-count');
clickCountView.innerHTML = clickCountModel;

function addClick() {
  clickCountModel += 1;
  clickCountView.innerHTML = clickCountModel;
}


catPictureContainer.addEventListener('click', addClick);




