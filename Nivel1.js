/* Ejercicio 1 */
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];



const getEmployee = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let employee = employees.find(employee => employee.id === id);
            if (employee) {
                resolve(employee);
            } else {
                reject(`No se ha encontrado el trabajador con el ID: ${id}`);
            }
        }, 1000);
    });
};
 
const getSalary = employee => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let salary = salaries.find(salary => salary.id === employee.id);
            if (salary) {
                resolve({
                    Nombre: employee.name,
                    Salario: salary.salary
                });
            } else {
                reject(`No se ha encontrado dato alguno sobre el ID: ${employee.id}`);
            }
        }, 1000);
    });
};
 
async function pintadoEmployeeData(id) {
    try {
        let employee = await getEmployee(id);
        let salary = await getSalary(employee);
        console.log(`Nombre: ${employee.name}, Salario: ${salary.Salario}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
pintadoEmployeeData(2)

/* Ejercicio 2 */

async function promesaTime() {
    let result = await new Promise(resolve => {
      setTimeout(() => {
        resolve('La promesa ha sido resuelta después de 5 segundos.');
      }, 5000);
    });
  
    return result;
  }
  promesaTime().then(result => {
    console.log(result);
    });
  