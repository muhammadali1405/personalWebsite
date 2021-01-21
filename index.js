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
}