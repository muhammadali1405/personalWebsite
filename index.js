function myFunction() {
    var x = document.getElementById("topCover");   
    var y = document.getElementById("bottomCover");
    x.style.display = "none";
    y.style.display = "none";
  } 


function navtabAbout() {
    var a = document.getElementById("navAbout");
    var b = document.getElementById("Skills");
    var c = document.getElementById("Projects");
    var d = document.getElementById("Education");
    a.style.background="white";
    b.style.background="none";
    c.style.background="none";
    d.style.background="none";
    var e = document.getElementById("about");
    var f = document.getElementById("skill");
    var g = document.getElementById("project");
    var h = document.getElementById("education");
    e.style.display = "block";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
}
function navtabSkills() {
    var a = document.getElementById("navAbout");
    var b = document.getElementById("Skills");
    var c = document.getElementById("Projects");
    var d = document.getElementById("Education");
    a.style.background="none";
    b.style.background="white";
    c.style.background="none";
    d.style.background="none";
    var e = document.getElementById("about");
    var f = document.getElementById("skill");
    var g = document.getElementById("project");
    var h = document.getElementById("education");
    e.style.display = "none";
    f.style.display = "block";
    g.style.display = "none";
    h.style.display = "none";
}
function navtabProjects() {
    var a = document.getElementById("navAbout");
    var b = document.getElementById("Skills");
    var c = document.getElementById("Projects");
    var d = document.getElementById("Education");
    a.style.background="none";
    b.style.background="none";
    c.style.background="white";
    d.style.background="none";
    var e = document.getElementById("about");
    var f = document.getElementById("skill");
    var g = document.getElementById("project");
    var h = document.getElementById("education");
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "block";
    h.style.display = "none";
}
function navtabEducation() {
    var a = document.getElementById("navAbout");
    var b = document.getElementById("Skills");
    var c = document.getElementById("Projects");
    var d = document.getElementById("Education");
    a.style.background="none";
    b.style.background="none";
    c.style.background="none";
    d.style.background="white";
    var e = document.getElementById("about");
    var f = document.getElementById("skill");
    var g = document.getElementById("project");
    var h = document.getElementById("education");
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "grid";
}



/**/ 

function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);