const num = Number(prompt("Ingrese Numero : "));
//const num = 3;

const calculo_factorial = (n) => {
  let factorial = 1;
  for (let j = 1; j <= n; j++) {
    factorial = factorial * j;
    console.log("Factorial de " + j + " es: " + factorial);
  }
};
const tabla_multiplicar = (n) => {
  if (n > 0 && n < 20) {
    let multiplicacion = 1;
    for (let i = 1; i <= n; i++) {
      multiplicacion = n * i;
      console.log(i + " x " + n + " =: " + multiplicacion);
    }
    calculo_factorial(num);
  } else {
    console.log("número fuera de rango");
  }
};

tabla_multiplicar(num);
