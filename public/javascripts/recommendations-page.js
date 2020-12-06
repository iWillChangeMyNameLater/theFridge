

//Code on this page is modeled afer the in class demo and our zybooks chapter 11
document.getElementById('create-form-button').addEventListener("click", showCreateForm);
function showCreateForm(){
    document.getElementById('delete-form').style.display="none";
    document.getElementById('update-form').style.display="none";
    document.getElementById('create-form').style.display="block";
    
}
document.getElementById('up-form-button').addEventListener("click", showUpdateForm);
function showUpdateForm(){
    document.getElementById('delete-form').style.display="none";
    document.getElementById('update-form').style.display="block";
    document.getElementById('create-form').style.display="none";
    
}
document.getElementById('del-form-button').addEventListener("click", showDeleteForm);
function showDeleteForm(){
    document.getElementById('delete-form').style.display="block";
    document.getElementById('update-form').style.display="none";
    document.getElementById('create-form').style.display="none";
    
}
document.getElementById('save-button').addEventListener("click", postData);
function postData(){
    formData= {name: document.getElementById('name-field').value, recomendation: document.getElementById('recomendations-field').value};
    $.ajax({
        method: 'POST',
        url: '/recomendations',
        data: formData,
        success: function(data) {
            alert(data);
        }
    });
}
document.getElementById('refresh').addEventListener("click", getData);
function getData(data){
  
    $.ajax({
        method: 'get',
        url: '/recomendations',
        success: function(data) {
            var oldRecomendations=document.getElementById("sure");
            while(oldRecomendations.hasChildNodes()){
                oldRecomendations.removeChild(oldRecomendations.firstChild);
            }
            var recomendationsHeader= $('<li></li>').text("Recomendations"+"\n\n");
            $('#sure').append(recomendationsHeader);
            data.forEach((recomendation)=>{
                var recID= recomendation._id;
                var name= recomendation.name;
                var rec =recomendation.recomendation;
                var recInfo= $('<li></li>').text("ID:"+recID+"\n"+"name:"+name+"\n"+"Recomendation: "+rec+"\n\n");
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
        data: {_id:document.getElementById('id-field').value},
        success: function(data) {
            alert(data);
            
        }
    });

}
document.getElementById('up').addEventListener("click", updateData);

function updateData(data){
    $.ajax({
        method: 'put',
        url: '/recomendations',
        data: {_id:document.getElementById('id-field2').value, recomendation: document.getElementById('recomendations-field2').value },
        success: function(data) {
            alert(data);
            
        }
    });
}