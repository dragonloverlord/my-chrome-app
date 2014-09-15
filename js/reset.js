document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#reset").addEventListener('click',reset);
});

function reset(){
  chrome.storage.sync.clear();
  idf("money-text").innerHTML = 0;
  idf("childrens-stats").innerHTML = 0;
  idf("drama-stats").innerHTML = 0;
  idf("fantasy-stats").innerHTML = 0;
  idf("fiction-stats").innerHTML = 0;
  idf("history-stats").innerHTML = 0;
  idf("scifi-stats").innerHTML = 0;
  idf("trashy-stats").innerHTML = 0;
  idf("nonfiction-stats").innerHTML = 0;
  idf("math-stats").innerHTML = 0;
  idf("humor-stats").innerHTML = 0;
  idf("satire-stats").innerHTML = 0;
  idf("romance-stats").innerHTML = 0;
  idf("report-stats").innerHTML = 0;
  idf("survival-stats").innerHTML = 0;
  idf("gothic-stats").innerHTML = 0;
  idf("adventure-stats").innerHTML = 0;
  var fantasy = idf("fantasy");
  fantasy.innerHTML = "Locked ???";
  fantasy.className = "book-button-locked";
  var satire = idf("satire");
  satire.innerHTML = "Locked ???";
  satire.className = "book-button-locked";
  var history = idf("history");
  history.innerHTML = "Locked 1500$";
  history.value = 0;
  history.className = "book-button-locked";
  var trashy = idf("trashy");
  trashy.innerHTML = "Locked 1000$";
  trashy.value = 0;
  trashy.className = "book-button-locked";
}