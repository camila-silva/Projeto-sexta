document.getElementById("cardapio").addEventListener("mouseenter", mouseEnter);


function mouseEnter() {
   document.getElementById("cardapio").style.backgroundColor = "#990000";
   document.getElementById("cardapio").style.color = "white";
   document.getElementById("cardapio").innerHTML = "<ul> <li>Japonesa</li><br><li>Brasileira</li><br><li>Italiana</li><br><li>Francesa</li><br><li>Portuguesa</li><br><li>Grega</li><br></ul>";
   document.getElementById("cardapio").addEventListener("mouseleave", mouseLeave);
   document.getElementById("cardapio").removeEventListener("mouseenter", mouseEnter);

}

function mouseLeave() {
   document.getElementById("cardapio").style.backgroundColor = "white";
   document.getElementById("cardapio").style.color = "#990000";
   document.getElementById("cardapio").innerHTML = '<a href="#cardapio" >Cardápio</a>';
   document.getElementById("cardapio").addEventListener("mouseenter", mouseEnter);
   document.getElementById("cardapio").removeEventListener("mouseleave", mouseLeave);


}
