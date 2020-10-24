// botão checar
onEvent("button1_checar", "click", function( ) {
    setText('label_resultado', "" );
    if (getNumber("text_input_ano") % 400 == 0 ) {
       setText("label_resultado", "O ano " + getNumber("text_input_ano")
       + " é bissexto"); 
      } else {
      if (getNumber("text_input_ano") % 4 == 0 ) {
        setText("label_resultado", "O ano " + getNumber("text_input_ano")
       + " é bissexto");
      } else {
      setText("label_resultado", "O ano " + getNumber("text_input_ano")
       + " não é bissexto");
        if (getText("text_input_ano") == "")  {
      setText("label_resultado", "");
    }
      }
    }
  }
  );
  // botão limpar
  onEvent("button_limpar", "click", function( ) {
    setText('label_resultado', "" );
    setText("text_input_ano", "");
  });
  
    
  