function wyskakujaceOkienko() {
    
    this.pokaz = function(okienko) {
        
        var oknoSzerokosc = window.innerWidth;
        var oknoWysokosc = window.innerHeight;
        var animacja = document.getElementById('animacja');
        var okienko_box_calosc = document.getElementById('okienko_box_calosc');
        
        animacja.style.display = "block";
        animacja.style.height = oknoWysokosc+"px";
        okienko_box_calosc.style.left = (oknoSzerokosc/2) - (600 * .5)+"px";
        okienko_box_calosc.style.top = "300px";
        okienko_box_calosc.style.display = "block";
        
        document.getElementById('okienko_box_naglowek').innerHTML = "O zawodzie:";
        document.getElementById('okienko_box_tresc').innerHTML = okienko;
        document.getElementById('okienko_box_stopka').innerHTML = '<button onclick="okno.zamknij()"> Wróć do zawodów </button>';
    }
	this.zamknij = function() {
        
		document.getElementById('okienko_box_calosc').style.display = "none";
		document.getElementById('animacja').style.display = "none";
	}
}
var okno = new wyskakujaceOkienko();