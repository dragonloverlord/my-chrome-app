var app = angular.module("app",[]);

function helpbuttons(){

}

app.controller("helpbuttons",[helpbuttons]);

helpbuttons.prototype.general = function(){
  document.getElementById('iframe').src = '/html/general.html';
}

helpbuttons.prototype.names = function(){
  document.getElementById('iframe').src = '/html/names.html';
}

helpbuttons.prototype.unlock = function(){
  document.getElementById('iframe').src = '/html/unlock.html';
}