function ConverterD() {
    //   Captura o valor em real digitado e o transforma em dolar
    var valor = document.getElementById("valor").value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmDolarNumerico = valorEmRealNumerico / 5.253;
    valorEmDolarNumerico = valorEmDolarNumerico.toFixed(2);
  
    // Mostra esse resultado na tela
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "USD $ = " + valorEmDolarNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterE() {
    //   Captura o valor em real digitado e o transforma em euro
    var valor = document.getElementById("valor").value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmEuroNumerico = valorEmRealNumerico / 5.545;
    valorEmEuroNumerico = valorEmEuroNumerico.toFixed(2);
  
    // Mostra esse resultado na tela
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "EUR € =  " + valorEmEuroNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  