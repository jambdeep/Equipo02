//adopta

function nombre() {
	var nombre01;
	nombre01 = String(prompt("Ingresa tu nombre completo"));
	alert("Nombre valido");
}
function direccion() {
	var nombre01;
	nombre01 = String(prompt("Ingresa tu dirección"));
	alert("Direccion valida");
}
function lomito() {
	var nombre01;
	nombre01 = String(prompt("Ingresa el nombre del lomito"));
	alert("Nombre valido");
}
function correo() {
	var nombre01;
	nombre01 = String(prompt("Ingresa tu correo electrónico"));
	alert("Correo eletrónico valido");
}
function diamesaño() {
	var nombre01;
	nombre01 = String(prompt("Ingresa tu fecha de cita (DD/MM/AAAA)"));
	alert("Fecha correcta");
}

function nofunciona_foto () {
	alert("Por el momento no funciona");
}

//Selecciona a tu amigo



function adopta_perrito() {
	var confirmar, numeroperrito;
	numeroperrito= Number (prompt("Ingresar el número 1 para confirmar y 2 para cancelar",));
	switch (numeroperrito) {
	case 1:
		confirmar= Number(prompt("Para terminar de confirmar escribe 1",));
		switch (confirmar) {
		case 1:
			alert("confirmado",);
			break;
		default:
			alert("cancelado. Intente nuevamente",);
		}
		break;
	case 2:
		alert("Cancelado",);
		break;
	default:
		alert("Error",);
	}
}





//deja tus datos

function nombre2() {
	var nombre01;
	nombre01 = String(prompt("Ingresa tu nombre completo"));
	alert("Nombre valido");
}

function direccion2() {
	var nombre01;
	nombre01 = String(prompt("Ingresa tu dirección"));
	alert("Direccion valida");
}

function correo2() {
	var nombre01;
	nombre01 = String(prompt("Ingresa tu correo"));
	alert("Direccion valida");
}

function diamesaño2() {
	var nombre01;
	nombre01 = String(prompt("Ingresa cuándo quieres llevarte al lomito (DD/MM/AAAA)"));
	alert("Fecha correcta");
}

function diamesaño3() {
	var nombre01;
	nombre01 = String(prompt("Ingresa cuándo regresas al lomito (DD/MM/AAAA)"));
	alert("Fecha correcta");
}

//donación

function nombre_titular() {
	var nombre01;
	nombre01 = String(prompt("Ingresa Nombre del titular"));
	alert("Fecha correcta");
}

function diamesaño4() {
	var nombre01;
	nombre01 = String(prompt("Ingresa fecha de expiración (DD/MM/AAAA)"));
	alert("Fecha correcta");
}

function nombre_tarjeta () {
	var nombre01;
	nombre01 = String(prompt("Ingresa fecha de expiración (DD/MM/AAAA)"));
	alert("Fecha correcta");
}

function monto_donar () {
	var nombre01;
	nombre01 = Number(prompt("Ingresa el monto a donar"));
	alert("Monto correcto");
}

function numero_tarjeta () {
	var nombre01;
	nombre01 = Number(prompt("Ingresa el número de tarjeta"));
	alert("Número correcto");
}

function codigo_seguridad () {
	var nombre01;
	nombre01 = Number(prompt("Ingresa el código de seguridad (3 dígitos)"));
	alert("Número correcto");
}