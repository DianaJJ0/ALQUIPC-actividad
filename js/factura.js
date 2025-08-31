// ALQUIPC - Facturación y simulación de envío de email

// Mostrar formulario y generar ID cliente
document.getElementById("irFacturacion").onclick = () => {
  document.querySelector(".hero").classList.add("hidden");
  document.getElementById("facturacionSection").classList.remove("hidden");
  document.getElementById("clienteId").value = generarIdCliente();
};

// Genera un ID único para el cliente
function generarIdCliente() {
  const random = Math.floor(10000 + Math.random() * 90000);
  return `ALQ-2025-${random}`;
}

// Al enviar el formulario, calcula y muestra el resumen de la factura
document.getElementById("facturaForm").onsubmit = function (event) {
  event.preventDefault();

  // Captura y validación de datos
  const email = document.getElementById("email").value.trim();
  const numEquipos = parseInt(document.getElementById("numEquipos").value);
  const diasIniciales = parseInt(
    document.getElementById("diasIniciales").value
  );
  const diasAdicionales = parseInt(
    document.getElementById("diasAdicionales").value
  );
  const tipoAlquiler = document.getElementById("tipoAlquiler").value;

  if (!email || !email.includes("@")) {
    alert("Email no válido.");
    return;
  }
  if (isNaN(numEquipos) || numEquipos < 2) {
    alert("Debes alquilar mínimo 2 equipos.");
    return;
  }
  if (isNaN(diasIniciales) || diasIniciales < 1) {
    alert("Debes ingresar mínimo 1 día inicial de alquiler.");
    return;
  }
  if (isNaN(diasAdicionales) || diasAdicionales < 0) {
    alert("Los días adicionales no pueden ser negativos.");
    return;
  }
  if (!["ciudad", "fuera", "local"].includes(tipoAlquiler)) {
    alert("Selecciona una opción de alquiler.");
    return;
  }

  // Cálculo de valores
  const precioPorDia = 35000;
  let valorBase = precioPorDia * numEquipos * diasIniciales;
  let valorAdicional = precioPorDia * numEquipos * diasAdicionales;

  // Descuento por días adicionales según rango
  let descuentoAdicional = 0;
  if (diasAdicionales >= 1 && diasAdicionales <= 3) descuentoAdicional = 0.02;
  else if (diasAdicionales >= 4 && diasAdicionales <= 7)
    descuentoAdicional = 0.03;
  else if (diasAdicionales >= 8 && diasAdicionales <= 15)
    descuentoAdicional = 0.04;
  else if (diasAdicionales > 15) descuentoAdicional = 0.05;

  const descAdicionalValor = valorAdicional * descuentoAdicional;
  valorAdicional -= descAdicionalValor;

  let incremento = 0,
    descuento = 0,
    tipo = "";
  if (tipoAlquiler === "ciudad") {
    tipo = "Dentro de la ciudad (precio normal)";
  } else if (tipoAlquiler === "fuera") {
    incremento = (valorBase + valorAdicional) * 0.05;
    tipo = "Fuera de la ciudad (+5% domicilio)";
  } else if (tipoAlquiler === "local") {
    descuento = (valorBase + valorAdicional) * 0.05;
    tipo = "Dentro del local (-5% descuento)";
  }

  const total = valorBase + valorAdicional + incremento - descuento;

  // Mostrar resumen en pantalla
  mostrarFactura({
    email,
    numEquipos,
    diasIniciales,
    diasAdicionales,
    tipo,
    incremento,
    descuento,
    descAdicionalValor,
    total,
  });
};

// Muestra el resumen de la factura en el elemento correspondiente
function mostrarFactura(data) {
  const resumen = `
    <b>Email:</b> ${data.email}<br>
    <b>Número de equipos:</b> ${data.numEquipos}<br>
    <b>Días iniciales:</b> ${data.diasIniciales}<br>
    <b>Días adicionales:</b> ${data.diasAdicionales}
      ${
        data.descAdicionalValor > 0
          ? `(Descuento aplicado: $${data.descAdicionalValor.toFixed(0)})`
          : ""
      }<br>
    <b>Tipo de alquiler:</b> ${data.tipo}<br>
    ${
      data.incremento > 0
        ? `<b>Incremento por domicilio:</b> $${data.incremento.toFixed(0)}<br>`
        : ""
    }
    ${
      data.descuento > 0
        ? `<b>Descuento por uso en local:</b> $${data.descuento.toFixed(0)}<br>`
        : ""
    }
    <b>Total a cancelar:</b> <span style="color:green;font-weight:bold;">$${data.total.toFixed(
      0
    )}</span><br>
  `;
  document.getElementById("resumenDatos").innerHTML = resumen;
  document.getElementById("resultadoFactura").classList.remove("hidden");
  document.getElementById("mensajeEnviado").textContent = "";
}

// Simulación de envío de factura por email: muestra mensaje en pantalla
document.getElementById("enviarEmail").onclick = function () {
  document.getElementById("mensajeEnviado").textContent =
    "Factura enviada al email correctamente.";
};
