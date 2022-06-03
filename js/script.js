
function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=andr3iss&select=" + service;
}

function getBasePathindex(service) {
    return "https://chilealerta.com/api/query/?user=andr3iss&select=" + service +"&limit={1}";
}
function createRowDisaster(reference, magnitude, latitude, longitude, local_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + local_time + '</td></tr>';
}

function createRowOnemiDisaster(state, post_title, alert_region, alert_date, url) {
    return '<tr><td>' + state + '</td><td>' + post_title + '</td><td>' + alert_region + '</td><td>' + alert_date + '</td><td><a href="' + url + '">' + url + '</a></td></tr>';
}

function createRowMundoDisaster(reference, magnitude, latitude, longitude, utc_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + utc_time + '</td></tr>';
}
function validarContacto(contacto){
    event.preventDefault();
    
    var nombre
    var apellido
    var correo 
    var comuna

    if(validarNombre(nombre)==false){
        document.getElementById('nombre').focus();
        alert('Debe ingresar un nombre.')
    }
    else
    if(validarApellido(apellido)==false){
        document.getElementById('apellido').focus();
        alert('Debe ingresar un apellido.')
    }
    else
    if(validarCorreo(correo)==false){
        document.getElementById('correo').focus();
        alert('Debe ingresar su correo.')
    }
    else
    if(validarTipoCorreo(correo)==false){
        document.getElementById('correo').focus();
        alert('Debe indicar una dirección de su correo.')
    }
    else
    if(validarComuna(comuna)==false){
        document.getElementById('comuna').focus();
        alert('Debe seleccionar una comuna.')
    }
    else{
        alert('Se ha enviado correctamente.')
    }
}
function validarNombre(nombre){
    if(nombre == ''){
        return false;
    } else {
        return true;
    }
}
function validarApellido(apellido){
    if(apellido == ''){
        return false;
    } else {
        return true;
    }
}
function validarCorreo(correo){
    if(correo == ''){
        return false;
    } else {
        return true;
    }
}
function validarTipoCorreo(correo){
    if(correo == '@gmail' || correo == '@duocuc.cl' || correo == '@profesor.duoc.cl'){
        return true;
    } else {
        return false;
    }
}
function validarComuna(comuna){
    if(comuna == ''){
        return false;
    } else {
        return true;
    }
}