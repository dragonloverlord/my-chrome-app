document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#save").addEventListener('click',saveChanges);
});

function saveChanges(){
  var data = saveh("action-stats");
  chrome.storage.local.set({'action':data});
  var data = saveh("environmental-stats");
  chrome.storage.local.set({'environmental':data});
  var data = saveh("parenting-stats");
  chrome.storage.local.set({'parenting':data});
  var data = saveh("religious-stats");
  chrome.storage.local.set({'religious':data});
  var data = savev("environmental");
  chrome.storage.local.set({'environmentalLock':data});
  var data = savev("parenting");
  chrome.storage.local.set({'parentingLock':data});
  var data = savev("religious");
  chrome.storage.local.set({'religiousLock':data});
}