function aceptaBox1(){
let varaceptaBox1 = document.getElementById('aceptaBox1');
let diaViajeBox1 = document.getElementById('diaViajeBox1');
let mesViajeBox1 = document.getElementById('mesViajeBox1');
let añoViajeBox1 = document.getElementById('añoViajeBox1');
let horaViajeBox1 = document.getElementById('horaViajeBox1');
let minutoViajeBox1 = document.getElementById('minutoViajeBox1');
let amPmViajeBox1 = document.getElementById('amPmViajeBox1');

let diaOrigenBox1 = document.getElementById('diaOrigenBox1').value;
let mesOrigenBox1 = document.getElementById('mesOrigenBox1').value;
let añoOrigenBox1 = document.getElementById('añoOrigenBox1').value;
let horaBox1 = document.getElementById('horaBox1').value;
let minBox1 = document.getElementById('minBox1').value;
let amPmBox1 = document.getElementById('amPmBox1').value;
if(diaOrigenBox1 !== "" && mesOrigenBox1 !== "" && añoOrigenBox1 !== "" && horaBox1 !== "" && minBox1 !== "" && amPmBox1 !== ""){
  alert('OK');
  diaViajeBox1.textContent = diaOrigenBox1;
  mesViajeBox1.textContent = mesOrigenBox1;
  añoViajeBox1.textContent = añoOrigenBox1;
  horaViajeBox1.textContent = horaBox1;
  minutoViajeBox1.textContent = minBox1;
  amPmViajeBox1.textContent = amPmBox1;
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

