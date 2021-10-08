window.onload = function() {

    if (Cookies.get('load1') != 1) {
        Cookies.set('load1', '1');
        $('.containerForm').addClass('active')
    } else {
        $('.containerForm').css({ 'opacity': '1', 'transition': '0s all' });
        $('.containerForm p').css({ 'opacity': '1', 'transition': '0s all' });
        $('.containerForm h1').css({ 'opacity': '1', 'transition': '0s all' });
        $('.containerForm select').css({ 'opacity': '1', 'transition': '0s all' });
        $('.containerForm input').css({ 'opacity': '1', 'transition': '0s all' });
        $('.containerForm button').css({ 'opacity': '1', 'transition': '0s all' });
    }
}