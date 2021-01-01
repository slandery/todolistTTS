let myList = document.getElementsByTagName("LI");
let i = myList;
  for (i = 0; i < myList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
  let c;
    for (c = 0; i < close.length; i++) {
  close[c].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a check when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(checkmark) {
  if (checkmark.target.tagName === 'LI') {
    checkmark.target.classList.toggle('checked');
  }
}, false);

// Create a new list item with button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let into = document.createTextNode(inputValue);
  li.appendChild(into);
  if (inputValue === '') {
    alert("You didn't add anything!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//setTimeout(myInput.remove,1000);