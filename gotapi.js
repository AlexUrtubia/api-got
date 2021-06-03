$(document).ready(function () {
    $('img').click(function() { 
        var idvar = $(this).attr('id'); // get id from the clicked img
        // console.log(idvar); checking if it works ;)
        var url = 'https://www.anapioficeandfire.com/api/houses/'+idvar+'/';
        // console.log(url);
        $.get(url,function(res) {
            $('#det').empty();
            $('#det').append('<h4>Nombre : '+res.name+'</h4>');
            $('#det').append('<h4>Lema : '+res.words+'</h4>');
            $('#det').append('<h4 id="titles">Lema : </h4>');
            for (let i = 0; i < res.titles.length; i++) {
                $('#titles').append(res.titles[i]+', ');
            }
        }, 'json');
    });
});