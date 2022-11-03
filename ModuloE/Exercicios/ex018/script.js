function contar() {
    let inicio = document.getElementById('txti');
    let final = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (inicio.value.length === 0 || final.value.length === 0 || passo.value.length === 0) {
        alert('[ERRO] Faltam dados!');
    } else {
        res.innerHTML = 'Contando: <br>';
        let ini = Number(inicio.value);
        let fim = Number(final.value);
        let pas = Number(passo.value);

        if (pas <= 0) {
            alert('Passo inválido. Considerando passo igual a 1');
            pas = 1;
        }
    
        if (ini < fim) {
            for (let i = ini; i <= fim; i += pas) {
                res.innerHTML += `${i} \u{1F449} `;
            }
        } else {
            for (let i = ini; i >= fim; i -= pas) {
                res.innerHTML += `${i} \u{1F449} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}