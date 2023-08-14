const diaViajeBox1 = document.getElementById('diaViajeBox1');
const mesViajeBox1 = document.getElementById('mesViajeBox1');
const añoViajeBox1 = document.getElementById('añoViajeBox1');
const horaViajeBox1 = document.getElementById('horaViajeBox1');
const minutoViajeBox1 = document.getElementById('minutoViajeBox1');
const amPmViajeBox1 = document.getElementById('amPmViajeBox1');
const expressPriceBox1 = document.getElementById('expressPriceBox1');
const calleOrigenBox1 = document.getElementById('calleOrigenBox1');
const calleDestinoBox1 = document.getElementById('calleDestinoBox1');

const diaViajeBox2 = document.getElementById('diaViajeBox2');
const mesViajeBox2 = document.getElementById('mesViajeBox2');
const añoViajeBox2 = document.getElementById('añoViajeBox2');
const horaViajeBox2 = document.getElementById('horaViajeBox2');
const minutoViajeBox2 = document.getElementById('minutoViajeBox2');
const amPmViajeBox2 = document.getElementById('amPmViajeBox2');
const expressPriceBox2 = document.getElementById('expressPriceBox2');
const calleOrigenBox2 = document.getElementById('calleOrigenBox2');
const calleDestinoBox2 = document.getElementById('calleDestinoBox2');

function aceptaBox1(){
let diaOrigenBox1 = document.getElementById('diaOrigenBox1').value;
let mesOrigenBox1 = document.getElementById('mesOrigenBox1').value;
let añoOrigenBox1 = document.getElementById('añoOrigenBox1').value;
let horaBox1 = document.getElementById('horaBox1').value;
let minBox1 = document.getElementById('minBox1').value;
let amPmBox1 = document.getElementById('amPmBox1').value;
let priceBox1 = document.getElementById('priceBox1').value;
let dirOrigenBox1 = document.getElementById('dirOrigenBox1').value;
let dirDestinoBox1 = document.getElementById('dirDestinoBox1').value;

if(diaOrigenBox1 !== "" && mesOrigenBox1 !== "" && añoOrigenBox1 !== "" && horaBox1 !== "" 
    && minBox1 !== "" && amPmBox1 !== "" && priceBox1 !== "" && dirOrigenBox1 !== "" && dirDestinoBox1 !== ""){
  expressPriceBox1.textContent = priceBox1;
  diaViajeBox1.textContent = diaOrigenBox1;
  mesViajeBox1.textContent = mesOrigenBox1;
  añoViajeBox1.textContent = añoOrigenBox1;
  horaViajeBox1.textContent = horaBox1;
  minutoViajeBox1.textContent = minBox1;
  amPmViajeBox1.textContent = amPmBox1;
  calleOrigenBox1.textContent = dirOrigenBox1;
  calleDestinoBox1.textContent = dirDestinoBox1;
  alert('Parámentros de Caja 2: OK');
}else{
  alert('¡Faltan campos!');
}




}

function aceptaBox2(){
  let diaOrigenBox2 = document.getElementById('diaOrigenBox2').value;
  let mesOrigenBox2 = document.getElementById('mesOrigenBox2').value;
  let añoOrigenBox2 = document.getElementById('añoOrigenBox2').value;
  let horaBox2 = document.getElementById('horaBox2').value;
  let minBox2 = document.getElementById('minBox2').value;
  let amPmBox2 = document.getElementById('amPmBox2').value;
  let priceBox2 = document.getElementById('priceBox2').value;
  let dirOrigenBox2 = document.getElementById('dirOrigenBox2').value;
  let dirDestinoBox2 = document.getElementById('dirDestinoBox2').value;
  if(diaOrigenBox2 !== "" && mesOrigenBox2 !== "" && añoOrigenBox2 !== "" && horaBox2 !== "" 
      && minBox2 !== "" && amPmBox2 !== "" && priceBox2 !== "" && dirOrigenBox2 !== "" && dirDestinoBox2 !== ""){
    expressPriceBox2.textContent = priceBox2;
    diaViajeBox2.textContent = diaOrigenBox2;
    mesViajeBox2.textContent = mesOrigenBox2;
    añoViajeBox2.textContent = añoOrigenBox2;
    horaViajeBox2.textContent = horaBox2;
    minutoViajeBox2.textContent = minBox2;
    amPmViajeBox2.textContent = amPmBox2;
    calleOrigenBox2.textContent = dirOrigenBox2;
    calleDestinoBox2.textContent = dirDestinoBox2;
    alert('Parámentros de Caja 1: OK');
  }else{
    alert('¡Faltan campos!');
  }
  
  
  
  
  }

function cargarReloj() {
  // Haciendo uso del objeto Date() obtenemos la hora, minuto y segundo
  var fechahora = new Date();
  var hora = fechahora.getHours();
  var minuto = fechahora.getMinutes();
  // Variable meridiano con el valor 'AM'
  var meridiano = "am";
  // Si la hora es igual a 0, declaramos la hora con el valor 12
  if (hora == 0) {
    hora = 12;
  }
  // Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM'
  if (hora > 12) {
    hora = hora - 12;
    // Variable meridiano con el valor 'PM'
    meridiano = "pm";
  }
  // Formateamos los ceros '0' del reloj
  hora = hora < 10 ? "0" + hora : hora;
  minuto = minuto < 10 ? "0" + minuto : minuto;
  // Enviamos la hora a la vista HTML
  var tiempo = hora + ":" + minuto + " " + meridiano;
  document.getElementById("statusHora").innerText = tiempo;
  document.getElementById("statusHora").textContent = tiempo;
  // Cargamos el reloj a los 500 milisegundos
  setTimeout(cargarReloj, 500);
}
// Ejecutamos la función 'CargarReloj'
cargarReloj();

//FUNCIONES DEL DOM

function nivelBateria() {
  let porcentajeBateria = document.getElementById("porcentajeBateria").value;
  let batteryLevel = document.getElementById("batteryLevel");
  const batteryPic = document.getElementById('batteryPic');
  if (porcentajeBateria <=9){
    batteryLevel.textContent = porcentajeBateria;
    batteryPic.src = "./assets/img/0.png";
  }else if(porcentajeBateria <=19){
    batteryLevel.textContent = porcentajeBateria;
    batteryPic.src = "./assets/img/20.png";
  }else if (porcentajeBateria <=39){
    batteryLevel.textContent = porcentajeBateria;
    batteryPic.src = "./assets/img/40.png";
  }else if (porcentajeBateria <=59){
    batteryLevel.textContent = porcentajeBateria;
    batteryPic.src = "./assets/img/60.png";
  }else if(porcentajeBateria <=79){
    batteryLevel.textContent = porcentajeBateria;
    batteryPic.src = "./assets/img/80.png";
  }else if(porcentajeBateria <=100){
    batteryLevel.textContent = porcentajeBateria;
    batteryPic.src = "./assets/img/100.png";
  }
}

function nivelCelular(){
    let porcentajeCelular = document.getElementById("porcentajeCelular").value;
    const signalPic = document.getElementById('signalPic');
    if (porcentajeCelular <=4){
        signalPic.src = "./assets/img/0s.png";
      }else if(porcentajeCelular <=19){
        signalPic.src = "./assets/img/20s.png";
      }else if (porcentajeCelular <=39){
        signalPic.src = "./assets/img/40s.png";
      }else if (porcentajeCelular <=59){
        signalPic.src = "./assets/img/60s.png";
      }else if(porcentajeCelular <=79){
        signalPic.src = "./assets/img/80s.png";
      }else if(porcentajeCelular <=100){
        signalPic.src = "./assets/img/100s.png";
      }
    }

function whatsapp(){
    let whatsapp = document.getElementById('whatsapp').checked;
    const whatsappPic = document.getElementById('whatsappPic');
    if(whatsapp === true){
        whatsappPic.style.display = "inherit"
    }else{
        whatsappPic.style.display = "none"
    }
}

function gmail(){
    let gmail = document.getElementById('gmail').checked;
    const mailPic = document.getElementById('gmailPic');
    if(gmail === true){
        mailPic.style.display = "inherit"
    }else{
        mailPic.style.display = "none"
    }
}

function alarma(){
    let alarma = document.getElementById('alarma').checked;
    const alarmaPic = document.getElementById('alarmaPic');
    if(alarma === true){
        alarmaPic.style.display = "inherit"
    }else{
        alarmaPic.style.display = "none"
    }
}

function didi(){
    let didi = document.getElementById('didi').checked;
    const didiPic = document.getElementById('didiPic');
    if(didi === true){
        didiPic.style.display = "inherit"
    }else{
        didiPic.style.display = "none"
    }
}

function tweeter(){
  let tweeter = document.getElementById('tweeter').checked;
  const didiPic = document.getElementById('tweeterPic');
  if(tweeter === true){
    tweeterPic.style.display = "inherit"
  }else{
    tweeterPic.style.display = "none"
  }
}

function facebook(){
  let facebook = document.getElementById('facebook').checked;
  const facebookPic = document.getElementById('facebookPic');
  if(facebook === true){
    facebookPic.style.display = "inherit"
  }else{
    facebookPic.style.display = "none"
  }
}

