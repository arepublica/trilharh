//let salletLead = document.getElementById('salletlead');
let leadnome = document.getElementById('lead-nome');
let leademail = document.getElementById('lead-email');

$(document).ready(function () {
    $.getJSON('http://ip-api.com/json?callback=?', function (data) {
        let leadIp = "";
        let e = JSON.stringify(data.query, null, 2);
        leadIp = e
       // alert(leadIp)
    });
});


function fSendLead() {
    let data = new Date();
    // Guarda cada pedaço em uma letiável
    let dia = data.getDate();           // 1-31
    let mes = data.getMonth();          // 0-11 (zero=janeiro)
    let ano4 = data.getFullYear();       // 4 dígitos
    let hora = data.getHours();          // 0-23
    let min = data.getMinutes();        // 0-59
    let seg = data.getSeconds();        // 0-59

    if (mes <= 9) {
        mes = mes + 1
        let m = '0' + mes
        mes = m
    };

    if (dia <= 9) {
        let d = '0' + dia
        dia = d
    };

    if (hora <= 9) {
        let h = '0' + hora
        hora = h
    };
    if (min <= 9) {
        let mi = '0' + min
        min = mi
    };

    if (seg <= 9) {
        let s = '0' + seg
        seg = s
    };

    let str_hora = hora + ':' + min + ':' + seg;
    let str_data = ano4 + '-' + (mes) + '-' + dia + ' ' + str_hora;

    let lead = {
        nome: leadnome.value,
        email: leademail.value,
        dtInsc: str_data,
        ip: leadIp
    };
    firebase.database().ref().child('leads').push(lead)
}
