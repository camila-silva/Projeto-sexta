function validateForm() {
let campos = document.getElementsByClassName('dd');
let contador = 1;
for(i=0; i<campos.length;i++){


  if (campos[i].value == "") {
    contador--;
  }
  }
  if(contador!=1){
    alert("Por favor, preencha todos os campos.");
  }
  else{
    alert("Parabéns, a sua venda foi efetuada!");
  }
}
