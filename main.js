
/*var variable; 
//Ciclo if 
if (condicion) { 
    //Si la condición se cumple se ejecuta esto: 
    variable = accionVerdadero; 
    } else { 
//Si la condición NO se cumple se ejecuta esto: 
    variable = accionFalso; 
    } 
//Operador ternario 
variable = condicion ? accionVerdadero : accionFalso;*/

console.log("-----EXERCISE 1: EL OPERADOR TERNARIO Y SU USO EN JAVASCRIPT-----");

var accesorio;
var clima = 'soleado';
// Cuando si se cumple la condición:  
accesorio = (clima === 'soleado') ? 'Lentes de sol' : 'Paraguas';
console.log(`Dado que el clima es ${clima}, entonces llevaremos ${accesorio}`);
// Cuando no se cumple la condición:  
clima = 'Lluvia';
accesorio = (clima === 'soleado') ? 'Lentes de sol' : 'Paraguas';
console.log(`Dado que el clima es ${clima}, entonces llevaremos ${accesorio}`);


console.log("-----EXERCISE 2: EVALUANDO CONDICIONES USANDO AND Y OR-----");

console.log("----------Ejemplos OR ||----------");

var verdadero = 5 < 10;
var falso = 5 < -10;
// Se cumple al menos una condición: 
if (falso || verdadero) {
    console.log("1) " + (falso || verdadero));
}
// No se cumple ninguna condición (Ningún argumento es verdadero): 
if (falso || falso) {
    console.log("2) " + (falso || falso));
}

// Se cumplen ambas condiciones: 
if (verdadero || verdadero) {
    console.log("3) " + (verdadero || verdadero));
}
//La condición siempre se cumplirá si UNO de los dos argumentos es verdadero. 

console.log("----------Ejemplos AND &&----------");

var verdadero = 5 < 10;
var falso = 5 < -10;
// Se cumple al menos una condición: 
if (falso && verdadero) {
    console.log("1) " + (falso && verdadero));
}
// No se cumple ninguna condición (Ningún argumento es verdadero): 
if (falso && falso) {
    console.log("2) " + (falso && falso));
}

// Se cumple al menos una condición: 
if (verdadero && verdadero) {
    console.log("3) " + (verdadero && verdadero));
}
//La condición solo se cumplirá si LOS DOS argumentos son verdaderos. 

console.log("----------Ejemplos OR donde siempre devuelve Truthy----------");

// OR: Siempre retornará valor Truthy 
console.log("resultado OR 1: " + (false || 'Automóvil'))
console.log("resultado OR 2: " + (0 || 'Automóvil'))
console.log("resultado OR 3: " + (1 || 'Automóvil'))
console.log("resultado OR 4: " + ('Automóvil' || 1))
console.log("resultado OR 5: " + (true || 'Automóvil'))

console.log("----------Ejemplos AND donde siempre devuelve Falsy----------");

// AND: Siempre retornará valor falsy 
console.log("resultado AND 1: " + (false && 'Automóvil'))
console.log("resultado AND 2: " + (0 && 'Automóvil'))
console.log("resultado AND 3: " + (1 && 'Automóvil'))
console.log("resultado AND 4: " + ('Automóvil' && 1))
console.log("resultado AND 5: " + (true && 'Automóvil')) 