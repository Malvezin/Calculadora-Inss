const inputSalario = document.getElementById("inputSalario")
const resultado = document.getElementById("resultado")
const button = document.getElementById("button")
const pA = document.getElementById("pA")
const vD = document.getElementById("vD")

function calcularINSS() {
    //pegarValor
    const salario = Number(inputSalario.value);
    let percentual = 0;
    //logica
    if (salario <=1500 ){
        percentual = 8;
    } else if (salario <=3000 ){
        percentual = 9;
    } else {
        percentual = 11;
    }

    //calculoDesconto
    const valorDesconto = salario *(percentual / 100);

    //exibeValor
    resultado.innerText = `salario: R$ ${salario.toFixed(2)} | Percentual: ${percentual.toFixed(2)}`
}

button.addEventListener("click", resultado)