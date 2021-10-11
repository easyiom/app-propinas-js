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



function calProp() {
    let a = $('[name="numero1"]').val(),
        b = $('[name="personas"]').val(),
        c = $('[name="valoracion"]').val();
    let result
    if (isNaN(a) == true || isNaN(b) == true || a == 0 || b == 0) {
        swal('Error', 'Introduce valores validos', 'error')
    } else {
        result = (a * c) / b;
        $('.mas-grande').html(result);
        console.log(result)
        return result;
    }
}

function borrar() {
    $('[name="numero1"]').val('');
    $('[name="personas"]').val('');
    $('.mas-grande').html('');

}
//window.onclick = calProp(num1, num2, valor);