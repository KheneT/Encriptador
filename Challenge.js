function encriptar() {
  let texto = document.getElementById("texto").value.split("");

  if (texto.length > 0) {
    let encriptado;

    for (let i = 0; i < texto.length; i++) {
      if (texto[i] == "e") {
        texto[i] = "enter";
      } else if (texto[i] == "i") {
        texto[i] = "imes";
      } else if (texto[i] == "a") {
        texto[i] = "ai";
      } else if (texto[i] == "o") {
        texto[i] = "ober";
      } else if (texto[i] == "u") {
        texto[i] = "ufat";
      }

      if (i == 0) {
        encriptado = texto[i];
      } else {
        encriptado += texto[i];
      }
    }

    document.getElementById("imgResultado").style.visibility = "hidden";
    document.getElementById("txtResponsive").style.visibility = "hidden";
    document.getElementById("subTexto").style.visibility = "hidden";

    document.getElementById("texto").value = "";
    document.getElementById("result").value = encriptado;
    document.getElementById("copiar").style.visibility = "visible";
  } else {
    alert("Escriba un mensaje.");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value.split("");

  if (texto.length > 0) {
    let desencriptado = null;

    for (let i = 0; i < texto.length; i++) {
      if (
        texto[i] == "e" &&
        texto[i + 1] == "n" &&
        texto[i + 2] == "t" &&
        texto[i + 3] == "e" &&
        texto[i + 4] == "r"
      ) {
        i += 4;
        texto[i] = "e";
      } else if (
        texto[i] == "i" &&
        texto[i + 1] == "m" &&
        texto[i + 2] == "e" &&
        texto[i + 3] == "s"
      ) {
        i += 3;
        texto[i] = "i";
      } else if (texto[i] == "a" && texto[i + 1] == "i") {
        i += 1;
        texto[i] = "a";
      } else if (
        texto[i] == "o" &&
        texto[i + 1] == "b" &&
        texto[i + 2] == "e" &&
        texto[i + 3] == "r"
      ) {
        i += 3;
        texto[i] = "o";
      } else if (
        texto[i] == "u" &&
        texto[i + 1] == "f" &&
        texto[i + 2] == "a" &&
        texto[i + 3] == "t"
      ) {
        i += 3;
        texto[i] = "u";
      }

      if (desencriptado == null) {
        desencriptado = texto[i];
      } else {
        desencriptado += texto[i];
      }
    }

    document.getElementById("imgResultado").style.visibility = "hidden";
    document.getElementById("txtResponsive").style.visibility = "hidden";
    document.getElementById("subTexto").style.visibility = "hidden";

    document.getElementById("texto").value = "";
    document.getElementById("result").value = desencriptado;
    document.getElementById("copiar").style.visibility = "visible";
  } else {
    alert("Escriba su mensaje");
  }
}

function copiar() {
  let texto = document.getElementById("result").value;

  let input = document.createElement("input");

  input.value = texto;

  document.body.appendChild(input);

  input.select();

  document.execCommand("copy");
  document.body.removeChild(input);
}
