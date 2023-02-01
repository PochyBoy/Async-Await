/*Ejercicio 1 */

function dobleRetraso(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 2);
      }, 2000);
    });
  }
  
  async function sumadenumerosDoble(a, b, c) {
    const doubleA = await dobleRetraso(a);
    const doubleB = await dobleRetraso(b);
    const doubleC = await dobleRetraso(c);
    return doubleA + doubleB + doubleC;
  }

  dobleRetraso(10).then(result => console.log(result));
  sumadenumerosDoble(5, 5, 5).then(result => console.log(result));

  