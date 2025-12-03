# Cotizador Adecco · RockCode

Mini proyecto HTML/CSS/JS para que Pri (Adecco) pueda **armar cursos y apps e-learning
sumando recursos por “pedacitos”** y estimar el costo total en UF y CLP, usando el
tarifario modular de RockCode.

Este cotizador **no reemplaza** las propuestas formales: es una herramienta interna
de apoyo para que Pri pueda jugar con combinaciones de recursos y luego RockCode
valide / ajuste la cotización final.

---

## 1. Estructura del proyecto

```text
cotizador-adecco-rockcode/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  └─ js/
│     └─ app.js
└─ README.md
2. Cómo funciona

Pri abre index.html en el navegador.

Ingresa el valor de la UF en CLP en el campo superior derecho.

Para cada recurso, ingresa la cantidad:

Microlearnings S/M/L

Quizzes S/M/L

PDFs accesibles S/M/L

Landings / micrositios S/M/L

Empaquetado SCORM 1.2

Subtítulos (minutos)

Sincronización de locución (minutos)

El cotizador muestra automáticamente:

UF totales por recurso.

CLP neto y CLP con IVA por recurso.

Totales generales (UF, CLP neto, CLP con IVA) en la sección inferior.

Cada recurso tiene un icono ⓘ con un tooltip que explica el uso típico y los rangos
(S, M, L), para mantener la coherencia con la matriz S/M/L RockCode.

3. Ajustar precios y categorías

Todos los valores están definidos en assets/js/app.js en el arreglo RESOURCES:

const RESOURCES = [
  {
    id: "pdf-m",
    name: "PDF accesible",
    size: "M (4–6 págs)",
    unit: "PDFs",
    uf: 5.5,
    hint: "Guía estándar de apoyo: 4–6 páginas."
  },
  // ...
];


uf: valor unitario en UF sin IVA.

size: etiqueta visible (incluye rangos S/M/L).

hint: texto del tooltip UX (se muestra al pasar el mouse por ⓘ).

Para actualizar precios, solo hay que editar las UF en RESOURCES.

4. Uso local

No necesita servidor. Basta con:

Clonar el repositorio o copiar la carpeta.

Abrir index.html en un navegador moderno (Chrome, Firefox, Edge).

Listo.

5. Despliegue / publicación

El proyecto es 100% estático, así que se puede hospedar en:

GitHub Pages

Netlify / Vercel

Cualquier hosting tradicional (Apache / Nginx)

5.1. Opción recomendada para uso privado con Pri

Subir la carpeta al hosting de RockCode (por ejemplo, cdmon) en una ruta tipo:

https://tudominio.cl/tools/adecco-cotizador/

Proteger la carpeta con usuario y contraseña (HTTP Basic Auth):

Configurar .htaccess y .htpasswd en el servidor.

Compartir usuario/clave solo con Pri.

De esta forma, el cotizador queda:

Versionado como código (en GitHub).

Publicado de forma privada para Pri (solo sus ojos).

5.2. Opción rápida (menos segura)

Publicar en GitHub Pages o similar con una URL poco obvia y compartir el link solo con Pri.
Esta opción no ofrece protección real, solo baja probabilidad de descubrimiento.

6. Alcances y disclaimers

El cotizador está pensado como referencia de estimación, no como documento contractual.

Las propuestas económicas formales se emitirán siempre desde RockCode SpA, usando:

el tarifario como base,

el alcance real del curso/app,

y las políticas de descuento o ajuste que se acuerden con el cliente.

7. Próximos pasos posibles

Añadir un botón “Exportar resumen” (copiar totales al portapapeles o descargar JSON).

Guardar el estado en localStorage para que Pri no pierda sus cantidades al recargar.

Crear una versión “curso tipo” donde se puedan guardar combinaciones frecuentes
(por ejemplo, “Curso piloto M”, “Curso recertificación S”, etc.).

Hecho con ❤️ por RockCode (Rockwell Harrison + Spark).
