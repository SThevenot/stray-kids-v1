function zoomIn(event) {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    var img = document.getElementById("imgZoom");
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition = (-posX * 2) + "px " + (-posY * 2) + "px";
  
  }
  
  function zoomOut() {
    var element = document.getElementById("overlay");
    element.style.display = "none";
  }