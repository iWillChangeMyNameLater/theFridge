
var link1= document.getElementById("link1");
link1.addEventListener("mouseover", displayLink1Info);
link1.addEventListener("mouseout", hideLink1Info);

function hideLink1Info(){
    document.getElementById("div1").style.display = "none";
}
function displayLink1Info(){
    document.getElementById("div1").style.display = "block";
}