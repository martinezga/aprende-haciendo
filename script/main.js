let funcion1 = () => console.log('hola calc');
let funcion2 = () => console.log('hola callback');
let calc = function(cb) {
  cb();
  console.log('hi')
}
console.log(funcion1)

let users = [];
function eCommerceApp() {
  let usersObjeto = Object.create(null);
  let nombreValue = document.getElementById("firstName").value;
  let apellidoValue = document.getElementById("lastName").value;
  let phoneValue = document.getElementById("userPhone").value;
  let mailValue = document.getElementById("userMail").value;
  usersObjeto.userName = nombreValue;
  usersObjeto.userApellido = apellidoValue;
  usersObjeto.userPhone = phoneValue;
  usersObjeto.userMail = mailValue;
  users.push(usersObjeto);
  console.log(users)
}
function mostrarUsers() {
  let x = document.getElementById("showUsers");
  x.outerText = JSON.stringify(users);
}
function IngresarProducto() {
  let
}
function ingresarNum() {
  const numArray = [];
  while(1) {
    const ingresar = prompt('Ingrese un número o "stop" para salir.');
    if(/stop/i.test(ingresar)) break;
    else if(isNaN(ingresar) || ingresar.trim() === '') {
      alert('Ingrese un número o "stop"');
    } else {
      numArray.push(parseInt(ingresar))
    };
  };
  alert('Los datos ingresados fueron: \n[' + numArray + '] \n Adios!');
};
function numRandom(max, min) {
  let aleatorio = Math.floor((Math.random() * max) + min);
  return aleatorio
}
function botonNumAleatorio() {
  let doClick;
  doClick = alert(numRandom(100,1));
}
function lanzarDado() {
  let doClick;
  do {
    doClick = prompt('Introduzca "lanzar" para tirar el dado tantas veces como lo desee o "quit" para salir');
    if (doClick === 'lanzar') {
      alert(numRandom(6,1));
    } else if (doClick === 'quit') {
      alert('Adios');
    } else {
      alert('Introduzca lanzar o quit');
    }
  } while(doClick !== 'quit');
}