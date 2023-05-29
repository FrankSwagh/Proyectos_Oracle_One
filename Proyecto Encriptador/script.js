const texto_entrada = document.querySelector(".text_entrada");
const text_respuesta = document.querySelector(".text_respuesta");
const boton_copia = document.querySelector(".boton_copiar");
const texto_aviso = document.querySelector(".texto_salida")


function encriptarTexto() {
  const respuesta = encriptar(texto_entrada.value);
  text_respuesta.value = respuesta.join("")
  text_respuesta.style.backgroundImage = "none"
  texto_entrada.value = "";
  boton_copia.style.display = "block"
  texto_aviso.style.display ="none"
}

function encriptar(cadenaDatos) {
  let arregloDatos = Array.from(cadenaDatos);
  let cadenaFinal = [];

  arregloDatos.map(d => {
    switch (d) {
      case "a": cadenaFinal.push("ai"); break;
      case "e": cadenaFinal.push("enter"); break;
      case "i": cadenaFinal.push("imes"); break;
      case "o": cadenaFinal.push("ober"); break;
      case "u": cadenaFinal.push("ufat"); break;
      default: cadenaFinal.push(d)
    }
  })
  return cadenaFinal
}

function DesencriptarTexto() {
  const respuesta = desencriptar(texto_entrada.value);
  text_respuesta.value = respuesta
  text_respuesta.style.backgroundImage = "none"
  texto_entrada.value = "";
  boton_copia.style.display = "block"

}

function desencriptar(cadenaDatos) {
  let cadenaFinal = [];

  for (let i = 0; i < cadenaDatos.length; i++) {
    var letra = cadenaDatos[i];

    switch (letra) {
      case "a":
        if (cadenaDatos[i + 1] === "i") {
          cadenaFinal += "a";
          i++;
        } else {
          cadenaFinal += letra;
        }
        break;
      case "e":
        if (cadenaDatos.substring(i, i + 5) === "enter") {
          cadenaFinal += "e";
          i += 4;
        } else {
          cadenaFinal += letra;
        }
        break;
      case "i":
        if (cadenaDatos.substring(i, i + 4) === "imes") {
          cadenaFinal += "i";
          i += 3;
        } else {
          cadenaFinal += letra;
        }
        break;
      case "o":
        if (cadenaDatos.substring(i, i + 4) === "ober") {
          cadenaFinal += "o";
          i += 3;
        } else {
          cadenaFinal += letra;
        }
        break;
      case "u":
        if (cadenaDatos.substring(i, i + 4) === "ufat") {
          cadenaFinal += "u";
          i += 3;
        } else {
          cadenaFinal += letra;
        }
        break;
      default:
        cadenaFinal += letra;
    }
  }

  return cadenaFinal;
}

function copiarTexto() {
  text_respuesta.select();
  navigator.clipboard.writeText(text_respuesta.value);
}