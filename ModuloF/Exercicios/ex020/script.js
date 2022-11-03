let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function ehNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function emLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (ehNumero(num.value) && !emLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${Number(num.value)} adicionado`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior)
                maior = valores[pos];
            if (valores[pos] < menor)
                menor = valores[pos];
        }
        media = soma / total;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
        res.innerHTML += `<p>A soma dos números é ${soma}</p>`;
        res.innerHTML += `<p>A média dos números é ${media}</p>`;
    }
}