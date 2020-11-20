
document.getElementById("taylor").addEventListener("mouseover", displayTaylorInfo);
document.getElementById("taylor").addEventListener("mouseout", hideTaylorInfo);

function hideTaylorInfo(){
    document.getElementById("more-info").style.display = "none";
    document.getElementById("purposeHeader").style.display = "block";
    document.getElementById("purposeContent").style.display = "block";
}
function displayTaylorInfo(){
    document.getElementById("more-info").style.display = "block";
    document.getElementById("more-info").innerHTML=" hello";
    document.getElementById("purposeHeader").style.display = "none";
    document.getElementById("purposeContent").style.display = "none";
}
document.getElementById("tomi").addEventListener("mouseover", displayTomiInfo);
document.getElementById("tomi").addEventListener("mouseout", hideTomiInfo);

function hideTomiInfo(){
    document.getElementById("more-info").style.display = "none";
    document.getElementById("purposeHeader").style.display = "block";
    document.getElementById("purposeContent").style.display = "block";
}
function displayTomiInfo(){
    document.getElementById("more-info").style.display = "block";
    document.getElementById("more-info").innerHTML=" hi";
    document.getElementById("purposeHeader").style.display = "none";
    document.getElementById("purposeContent").style.display = "none";
}
document.getElementById("cecilia").addEventListener("mouseover", displayCeciliaInfo);
document.getElementById("cecilia").addEventListener("mouseout", hideCeciliaInfo);

function hideCeciliaInfo(){
    document.getElementById("more-info").style.display = "none";
    document.getElementById("purposeHeader").style.display = "block";
    document.getElementById("purposeContent").style.display = "block";
}
function displayCeciliaInfo(){
    document.getElementById("more-info").style.display = "block";
    document.getElementById("purposeHeader").style.display = "none";
    document.getElementById("purposeContent").style.display = "none";
    document.getElementById("more-info").innerHTML=" howdy";
}