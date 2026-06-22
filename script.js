function avaliar(nota) {

  emailjs.send(
    "SEU_SERVICE_ID",
    "SEU_TEMPLATE_ID",
    {
      nota: nota,
      data: new Date().toLocaleString()
    }
  )
  .then(() => {
    alert("Avaliação enviada!");
  })
  .catch((erro) => {
    console.error(erro);
    alert("Erro ao enviar.");
  });

}