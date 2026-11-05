const btn = document.getElementById("btn-calcola");
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");

function calcolaSoluzione(){
    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);
    let c = parseFloat(cInput.value);
    let delta = (b*b)-(4*a*c);
    if(delta < 0){
        console.log("Impossibile: ");
    }
    if(delta = 0){
        let x1 = (-b - Math.sqrt(delta)) / 2*a;
        console.log("Soluzioni: " + x1 );
    }
    if(delta > 0){
        let x1 = (-b - Math.sqrt(delta)) / 2*a;
        let x2 = (-b + Math.sqrt(delta)) / 2*a;
        console.log("Soluzioni: " + x1 + " " + x2);
    }
}

btn.addEventListener("click", calcolaSoluzione);

