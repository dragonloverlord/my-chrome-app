chromeLoad = function(){

}

app.controller("chromeLoad", [chromeLoad]);

chromeLoad.prototype.money = function(){
  chrome.storage.local.get('money',function(obj) {
    var money = parseInt(obj.money);
    gt("money-text").innerHTML = money;
  });
  var target = gtch("money-text",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("money-text");
      chrome.storage.local.set({'money':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.drama = function(){
  chrome.storage.local.get('drama',function(obj) {
    var drama = parseInt(obj.drama);
    gt("drama-stats").innerHTML = drama;
  });
  var target = gtch("drama-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("drama-stats");
      chrome.storage.local.set({'drama':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.fantasy = function(){
  chrome.storage.local.get('fantasy',function(obj) {
    var fantasy = parseInt(obj.fantasy);
    gt("fantasy-stats").innerHTML = fantasy;
  });
  var target = gtch("fantasy-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("fantasy-stats");
      chrome.storage.local.set({'fantasy':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.scifi = function(){
  chrome.storage.local.get('scifi',function(obj) {
    var scifi = parseInt(obj.scifi);
    gt("scifi-stats").innerHTML = scifi;
  });
  var target = gtch("scifi-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("scifi-stats");
      chrome.storage.local.set({'scifi':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.trashy = function(){
  chrome.storage.local.get('trashy',function(obj) {
    var trashy = parseInt(obj.trashy);
    gt("trashy-stats").innerHTML = trashy;
  });
  var target = gtch("trashy-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("trashy-stats");
      chrome.storage.local.set({'trashy':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.historybook = function(){
  chrome.storage.local.get('History',function(obj) {
    var history = parseInt(obj.History);
    gt("history-stats").innerHTML = history;
  });
  var target = gtch("history-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("history-stats");
      chrome.storage.local.set({'History':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.childrens = function(){
  chrome.storage.local.get('childrens',function(obj) {
    var childrens = parseInt(obj.childrens);
    gt("childrens-stats").innerHTML = childrens;
  });
  var target = gtch("childrens-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("childrens-stats");
      chrome.storage.local.set({'childrens':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.trashyLock = function(){
  chrome.storage.local.get('trashyLock',function(obj) {
    var trashyLock = parseInt(obj.trashyLock);
    gt("trashy").value = trashyLock;
  });
  var target = gt("trashy");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = savev("trashy");
      chrome.storage.local.set({'trashyLock':data});
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

bookbuttons.prototype.historyLock = function(){
  chrome.storage.local.get('historyLock',function(obj) {
    var historyLock = parseInt(obj.historyLock);
    gt("history").value = historyLock;
  });
  var target = gt("history");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = savev("history");
      chrome.storage.local.set({'historyLock':data});
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

bookbuttons.prototype.romanceLock = function(){
  chrome.storage.local.get('romanceLock',function(obj) {
    var romanceLock = parseInt(obj.romanceLock);
    gt("romance").value = romanceLock;
  });
  var target = gt("romance");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = savev("romance");
      chrome.storage.local.set({'romanceLock':data});
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.fiction = function(){
  chrome.storage.local.get('fiction',function(obj) {
    var fiction = parseInt(obj.fiction);
    gt("fiction-stats").innerHTML = fiction;
  });
  var target = gtch("fiction-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("fiction-stats");
      chrome.storage.local.set({'fiction':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.nonfiction = function(){
  chrome.storage.local.get('nonfiction',function(obj) {
    var nonfiction = parseInt(obj.nonfiction);
    gt("nonfiction-stats").innerHTML = nonfiction;
  });
  var target = gtch("nonfiction-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("nonfiction-stats");
      chrome.storage.local.set({'nonfiction':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.math = function(){
  chrome.storage.local.get('math',function(obj) {
    var math = parseInt(obj.math);
    gt("math-stats").innerHTML = math;
  });
  var target = gtch("math-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("math-stats");
      chrome.storage.local.set({'math':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.humor = function(){
  chrome.storage.local.get('humor',function(obj) {
    var humor = parseInt(obj.humor);
    gt("humor-stats").innerHTML = humor;
  });
  var target = gtch("humor-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("humor-stats");
      chrome.storage.local.set({'humor':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.satire = function(){
  chrome.storage.local.get('satire',function(obj) {
    var satire = parseInt(obj.satire);
    gt("satire-stats").innerHTML = satire;
  });
  var target = gtch("satire-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("satire-stats");
      chrome.storage.local.set({'satire':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.romance = function(){
  chrome.storage.local.get('romance',function(obj) {
    var romance = parseInt(obj.romance);
    gt("romance-stats").innerHTML = romance;
  });
  var target = gtch("romance-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("romance-stats");
      chrome.storage.local.set({'romance':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.report = function(){
  chrome.storage.local.get('report',function(obj) {
    var report = parseInt(obj.report);
    gt("report-stats").innerHTML = report;
  });
  var target = gtch("report-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("report-stats");
      chrome.storage.local.set({'report':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.survival = function(){
  chrome.storage.local.get('survival',function(obj) {
    var survival = parseInt(obj.survival);
    gt("survival-stats").innerHTML = survival;
  });
  var target = gtch("survival-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("survival-stats");
      chrome.storage.local.set({'survival':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.gothic = function(){
  chrome.storage.local.get('gothic',function(obj) {
    var gothic = parseInt(obj.gothic);
    gt("gothic-stats").innerHTML = gothic;
  });
  var target = gtch("gothic-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("gothic-stats");
      chrome.storage.local.set({'gothic':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.adventure = function(){
  chrome.storage.local.get('adventure',function(obj) {
    var adventure = parseInt(obj.adventure);
    gt("adventure-stats").innerHTML = adventure;
  });
  var target = gtch("adventure-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("adventure-stats");
      chrome.storage.local.set({'adventure':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.actionLock = function(){
  chrome.storage.local.get('actionLock',function(obj) {
    var actionLock = parseInt(obj.actionLock);
    gt("action").value = actionLock;
  });
  var target = gt("action");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = savev("action");
      chrome.storage.local.set({'actionLock':data});
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.action = function(){
  chrome.storage.local.get('action',function(obj) {
    var action = parseInt(obj.action);
    gt("action-stats").innerHTML = action;
  });
  var target = gtch("action-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("action-stats");
      chrome.storage.local.set({'action':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.environmentalLock = function(){
  chrome.storage.local.get('environmentalLock',function(obj) {
    var environmentalLock = parseInt(obj.environmentalLock);
    gt("environmental").value = environmentalLock;
  });
}

chromeLoad.prototype.environmental = function(){
  chrome.storage.local.get('environmental',function(obj) {
    var environmental = parseInt(obj.environmental);
    gt("environmental-stats").innerHTML = environmental;
  });
}

bookbuttons.prototype.parentingLock = function(){
  chrome.storage.local.get('parentingLock',function(obj) {
    var parentingLock = parseInt(obj.parentingLock);
    gt("parenting").value = parentingLock;
  });
}

chromeLoad.prototype.parenting = function(){
  chrome.storage.local.get('parenting',function(obj) {
    var parenting = parseInt(obj.parenting);
    gt("parenting-stats").innerHTML = parenting;
  });
}

bookbuttons.prototype.religiousLock = function(){
  chrome.storage.local.get('religiousLock',function(obj) {
    var religiousLock = parseInt(obj.religiousLock);
    gt("religious").value = religiousLock;
  });
}

chromeLoad.prototype.religious = function(){
  chrome.storage.local.get('religious',function(obj) {
    var religious = parseInt(obj.religious);
    gt("religious-stats").innerHTML = religious;
  });
}
