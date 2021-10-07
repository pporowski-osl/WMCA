function touchStart(evt, tab) {
  evt.stopPropagation();
  evt.preventDefault();
  openTab(evt, tab);
}

function openTab(evt, tab) {
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  
  var tocButtons = document.getElementsByClassName("tocButton");
  for (var i = 0; i < tocButtons.length; i++) {
    tocButtons[i].className = tocButtons[i].className.replace(" selectedButton", "");
  }
  
  document.getElementById(tab).style.display = "flex";
  evt.currentTarget.className += " selectedButton";
}