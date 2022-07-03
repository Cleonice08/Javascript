class Lista {
    constructor(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }
}

lista = [];

function listar(lista) {
    let auxHtml = "";
    for (let i = 0; i < lista.length; i++){
        auxHtml += 
            '<tr>' +
                '<td>' + lista[i].id + '</td>' +
                '<td>' + lista[i].name + '</td>' +
                '<td>' + lista[i].username + '</td>' +
                '<td>' + lista[i].email + '</td>' +
                '<td>' + "Rua: " + lista[i].address.street + " Cidade: " + lista[i].address.city + " CEP: " + lista[i].address.zipcode + '</td>' +
                '<td>' +
            '</tr>';

    }
    return auxHtml;
}

$(document).ready(function() {
    $('#btAjax').click(() => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET'
        }).done(function (dados) {
            console.log(dados)
            $('#spAjax').html(listar(dados));
        });
    });
});
    

