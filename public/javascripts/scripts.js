document.getElementById("leagal-age").addEventListener("click", getAge);
var dateSelector = document.createElement("input");
var submitButton = document.createElement("input");
var message = document.createElement("h1");
message.innerHTML = "Please enter your date of birth";
message.style.color = "#FFD23F";
message.style.textAlign = "center";
dateSelector.setAttribute('type', 'date');
dateSelector.style.width = "50%";
dateSelector.style.marginLeft = "25%"
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('id', "check-age");
document.getElementById("space").appendChild(message);
document.getElementById("space").appendChild(dateSelector);
document.getElementById("space").appendChild(submitButton);
function getAge() {
    document.getElementById("space").style.display = "block";
    document.getElementById("leagal-age").style.display = "none";
    document.getElementById("illeagal-age").style.display = "none";
}
document.getElementById("check-age").addEventListener("click", checkAge);
function checkAge() {
    var today = new Date();
    var enteredDate = new Date(dateSelector.value);
    var age = today.getFullYear() - enteredDate.getFullYear();
    var checkBirthMonth = true;
    if (age >= 21) {
        if (today.getMonth() - enteredDate.getMonth() < 0) {
            age--;
            checkBirthMonth = false;
        }
        if (checkBirthMonth == true && today.getDate() - (enteredDate.getDate() + 1) < 0) {
            age--;
        }

    }
    if (age >= 21) {
        window.location.replace("/findMyBrew-homepage");
    }
    else {
        window.location.replace("/not-21");
    }

}