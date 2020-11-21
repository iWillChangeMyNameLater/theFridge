
document.getElementById("taylor").addEventListener("mouseover", displayTaylorInfo);
document.getElementById("taylor").addEventListener("mouseout", hideTaylorInfo);

function hideTaylorInfo(){
    document.getElementById("more-info").style.display = "none";
    document.getElementById("purposeHeader").style.display = "block";
    document.getElementById("purposeContent").style.display = "block";
}
function displayTaylorInfo(){
    document.getElementById("more-info").style.display = "block";
    document.getElementById("more-info").innerHTML="I have a passion" + 
    " for UX/UI Design and Web Design and hope to work for a big time" +
    " company in New York City some day! I am a plant enthusiast, foodie and explorer!";
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
    document.getElementById("more-info").innerHTML="Hoping to create designs with unique aesthetics. " +
    "An enthusiast for skating, breaking, and gaming!";
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
    document.getElementById("more-info").innerHTML=" I am more interested in the buissness side of IST, and I hope to one day obtain a position as an IT business analyst";
}