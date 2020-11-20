
var link1= document.getElementById("link1");
link1.addEventListener("mouseover", displayLink1Info);
link1.addEventListener("mouseout", hideLink1Info);

function hideLink1Info(){
    document.getElementById("div1").style.display = "none";
}
function displayLink1Info(){
    document.getElementById("div1").style.display = "block";
}

var link2= document.getElementById("link2");
link2.addEventListener("mouseover", displayLink2Info);
link2.addEventListener("mouseout", hideLink2Info);

function hideLink2Info(){
    document.getElementById("div2").style.display = "none";
}
function displayLink2Info(){
    document.getElementById("div2").style.display = "block";
}

var link3= document.getElementById("link3");
link3.addEventListener("mouseover", displayLink3Info);
link3.addEventListener("mouseout", hideLink3Info);

function hideLink3Info(){
    document.getElementById("div3").style.display = "none";
}
function displayLink3Info(){
    document.getElementById("div3").style.display = "block";
}