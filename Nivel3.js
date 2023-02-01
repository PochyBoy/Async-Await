function dobleRetraso(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num !== 'number') {
                reject(new Error('El parametro ha de ser un número'));
            } else {
                resolve(num * 2);
            }
        }, 2000);
    });
}

async function sumadenumerosDoble(num1, num2, num3) {
    try {
        const doubleNum1 = await dobleRetraso(num1);
        const doubleNum2 = await dobleRetraso(num2);
        const doubleNum3 = await dobleRetraso(num3);
        console.log(doubleNum1 + doubleNum2 + doubleNum3);
    } catch (error) {
        console.error(error);
    }
}


dobleRetraso(10).then(result => console.log(result));
sumadenumerosDoble(5, 5, 'uu').then(result => console.log(result));
