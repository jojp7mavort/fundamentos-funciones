//Variables tipo simples
let vidasSteve = 20
let velocidadCorrer = 1.3
let nombrePersonaje = "Steve"
let poderOculto = "✦"
let esInvulnerable = false
let nivelActual = undefined

//Variables tipo compuestas
let itemsRecogidos = ["diamante", "esmeralda", "pico", 64, "🏆"]

let enemigo = {
    tipo: "Ender Dragon",
    vidas: 200
}

//console.log(itemsRecogidos);

//-----------------------------------------
//Strings - cadenas de caracteres
//Propiedades - Metodos

let passwordMINECRAFT = "Craft12345"
console.log(passwordMINECRAFT.length);

//Metodo - trim (para eliminar los espacios en blancos)
console.log(passwordMINECRAFT.trim());
//Metodo - includes (verificar si contiene un número o string)
console.log(passwordMINECRAFT.includes("6"));
//Metodo - toLowerCase (minusculas)
console.log(passwordMINECRAFT.toLowerCase());
//Metodo - toUpperCase (mayusculas)
console.log(passwordMINECRAFT.toUpperCase());

//ES6 - nuevas características
//Template strings
console.log(`El password de Minecraft es: ${passwordMINECRAFT}`);

//----------------------------------------------

let precioJuegoPC = 29.99
let precioJuegoConsola = "19.99"
//Casting 
console.log(+precioJuegoConsola + precioJuegoPC);

// ---------------------------------------------
let bloquesSteve = 500
let bloquesAlex = 1000

//ES6 - operador ternario
bloquesSteve <= bloquesAlex ? console.log("Gana Alex") : console.log("Gana Steve");

let nombreJugador //undefined (falso) 
!nombreJugador ? console.log("Por favor ingresa un nickname") : console.log("Bienvenido Jugador");


//Valores Falsos (falsy) y Verdaderos (Truthy)

//Comparación estricta (compara el valor y el tipo de dato)

let vidasAlex = "10"

vidasAlex === 10 ? console.log("Sube de nivel") : console.log("Pierde nivel");

//----------------------------------------------
// LOOPS (Bucles)
const misiones = ["Construir-casa", "Cavar-mina", "Derrotar-Dragon", "Explorar-Nether"]

misiones.forEach((mision)=>{console.log(mision)});

nuevasMisiones = misiones.map(mision => mision.toUpperCase())
//Map no afecta al arreglo original

console.log(misiones);
console.log(nuevasMisiones);

//--------------------USO DE FUNCIONES-------------------

//Función autoejecutada
(function () {
    console.log("Steve se teletransporta al End");
})()

//Funciones Declaradas
function obtenerAvatarSteve(){
    console.log("photo/avatar/steve.png")
}
obtenerAvatarSteve()

//Funciones Expresadas
const prepararSteveBatalla = function(){
    console.log("Steve está listo para pelear");
}
prepararSteveBatalla()

//-----------------ARGUMENTOS------------------

const validarEmailSteve = function(email, token){
    console.log(`El token ${token} ha desbloqueado los poderes de Steve`);
}

validarEmailSteve("steve@minecraft.com", "pico123")

//-----------------ARGUMENTOS OPCIONALES------------------

const validarTokenAlex = function(token="bloque"){
    console.log(`El token ${token} ha desbloqueado los poderes de Alex`);
}
validarTokenAlex()

//----------------RETORNO DE UNA FUNCIÓN------------------

function retornarNivel() {
    return function(){
        return "Regresa al nivel Nether"
    }
}
console.log(retornarNivel()());

// --------------ES6------------------
const prepararAlexBatallaEnd = () => console.log("Alex está lista para pelear");
prepararAlexBatallaEnd()

// -------------------------------------
// -----------------OBJETOS------------------

const datosCreeper = {
    name: "Creeper",
    age: 2,
    address: {
        biome: "Montañas",
        tlephone: 12345
    },
    friends: ["Zombie", "Enderman"],
    status: true
}
datosCreeper.friends.forEach(friend => console.log(friend));

// ---------------DESESTRUCTURACIÓN--------------
const {name, age, address, friends, status: estaActivo} = datosCreeper
console.log(estaActivo);

// -------------------MÉTODOS---------------------

const datosEnderman = {
    name: 'Enderman',
    age: 3,
    address: {
        biome: "The End",
        tlephone: 123456
    },
    friends: ["Creeper", "Zombie", "Dragon-Ender"],
    status: true,
    girlfriend: "Enderlady"
}

datosEnderman.photo = "enderman.png"
delete datosEnderman.girlfriend //Eliminar una clave valor
console.log(datosEnderman);

// Verifica si el objeto está con datos vacíos
console.log(Object.keys(datosEnderman).includes("") ? "Error faltan claves" : "Todas las claves están presentes")

const datosZombie = {
    name: "Zombie",
    age: 5,
    address: {
        biome: "Plains",
        tlephone: 1234
    }
}

const datosCombinados = {...datosEnderman, ...datosZombie}

console.log(datosCombinados);
