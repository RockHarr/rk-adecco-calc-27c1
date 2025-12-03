const RESOURCES = [
    // Microlearnings
    { id: "mic-s", name: "Microlearning (HTML → SCORM 1.2)", size: "S (≤5 min / ≤8 pantallas)", unit: "cápsulas", uf: 7.00, description: "Cápsula breve enfocada en un objetivo de aprendizaje específico." },
    { id: "mic-m", name: "Microlearning (HTML → SCORM 1.2)", size: "M (6–10 min / 9–15 pantallas)", unit: "cápsulas", uf: 10.50, description: "Módulo de duración media con interactividad moderada." },
    { id: "mic-l", name: "Microlearning (HTML → SCORM 1.2)", size: "L (>10 min / >15 pantallas)", unit: "cápsulas", uf: 14.50, description: "Módulo extenso para temas complejos o detallados." },

    // Quizzes
    { id: "quiz-s", name: "Evaluación / Quiz", size: "S (≈10 ítems)", unit: "quizzes", uf: 4.50, description: "Cuestionario corto para validar conocimientos básicos." },
    { id: "quiz-m", name: "Evaluación / Quiz", size: "M (≈15 ítems)", unit: "quizzes", uf: 6.50, description: "Evaluación estándar con variedad de tipos de preguntas." },
    { id: "quiz-l", name: "Evaluación / Quiz", size: "L (≈20 ítems / bancos)", unit: "quizzes", uf: 9.00, description: "Examen completo o banco de preguntas aleatorias." },

    // PDFs
    { id: "pdf-s", name: "PDF accesible", size: "S (2–3 págs)", unit: "PDFs", uf: 3.50, description: "Documento breve, optimizado para lectura en pantalla." },
    { id: "pdf-m", name: "PDF accesible", size: "M (4–6 págs)", unit: "PDFs", uf: 5.50, description: "Guía o manual de extensión media." },
    { id: "pdf-l", name: "PDF accesible", size: "L (7–8 págs)", unit: "PDFs", uf: 8.00, description: "Documento extenso con diseño editorial completo." },

    // Landing / Micrositio
    { id: "land-s", name: "Landing / Micrositio", size: "S (1–2 secciones)", unit: "sitios", uf: 8.00, description: "Página única para promoción o información puntual." },
    { id: "land-m", name: "Landing / Micrositio", size: "M (3 secciones)", unit: "sitios", uf: 11.00, description: "Sitio pequeño con navegación básica." },
    { id: "land-l", name: "Landing / Micrositio", size: "L (≥4 secciones)", unit: "sitios", uf: 14.50, description: "Micrositio completo con múltiples secciones de contenido." },

    // SCORM
    { id: "scorm", name: "Empaquetado SCORM 1.2", size: "—", unit: "piezas HTML", uf: 3.00, description: "Integración y configuración para plataformas LMS." },

    // Subtítulos
    { id: "subs", name: "Subtítulos", size: "—", unit: "minutos", uf: 0.065, description: "Texto sincronizado para accesibilidad en videos." },

    // Locución / sincronización
    { id: "vo", name: "Sincronización de locución", size: "—", unit: "minutos", uf: 0.80, description: "Edición y montaje de audio profesional." },
];

function formatCLP(value) {
    if (!value || isNaN(value)) return "$ 0";
    return "$ " + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatUF(value) {
    if (!value || isNaN(value)) return "0,00";
    return value.toFixed(2).replace(".", ",");
}

function renderTable() {
    const tbody = document.getElementById("resources-body");
    tbody.innerHTML = "";

    RESOURCES.forEach((r) => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");

        // Tooltip container
        const container = document.createElement("div");
        container.className = "tooltip-container";

        const nameSpan = document.createElement("span");
        nameSpan.textContent = r.name;
        container.appendChild(nameSpan);

        if (r.description) {
            const trigger = document.createElement("div");
            trigger.className = "tooltip-trigger";
            trigger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

            const content = document.createElement("div");
            content.className = "tooltip-content";
            content.textContent = r.description;

            trigger.appendChild(content);
            container.appendChild(trigger);
        }

        tdName.appendChild(container);
        tr.appendChild(tdName);

        const tdSize = document.createElement("td");
        tdSize.textContent = r.size;
        tr.appendChild(tdSize);

        const tdUnit = document.createElement("td");
        tdUnit.textContent = r.unit;
        tr.appendChild(tdUnit);

        const tdUf = document.createElement("td");
        tdUf.className = "num";
        tdUf.textContent = formatUF(r.uf);
        tr.appendChild(tdUf);

        const tdQty = document.createElement("td");
        tdQty.className = "num";
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.step = "1";
        input.className = "qty-input";
        input.dataset.id = r.id;
        input.addEventListener("input", recalc);
        tdQty.appendChild(input);
        tr.appendChild(tdQty);

        const tdUfTotal = document.createElement("td");
        tdUfTotal.className = "num";
        tdUfTotal.dataset.role = "uf-total";
        tdUfTotal.dataset.id = r.id;
        tdUfTotal.textContent = "—";
        tr.appendChild(tdUfTotal);

        const tdClpNet = document.createElement("td");
        tdClpNet.className = "num";
        tdClpNet.dataset.role = "clp-net";
        tdClpNet.dataset.id = r.id;
        tdClpNet.textContent = "$ 0";
        tr.appendChild(tdClpNet);

        const tdClpIva = document.createElement("td");
        tdClpIva.className = "num";
        tdClpIva.dataset.role = "clp-iva";
        tdClpIva.dataset.id = r.id;
        tdClpIva.textContent = "$ 0";
        tr.appendChild(tdClpIva);

        tbody.appendChild(tr);
    });
}

function recalc() {
    const ufInput = document.getElementById("ufInput");
    const ufVal = parseFloat((ufInput.value || "").replace(",", "."));
    const ufValue = !isNaN(ufVal) && ufVal > 0 ? ufVal : 0;

    let totalUf = 0;
    let totalClpNet = 0;
    let totalClpIva = 0;

    RESOURCES.forEach((r) => {
        const qtyInput = document.querySelector(`input[data-id="${r.id}"]`);
        let qtyVal = parseFloat((qtyInput && qtyInput.value || "").replace(",", "."));
        if (isNaN(qtyVal) || qtyVal <= 0) qtyVal = 0;

        const ufTotal = r.uf * qtyVal;
        const clpNet = ufTotal * ufValue;
        const clpIva = clpNet * 1.19;

        totalUf += ufTotal;
        totalClpNet += clpNet;
        totalClpIva += clpIva;

        const cellUfTotal = document.querySelector(`td[data-role="uf-total"][data-id="${r.id}"]`);
        const cellClpNet = document.querySelector(`td[data-role="clp-net"][data-id="${r.id}"]`);
        const cellClpIva = document.querySelector(`td[data-role="clp-iva"][data-id="${r.id}"]`);

        if (cellUfTotal) cellUfTotal.textContent = ufTotal > 0 ? formatUF(ufTotal) : "—";
        if (cellClpNet) cellClpNet.textContent = clpNet > 0 ? formatCLP(clpNet) : "$ 0";
        if (cellClpIva) cellClpIva.textContent = clpIva > 0 ? formatCLP(clpIva) : "$ 0";
    });

    const elTotalUf = document.getElementById("totalUf");
    const elTotalClpNet = document.getElementById("totalClpNet");
    const elTotalClpIva = document.getElementById("totalClpIva");

    if (elTotalUf) elTotalUf.textContent = formatUF(totalUf);
    if (elTotalClpNet) elTotalClpNet.textContent = formatCLP(totalClpNet);
    if (elTotalClpIva) elTotalClpIva.textContent = formatCLP(totalClpIva);
}

document.addEventListener("DOMContentLoaded", () => {
    renderTable();
    const ufInput = document.getElementById("ufInput");
    if (ufInput) {
        ufInput.addEventListener("input", recalc);
    }
});
