$.getJSON('http://restcountries.eu/rest/v1', function (data) {

    $('#results').html(JSON.stringify(data));

});