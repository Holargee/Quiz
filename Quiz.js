alert("enjoy🤝");
setInterval(always,10);
function always(){
var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");
var rad4 = document.getElementById("rad4");

var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");

if(rad1.checked==true){
 dot1.style.display="block";
 dot2.style.display="none";
 dot3.style.display="none";
 dot4.style.display="none";
}
else if(rad2.checked==true){
 dot1.style.display="none";
 dot2.style.display="block";
 dot3.style.display="none";
 dot4.style.display="none";
}
else if(rad3.checked==true){
 dot1.style.display="none";
 dot2.style.display="none";
 dot3.style.display="block";
 dot4.style.display="none";
}
else if(rad4.checked==true){
 dot1.style.display="none";
 dot2.style.display="none";
 dot3.style.display="none";
 dot4.style.display="block";
}

if(document.getElementById("nex").style.display=="block"){
 rad1.disabled=true;
 rad2.disabled=true;
 rad3.disabled=true;
 rad4.disabled=true;   
}
else{
 rad1.disabled=false;
 rad2.disabled=false;
 rad3.disabled=false;
 rad4.disabled=false;   
}

var num = document.getElementById("num").value;
var scr = document.getElementById("scr").value;
document.getElementById("score").value = scr + "/" + num;
}
var num = 0;
var scr = 0;
function rel(){
fetch("https://opentdb.com/api.php?amount=1&category=9")
    .then(response => response.json())
    .then(data => {
        var d1 = JSON.stringify(data);
        var d2 = d1.split('"');
        var d3 = d2[4];
        var d4 = d2[5];
        var que = d2[19];
        num = num + 1;
      // alert(d1);
var l1 = document.getElementById("l1").style;
var l2 = document.getElementById("l2").style;
var l3 = document.getElementById("l3").style;
var l4 = document.getElementById("l4").style;

l1.display="block";
l2.display="block";
l3.display="block";
l4.display="block";

var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var ran1 = Math.ceil(Math.random() * 4);

var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");
var rad4 = document.getElementById("rad4");

if (ran1=="4"){
    ran2="2";ran3="1";ran4="3"
}
else if (ran1=="2"){
    ran2="3";ran3="1";ran4="4"
}  
else if (ran1=="3"){
    ran2="1";ran3="4";ran4="2"
}  
else if (ran1=="1"){
    ran2="2";ran3="3";ran4="4"
}   
document.getElementById("que").innerHTML= que;
document.getElementById("ans" + ran1).innerHTML= d2[23];
document.getElementById("ans" + ran2).innerHTML= d2[27];
document.getElementById("ans" + ran3).innerHTML= d2[29];
document.getElementById("ans" + ran4).innerHTML= d2[31];
if (ans1.innerText =="undefined"){l1.display="none"}
if (ans2.innerText =="undefined"){l2.display="none"}
if (ans3.innerText =="undefined"){l3.display="none"}
if (ans4.innerText =="undefined"){l4.display="none"}
document.getElementById("answr").value = d2[23];
var scr = document.getElementById("scr").value;
document.getElementById("num").value=num;

    })
   
}
/*function rel(){
 fetch('https://opentdb.com/api.php?amount=1&category=9')
  .then(response => response.json())
  .then(data => {
    // do something with the data
    var d1 = JSON.stringify(data);
    var d2 = d1.slice(27,-3);
    var d3 = d1.substr(14,3);
  alert(d1);
  alert("hi");  document.getElementById("head").innerText=d3;
document.getElementById("advice").innerText=d2;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}*/
rel();

function radi(){
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var answr =document.getElementById("answr");

var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");
var rad4 = document.getElementById("rad4");

var cir1 = document.getElementById("cir1");
var cir2 = document.getElementById("cir2");
var cir3 = document.getElementById("cir3");
var cir4 = document.getElementById("cir4");
var scr = document.getElementById("scr").value;

var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");

dot1.style.display="none";
dot2.style.display="none";
dot3.style.display="none";
dot4.style.display="none";

if(rad1.checked == true && ans1.innerText == answr.value){
alert("correct");
cir1.className="fa fa-check";
scr = scr - -1;}
else if ( rad1.checked && ans1.innerText != answr.value ){
cir1.className="fa fa-times";
if(ans2.innerText==answr.value){cir2.className="fa fa-check"}
else if(ans3.innerText==answr.value){cir3.className="fa fa-check"}
else if(ans3.innerText==answr.value){cir3.className="fa fa-check"}
else if(ans4.innerText==answr.value){cir4.className="fa fa-check"}
}

if(rad2.checked == true && ans2.innerText == answr.value){alert("correct");cir2.className="fa fa-check";scr= scr - -1;}
else if ( rad2.checked && ans2.innerText != answr.value ){
cir2.className="fa fa-times";
if(ans1.innerText==answr.value){cir1.className="fa fa-check"}
else if(ans3.innerText==answr.value){cir3.className="fa fa-check"}
else if(ans3.innerText==answr.value){cir3.className="fa fa-check"}
else if(ans4.innerText==answr.value){cir4.className="fa fa-check"}
}

if(rad3.checked == true && ans3.innerText == answr.value){alert("correct");cir3.className="fa fa-check";scr = scr - -1;}
else if ( rad3.checked && ans3.innerText != answr.value ){
cir3.className="fa fa-times";
if(ans2.innerText==answr.value){cir2.className="fa fa-check"}
else if(ans1.innerText==answr.value){cir1.className="fa fa-check"}
else if(ans3.innerText==answr.value){cir3.className="fa fa-check"}
else if(ans4.innerText==answr.value){cir4.className="fa fa-check"}
}

if(rad4.checked == true && ans4.innerText == answr.value){alert("correct");cir4.className="fa fa-check";scr = scr - -1;}
else if ( rad4.checked && ans4.innerText != answr.value ){
cir4.className="fa fa-times";
if(ans2.innerText==answr.value){cir2.className="fa fa-check"}
else if(ans3.innerText==answr.value){cir3.className="fa fa-check"}
else if(ans3.innerText==answr.value){cir3.className="fa fa-check"}
else if(ans1.innerText==answr.value){cir1.className="fa fa-check"}
}

rad1.checked = false;
rad2.checked = false;
rad3.checked = false;
rad4.checked = false;
document.getElementById("scr").value=scr;
document.getElementById("sub").style.display="none";
document.getElementById("nex").style.display="block";
}

function next(){
var cir1 = document.getElementById("cir1");
var cir2 = document.getElementById("cir2");
var cir3 = document.getElementById("cir3");
var cir4 = document.getElementById("cir4");
cir1.className="fa";
cir2.className="fa";
cir3.className="fa";
cir4.className="fa";
document.getElementById("nex").style.display="none";
document.getElementById("sub").style.display="block";
}
