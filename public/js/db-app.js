//var salvarLead = document.getElementById('salvarlead');
var leadnome = document.getElementById('lead-nome');
var leademail = document.getElementById('lead-email');

$(document).ready(function () {
    $.getJSON('http://ip-api.com/json?callback=?', function (data) {
        let leadIp = "";
        var e = JSON.stringify(data.query, null, 2);
        leadIp = e
       // alert(leadIp)
    });
});


function fSendLead() {
    /* var ipCli=""
     $.getJSON('http://ip-api.com/json?callback=?', function (data) {
         var e = JSON.stringify(data.query, null, 2);
         ipCli = e
     });*/
    var data = new Date();
    // Guarda cada pedaço em uma variável
    var dia = data.getDate();           // 1-31
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear();       // 4 dígitos
    var hora = data.getHours();          // 0-23
    var min = data.getMinutes();        // 0-59
    var seg = data.getSeconds();        // 0-59

    if (mes <= 9) {
        mes = mes + 1
        var m = '0' + mes
        mes = m
    };

    if (dia <= 9) {
        var d = '0' + dia
        dia = d
    };

    if (hora <= 9) {
        var h = '0' + hora
        hora = h
    };
    if (min <= 9) {
        var mi = '0' + min
        min = mi
    };

    if (seg <= 9) {
        var s = '0' + seg
        seg = s
    };

    var str_hora = hora + ':' + min + ':' + seg;
    var str_data = ano4 + '-' + (mes) + '-' + dia + ' ' + str_hora;

    var lead = {
        nome: leadnome.value,
        email: leademail.value,
        dtInsc: str_data,
        ip: leadIp
    };
    firebase.database().ref().child('leads').push(lead)
}
