/**
 * Created by Toon on 5/08/2015.
 */
$(document).ready(function () {
    $('#inToevoegen').keypress(function (e) {
        if (e.which == 13) {
            $('#voegToe').css({'visibility': 'visible'});
            $('.titel').append('<span class="kaderTitel">' + $(this).val() + '</span>');

            $.ajax({
                type: "GET",
                url: "/getWinkels",
                success: function (data) {
                    console.log(data);
                    data.forEach(function(d) {
                        $('#winkelSelect').append('<option value="' + d._id + '">' + d.naam + '</option>');
                    });
                }

            });

            return false;
        }
    });

    $('#voegItemToe').click(function () {
        $.ajax({
            type: "POST",
            url: "/addArtikel",
            data: {
                artikelNaam: $('#inToevoegen').val(),
                artikelWinkel: $('#winkelSelect').val()
            },
            success: function (data) {
                alert(data.naam + " toegevoegd!");
                $('#menu').css({'visibility': 'hidden'});
            }
        });
    });

    $('#voegItemAnn').click(function () {
        $('#voegToe').css({'visibility': 'hidden'});
    });
});