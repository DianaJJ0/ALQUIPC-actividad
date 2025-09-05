# 💻 ALQUIPC - Aplicativo de Facturación de Alquiler de Portátiles

---

## 📋 Descripción General

Este proyecto es un aplicativo web desarrollado para la empresa **ALQUIPC**, dedicada al alquiler de equipos portátiles por días. El sistema permite calcular de forma automática el valor a cancelar y simular el envío de la factura por email, sin impresión física, cumpliendo con los estándares de calidad definidos en la norma **McCall**.

---

## 🧠 Reglas de Negocio Implementadas (actualizadas)

**1. Valor base del alquiler:**
- Cada equipo cuesta **$35.000 por día**.
- El cliente debe alquilar **mínimo 2 equipos** por operación.

**2. Días iniciales y adicionales:**
- El cliente elige los días iniciales de alquiler (**mínimo 1 día**).
- Puede agregar días adicionales.
- Por cada día adicional se aplica un **descuento escalonado**:
  - **1 a 3 días adicionales:** 2% de descuento sobre esos días.
  - **4 a 7 días adicionales:** 3% de descuento sobre esos días.
  - **8 a 15 días adicionales:** 4% de descuento sobre esos días.
  - **Más de 15 días adicionales:** 5% de descuento sobre esos días.
- **Mejora aplicada:** El descuento total por días adicionales no puede superar **$200.000** por factura.

**3. Opción de alquiler:**
- **Dentro de la ciudad:** Precio normal.
- **Fuera de la ciudad:** Se incrementa **5%** sobre el total por concepto de domicilio.
- **Dentro del local:** Se descuenta **5%** sobre el total por uso interno.
  - **Mejora aplicada:** El descuento máximo por factura en esta modalidad es de **$150.000**.

**4. Identificación del cliente:**
- Al iniciar la facturación, se genera automáticamente un **ID único** para el cliente, con formato: `ALQ-2025-XXXXX`.

**5. Facturación y simulación de envío:**
- La factura NO se imprime ni guarda físicamente, en coherencia con la política de reciclaje de papel de ALQUIPC.
- El sistema muestra en pantalla y simula el envío por email de:
  - Opción de alquiler seleccionada
  - Número de equipos
  - Días iniciales y días adicionales (con descuento aplicado y tope)
  - Incrementos o descuentos según la opción (con tope)
  - **Valor total a cancelar**

**6. Validaciones estrictas:**
- Email válido.
- Cantidad mínima de equipos.
- Días iniciales y adicionales.
- Modalidad de alquiler seleccionada.

---

## 🚀 Instrucciones de Instalación y Uso

1. Descarga o clona el repositorio completo.
2. Estructura de carpetas:
   ```
   alquipc/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   └── factura.js
   └── README.md
   ```
3. Abre `index.html` en tu navegador preferido.
4. Sigue el flujo:
   - Haz clic en "Ir a Facturación".
   - Llena el formulario con los datos del cliente y alquiler.
   - Presiona "Calcular Factura" para ver el resumen detallado.
   - Presiona "Enviar Factura por Email" para simular el envío (aparece un mensaje en pantalla).

---

## 🌐 Publicación en GitHub Pages

1. Sube la carpeta completa a un repositorio público en GitHub.
2. Ve a **Settings > Pages** en tu repositorio.
3. Elige la rama `main` y la carpeta raíz `/` como fuente.
4. Guarda los cambios.
5. Accede a la URL pública que te da GitHub Pages para visualizar el aplicativo en línea.

---

## 🏅 Norma McCall aplicada en el desarrollo

- **Corrección:** Validaciones estrictas en todos los campos; cálculo exacto y validado de descuentos/incrementos con topes.
- **Fiabilidad:** Simulación robusta del proceso de facturación, evitando errores de cálculo y garantizando exactitud.
- **Eficiencia:** Código optimizado y modular en HTML, CSS y JavaScript; separación de responsabilidades y carga eficiente de recursos.

---

## 🛠 Tecnologías Utilizadas

- **HTML5:** Estructura semántica y clara.
- **CSS3:** Diseño responsivo y estético.
- **JavaScript:** Lógica de negocio, validaciones y simulación de envío.

---

## 📚 Detalles relevantes

- El aplicativo NO imprime recibos, solo muestra la factura y simula el envío.
- Los datos solo existen mientras la página está abierta; no se guardan en base de datos ni en el servidor.
- El código es limpio, autocontenible y didáctico para facilitar el aprendizaje y la evaluación.
- Se puede adaptar fácilmente para futuras mejoras o integración con otros sistemas.

---

## 👩‍🏫 Sustentación escrita

La explicación y análisis de la aplicación de la norma McCall se realiza por escrito en el cuaderno, como parte de la entrega académica.

---
