function print(value) {
	console.log(value)
}
troll = document.getElementById("troll");
botao = document.getElementById("brinquedo");
alerta = document.getElementById("waitAlert");
som = document.getElementById("audioBesta");
anuncios = document.querySelector(".static");
var slot1 = anuncios.firstChild;
var slot2 = anuncios.lastChild;
slot1.setAttribute("src", "fakead1.jpg");
slot2.setAttribute("src", "fakead2.jpg")
print("working")
var cliques = 0;
troll.setAttribute("href", "#")
if (botao) {
botao.addEventListener("click", function(){
	cliques += 1;
	print("Click N " + cliques);
	if (cliques >= 5) {
		alerta.innerHTML = "Parabéns! clique no link abaixo para ganhar seu prêmio!"
		troll.setAttribute("href", "https://youtu.be/NoOelyM6Y1w")
		troll.firstChild.innerHTML = "presente grátis";
		som.play();
		slot1.setAttribute("src", "apontando1.jpg");
		slot2.setAttribute("src", "apontando2.jpg");
	} else {
		setTimeout(() => {
			alerta.innerHTML = ""
		}, 900)
	
		alerta.innerHTML = "Clique mais uma vez"
	}
})
} else {
	print("not clickable")
}
