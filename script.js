 function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();

  var formateDate = `${dia}/${mes}/${ano}`;
  
  msg.innerHTML = `Agora são ${hora}:${minutos} horas do dia ${formateDate}`;

  if (hora >= 0 && hora < 12) {
    img.src = './img/manha.png';
    document.body.style.background = '#F6AF86';

  } else if (hora >= 12 && hora < 18) {
    img.src = './img/tarde.png';
    document.body.style.background = '#FEAB47';

  } else {
    img.src = './img/noite.png';
    document.body.style.background = '#0A4BA0';
  }
 }

 carregar();
