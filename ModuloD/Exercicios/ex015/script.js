function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fano.value.length === 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        res.innerHTML = `Idade calculada ${idade}`;
        var sexo = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            sexo = 'Masculino';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'foto.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'foto.png');
            } else {
                img.setAttribute('src', 'foto.png');
            }
        } else {
            sexo = 'Feminino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'foto.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'foto.png');
            } else {
                img.setAttribute('src', 'foto.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos pessoa de sexo biológico ${sexo} com ${idade} anos`;
        res.appendChild(img)
    }
}