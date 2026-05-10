const contador = document.getElementById("contador");

const dataInicio = new Date("2024-10-06T00:00:00");

function atualizarTempo(){

  const agora = new Date();

  const diferenca = agora - dataInicio;

  const dias = Math.floor(
    diferenca / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferenca / (1000 * 60 * 60)) % 24
  );

  const minutos = Math.floor(
    (diferenca / (1000 * 60)) % 60
  );

  const segundos = Math.floor(
    (diferenca / 1000) % 60
  );

  contador.innerHTML =
  `❤️ Juntos há ${dias} dias,
   ${horas} horas,
   ${minutos} minutos
   e ${segundos} segundos`;
}

setInterval(atualizarTempo,1000);