
let lod = document.getElementById("load");
let playerNa = document.getElementById("nameEnter");

let btnName=document.getElementById("btnGame");
let loaderOut = function () {

  lod.classList.add("fadeOutUp");

}

document.onreadystatechange = function () {

  if (document.readyState === 'interactive') {

    loaderOut();

  }

}


let nameEnt=document.getElementById("EnterNameSec");
let btnName=document.getElementById("btnGame");

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

let loaderOut = function () {

  lod.classList.add("fadeOutUp");

}

document.onreadystatechange = function () {

  if (document.readyState === 'interactive') {

    loaderOut();

  }

}

btnName.addEventListener('click',function(){
  if(playerNa.value !=""){

    localStorage.setObj(playerNa.value,{scoreing:null,level1time:null,level2time:null,level3time:null,numberOfLives:lives});
    nameEnt.classList.add("fadeOutUp");
  }
});
