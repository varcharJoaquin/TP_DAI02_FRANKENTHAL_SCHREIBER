import Alumno from "./modules/alumno.js";

let alumno1 = new Alumno("Paloma Gerarda Montenegro", "47872151", 48);
let alumno2 = new Alumno("Joaquín Jeremías Paterno", "48588463", 12);
let alumno3 = new Alumno();
alumno3.username = "Mauricio Fernandez";
alumno3.dni = "43765489";

console.clear();
console.log(alumno1.toString());
console.log(alumno2.toString());
console.log(alumno3.toString());