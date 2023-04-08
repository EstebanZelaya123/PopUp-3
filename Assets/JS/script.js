

$(document).ready(function () {
    $('#openC').on('click', function () {
        $('#popupC').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#closec').on('click', function () {
        $('#popupC').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});

