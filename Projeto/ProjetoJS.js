class Livro {
    constructor(nome, codigo, genero, autor, valor, quantidade) {
        this.codigo = codigo;
        this.nome = nome;
        this.genero = genero;
        this.autor = autor;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

// livro1 = new Livro (1, "A selecao", "Romance", 49.99, 15, "Kiera Cass");
// livro2 = new Livro (2, "Elite", "Romance",  49.99, 15, "Kiera Cass");

/*window.onload = function() {
    document.getElementById('btSalvar').onclick = function() {
        alert('ok');
    }
}*/

listaLivros = [];
posicao = '';

function cadastrar(lista, objetoLivro) {
    lista.push(objetoLivro);
}

function alterar(lista, objetolivro, pos) {
    lista[pos] = objetolivro;
}

function listar(lista) {
    let auxHtml = '';
    for (let i = 0; i < lista.length; i++) {
        auxHtml += '<tr>' +
            '<td>' + lista[i].codigo + '</td>' +
            '<td>' + lista[i].nome + '</td>' +
            '<td>' + lista[i].genero + '</td>' +
            '<td>' + lista[i].autor + '</td>' +
            '<td>' + lista[i].valor + '</td>' +
            '<td>' + lista[i].quantidade + '</td>' +
            '<td>' +
            '<a href="#" class="btAlterar" rel="' + i + '" >' +
            '<img src="imagem2.PNG" width="25" height="25" />' +
            '</a>' +
            '</td>' +
            '<td>' +
            '<a href="#" class="btExcluir" rel="' + i + '">' +
            '<img src="excluir2.png" width="25" height="25" />' +
            '</a>' +
            '</td>' +
            '</tr>';

    }
    return auxHtml;
}

function excluir(lista, pos) {
    lista.splice(pos, 1);
}

$(document).ready(function () {
    $('#btSalvar').click(function () {
        //let codigo = document.getElementById('codigo').value;
        let nome = $('#nome').val();
        let codigo = $('#codigo').val();
        let genero = $('#genero').val();
        let autor = $('#autor').val();
        let valor = $('#valor').val();
        let quantidade = $('#quantidade').val();
        if (codigo != '' && nome != '' && genero != '' && autor != '' && valor != '' && quantidade != '') {
            let novoLivro = new Livro(nome, codigo, genero, autor, valor, quantidade);
            if (posicao == '') {
                cadastrar(listaLivros, novoLivro);
            } else {
                alterar(listaLivros, novoLivro, posicao);
                posicao = '';
            }
            $('input').val('');
            $('#tbLivros').html(listar(listaLivros));
        } else {
            alert('Informe todos os dados!');
        }
    });
    $('#tbLivros').on('click', '.btAlterar', function () {
        posicao = $(this).attr('rel');
        $('#codigo').val(listaLivros[posicao].codigo);
        $('#nome').val(listaLivros[posicao].nome);
        $('#genero').val(listaLivros[posicao].genero);
        $('#autor').val(listaLivros[posicao].autor);
        $('#valor').val(listaLivros[posicao].valor);
        $('#quantidade').val(listaLivros[posicao].quantidade);
    });

    $('#tbLivros').on('click', '.btExcluir', function () {
        if (confirm('Confirma a exclusão do livro?')) {
            let posExcluir = $(this).attr('rel');
            excluir(listaLivros, posExcluir);
            $('#tbLivros').html(listar(listaLivros));
        }
    });


    $('#btAjax').click(function () {
        $.ajax({
            url: 'http://date.jsontest.com/',
            method: 'GET'
        }).done(function (dados) {
            $('#spAjax').html(dados.date + ' ' + dados.time);
        });
    });

    $('#btIP').click(function () {
        $.ajax({
            url: 'http://ip.jsontest.com/',
            method: 'GET'
        }).done(function (dados) {
            $('#spIP').html(dados.ip);
        });
    });
});