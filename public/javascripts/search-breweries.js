var searchButton = document.getElementById('search');
searchButton.addEventListener("click", getResult)
 function getResult(){
    var input = document.getElementById('term').value;
    $.ajax({
        method: 'GET',
        url: '/breweries',
        data: {
            input: input,
            brewType: $('#brew-type').val(),
            searchFilter: $('#search-fliter').val()
        },
        success: PrintResult
    });
 }
function PrintResult (result) {
    var oldResults=document.getElementById("brewey-list");
    while(oldResults.hasChildNodes()){
        oldResults.removeChild(oldResults.firstChild);
    }
    console.log(result);
    result.forEach((brewery)=>{
        var breweryStreet= brewery.street;
        var breweryCity = brewery.city;
        var breweryAddress = breweryStreet+" "+breweryCity;
        var breweryName=brewery.name;
        var breweryInfo= $('<li></li>').text(breweryName+" "+breweryAddress);
        $('#brewey-list').append(breweryInfo);
    });
}
 


