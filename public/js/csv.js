
firebase.database().ref('leads').on('value', function (snapshot) {
    lista.innerHTML = '';
    snapshot.forEach(function (item) {
        lista.innerHTML += '<li>' + item.val().nome + ';' + item.val().email +  ';' +item.val().dtInsc +'</li>';
    });
});