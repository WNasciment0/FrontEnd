function conexaoPerdida (mensagem) {
    let mensagemISS = new Promise ((result, reject) => {
      if(mensagem == "Olá ISS") {
         result("");
      }else {
         reject("");
      }
    })
    return mensagemISS
   }
   
   conexaoPerdida("Olá")
   
   .then(ON => document.write("Estamos vivos" +ON))
   .catch(OFF => document.write("Conexão perdida" +OFF))