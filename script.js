function allowDrop(ev) {
    ev.preventDefault();
    console.log("JANKO1");
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("JAN2");
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log("JAN3");
  }