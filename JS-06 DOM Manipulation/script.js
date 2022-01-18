
function js_style(){
    var parrafo = document.getElementById("text");

    parrafo.style.color = "red";
    parrafo.style.fontSize = "40px";
    parrafo.style.fontFamily = "Lucida Sans";
}

function getFormvalue(){
    var form = document.getElementById("form1");
    var fname = form["fname"].value;
    var lname = form["lname"].value;

    console.log(fname +" "+ lname);
}

function getLinkInfo(){
    var links = document.getElementsByTagName("a");

    alert('Numero de links: ' + links.length);
    alert('Primer link es:' + links[0].innerHTML);
    alert('ultimo link es:' + links[links.length - 1].innerHTML);
}



