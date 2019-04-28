// browser detection
var ua = navigator.userAgent;
var brList = {
  MSIE: "is-IE",
  Trident: "is-IE",
  Edge: "is-Edge",
  Chrome: "is-Chrome",
  Firefox: "is-Firefox",
  Safari: "is-Safari",
  Opera: "is-Opera",
}

var g = Object.keys(brList).find(function(elem, index) {
  if (ua.indexOf(elem) != -1) {
    console.log(index, elem)
    return elem;
  }
})
// setting up modal 
var msg;
if (g !== undefined) {
  msg = "Thank you for downloading.";
  document.body.classList.add(brList[g])
} else {
  msg = "Browser Not Supported.";
}
var d = document.getElementById("j__msg");
d.appendChild(document.createTextNode(msg))

// Event Handlers
document.getElementsByClassName('modal__j__trigger')
var modalTriggers = document.getElementsByClassName('modal__j__trigger')
var modal = document.getElementById('modal');
for (var i = 0; i < modalTriggers.length; i++) {
  modalTriggers[i].addEventListener('click', function(argument) {
    modal.style.display = 'block';
  }, false);
}
modal.addEventListener("click", function(argument) {
  modal.style.display = 'none';
}, false)
