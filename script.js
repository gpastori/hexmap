// https://eperezcosano.github.io/hex-grid/
const canvas = document.getElementById('mappa');
const ctx = canvas.getContext('2d');
const a = 2 * Math.PI / 6; 
const r = 40;
const scarto = r-r*Math.sin(a);

function disegnaMappaPulsante() {
    disegnaMappa(document.getElementById("larghezzaMappa").value,document.getElementById("altezzaMappa").value); 
}

function disegnaMappa(larg, alt){
	//alert("Altezza: "+calcolaAltezza(hexX, hexY));
	//alert("Larghezza: "+calcolaLarghezza(hexX, hexY))
	canvas.width = calcolaLarghezza(larg, alt);
	canvas.height = calcolaAltezza(larg, alt);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let posX= r+scarto;
	let posY= r;
	for(var i = 0; i<alt; i++){
		let alt = 0;
		for (var j = 0; j<larg; j++){
			//Disegno l'hex con centro x,y
			disegnaHex(posX,posY);
			//alert("PosX:"+posX+" posY:"+posY);
			//mi sposto a destra
			posX= posX + r + r*(Math.cos(a));
			posY = posY + (r*Math.sin(a)* (-1)**alt)
			alt++;
		}
		posX= r+scarto;
		posY= r + (2*r*Math.sin(a))*(i+1);
	}	
}

function calcolaLarghezza(x,y){
	if (x%2 == 0){
		return 3*r*(x/2) + 2*scarto + r/2;
	}else{
		return 3*r*((x-1)/2)+(2*r) +2*scarto;
	}
}

function calcolaAltezza(x,y){
	if (x==1){
		return 2*r*Math.sin(a)*y + 2*scarto;
	}else{
		return 2*r*Math.sin(a)*y+(r*Math.sin(a)) +2*scarto;
	}
}

function disegnaHex(x, y) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();
}

function disegnaHexPulsante(){
    var x = document.getElementById('xHex').value;
    alert(x);
    var y = document.getElementById('yHex').value;
    var l = document.getElementById('lHex').value;
    var canvas = document.getElementById('mappa');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(128, 128, 128)';
        ctx.fillRect(x, y, l, l);
  }
}