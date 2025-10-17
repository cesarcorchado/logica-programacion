let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
    document.getElementById("resultado").innerHTML = "Los tres números son iguales.";
} else {
    
    let numeros = [num1, num2, num3];
    let mayorMenor = [...numeros].sort((a, b) => b - a);
    let menorMayor = [...numeros].sort((a, b) => a - b);

    
    console.log("De mayor a menor:", mayorMenor.join(", "));
    console.log("De menor a mayor:", menorMayor.join(", "));

    
    document.getElementById("resultado").innerHTML =
        `<strong>De mayor a menor:</strong> ${mayorMenor.join(", ")}<br>
        <strong>De menor a mayor:</strong> ${menorMayor.join(", ")}`;
}
