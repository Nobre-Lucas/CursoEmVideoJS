function carregar () {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        img.src = './imgs/manha.jpeg';
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        img.src = './imgs/tarde.jpeg';
        document.body.style.background = '#b9846f'
    } else {
        img.src = './imgs/noite.jpg';
        document.body.style.background = '#515154'
    }
}