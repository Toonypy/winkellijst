/**
 * Created by Toon on 5/08/2015.
 */
$(document).ready(function () {
    $('.menuIcon').click(function() {
        $('#menu').css({'visibility': 'visible'});

        $.ajax({
            type: "GET",
            url: "/getWinkels",
            success: function (data) {
                $('#winkelLijst').empty();
                data.forEach(function(d) {
                    $('#winkelLijst').append('<li>' + d.naam + '</li>');
                });
            }

        });
    });

    $('#voegWinkelToe').click(function () {
        $.ajax({
            type: "POST",
            url: "/addWinkel",
            data: {
                winkelNaam: $('#winkelNaam').val()
            },
            success: function (data) {
                alert(data.naam + " toegevoegd!");
                $('#menu').css({'visibility': 'hidden'});
            }
        });
    });

    $('#voegWinkelAnn').click(function () {
        $('#menu').css({'visibility': 'hidden'});
    });
});
