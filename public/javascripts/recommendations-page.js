

//Code on this page is modeled afer the in class demo and our zybooks chapter 11
document.getElementById('save-button').addEventListener("click", postData);
function postData(){
    formData= {name: document.getElementById('name-field').value, recomendation: document.getElementById('recomendations-field').value}
    alert("hello");
    $.ajax({
        method: 'POST',
        url: '/recomendations',
        data: formData,
        success: function(data) {
            alert(data);
            console.log(data);
        }
    });
}
document.getElementById('refresh').addEventListener("click", getData);
function getData(data){
    $.ajax({
        method: 'get',
        url: '/recomendations',
        success: function(data) {
            console.log(data);
            data.forEach((recomendation)=>{
                console.log(recomendation.name);
                var recID= recomendation._id;
                var name= recomendation.name;
                var rec =recomendation.recomendation;
                var recInfo= $('<li></li>').text(recID+"\n"+name+"\n"+rec);
                $('#sure').append(recInfo);
            });
        }
    });

}
document.getElementById('del').addEventListener("click", deleteData);

function deleteData(data){
    $.ajax({
        method: 'delete',
        url: '/recomendations',
        data: {_id:"5fc93d83604c9906d468ed0f"},
        success: function(data) {
            console.log(data);
            
        }
    });

}
document.getElementById('up').addEventListener("click", updateData);

function updateData(data){
    $.ajax({
        method: 'put',
        url: '/recomendations',
        data: {_id:"5fc8f8611e0c700424761d19", recomendation: "hello"},
        success: function(data) {
            console.log(data);
            
        }
    });
}