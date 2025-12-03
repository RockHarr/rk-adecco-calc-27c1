<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Cotizador RockCode · Adecco</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <style>
    :root {
      --bg: #020617;
      --card-bg: #0b1120;
      --card-inner: #020617;
      --accent: #22d3ee;
      --accent-soft: rgba(34, 211, 238, 0.12);
      --accent-2: #14b8a6;
      --text-main: #e5e7eb;
      --text-sub: #9ca3af;
      --border: #1f2937;
      --border-soft: rgba(148, 163, 184, 0.35);
      --danger: #f97373;
      --font-sans: "Outfit", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      --radius-lg: 18px;
      --radius-pill: 999px;
      --shadow: 0 22px 50px rgba(15, 23, 42, 0.65);
    }

    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    body {
      font-family: var(--font-sans);
      background:
        radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 55%),
        radial-gradient(circle at bottom right, rgba(20, 184, 166, 0.22), transparent 55%),
        var(--bg);
      color: var(--text-main);
      -webkit-font-smoothing: antialiased;
    }

    .page {
      min-height: 100vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 32px 16px;
    }

    .card {
      width: 100%;
      max-width: 1120px;
      background: radial-gradient(circle at top left, rgba(34, 211, 238, 0.24), transparent 55%),
                  radial-gradient(circle at bottom right, rgba(20, 184, 166, 0.12), transparent 55%),
                  var(--card-bg);
      border-radius: 24px;
      border: 1px solid var(--border-soft);
      box-shadow: var(--shadow);
      padding: 24px 24px 28px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      margin-bottom: 1.25rem;
      border-bottom: 1px solid rgba(75, 85, 99, 0.7);
      padding-bottom: 1rem;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }

    .brand-logo {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: conic-gradient(from 210deg, var(--accent), var(--accent-2), #6366f1, var(--accent));
      display: flex;
      align-items: center;
      justify-content: center;
      color: #020617;
      font-weight: 700;
      font-size: 1.2rem;
      box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.85);
    }

    .brand-text-title {
      font-size: 1rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #f9fafb;
      font-weight: 500;
    }

    .brand-text-sub {
      font-size: 0.8rem;
      color: var(--text-sub);
    }

    .meta {
      text-align: right;
      font-size: 0.78rem;
      color: var(--text-sub);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 0.2rem 0.7rem;
      border-radius: var(--radius-pill);
      border: 1px solid rgba(148, 163, 184, 0.7);
      font-size: 0.68rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--text-main);
      margin-bottom: 0.25rem;
      background: rgba(15, 23, 42, 0.85);
    }

    .title-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 1.25rem;
      margin-bottom: 1rem;
    }

    .title-left {
      max-width: 60%;
    }

    .eyebrow {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--accent);
      margin-bottom: 0.3rem;
    }

    .title-main {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: -0.03em;
      margin: 0 0 0.2rem;
    }

    .title-sub {
      font-size: 0.88rem;
      color: var(--text-sub);
      margin: 0;
    }

    .uf-box {
      border-radius: var(--radius-lg);
      background: rgba(15, 23, 42, 0.96);
      border: 1px solid var(--border-soft);
      padding: 0.75rem 0.9rem;
      min-width: 220px;
    }

    .uf-label {
      font-size: 0.75rem;
      color: var(--text-sub);
      margin-bottom: 0.25rem;
    }

    .uf-input-row {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .uf-input-row span {
      font-size: 0.95rem;
    }

    input[type="number"],
    input[type="text"] {
      font-family: inherit;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.8);
      background: #020617;
      color: #f9fafb;
      padding: 0.3rem 0.75rem;
      font-size: 0.9rem;
      outline: none;
      min-width: 80px;
    }

    input[type="number"]:focus,
    input[type="text"]:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px rgba(34, 211, 238, 0.4);
    }

    .uf-hint {
      font-size: 0.72rem;
      color: var(--text-sub);
      margin-top: 0.25rem;
    }

    .table-wrapper {
      margin-top: 0.5rem;
      border-radius: 16px;
      border: 1px solid rgba(55, 65, 81, 0.8);
      overflow: hidden;
      background: linear-gradient(to bottom, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.96));
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.8rem;
    }

    thead {
      background: radial-gradient(circle at top left, rgba(34, 211, 238, 0.24), transparent 60%),
                  #020617;
    }

    th, td {
      padding: 0.45rem 0.6rem;
      border-bottom: 1px solid rgba(31, 41, 55, 0.9);
    }

    th {
      text-align: left;
      font-weight: 500;
      color: #e5e7eb;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      white-space: nowrap;
    }

    tbody tr:nth-child(even) {
      background: rgba(15, 23, 42, 0.7);
    }

    tbody tr:nth-child(odd) {
      background: rgba(15, 23, 42, 0.9);
    }

    td {
      color: #d1d5db;
      vertical-align: middle;
    }

    td.num {
      text-align: right;
      font-variant-numeric: tabular-nums;
    }

    td small {
      color: var(--text-sub);
      font-size: 0.72rem;
    }

    .qty-input {
      width: 72px;
      text-align: right;
    }

    .totals-row {
      margin-top: 0.75rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      padding: 0.5rem 0.25rem;
    }

    .totals-main {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      font-size: 0.8rem;
    }

    .chip {
      border-radius: var(--radius-pill);
      border: 1px solid rgba(148, 163, 184, 0.8);
      padding: 0.25rem 0.6rem;
      background: rgba(15, 23, 42, 0.95);
      display: inline-flex;
      align-items: baseline;
      gap: 0.25rem;
    }

    .chip-label {
      color: var(--text-sub);
    }

    .chip-value {
      font-weight: 500;
      color: #f9fafb;
      font-variant-numeric: tabular-nums;
    }

    .totals-note {
      font-size: 0.72rem;
      color: var(--text-sub);
      text-align: right;
    }

    .footnote {
      margin-top: 0.85rem;
      font-size: 0.72rem;
      color: var(--text-sub);
      line-height: 1.5;
    }

    @media (max-width: 900px) {
      .card {
        padding: 18px;
      }
      .header {
        flex-direction: column;
        align-items: flex-start;
      }
      .meta {
        text-align: left;
      }
      .title-row {
        flex-direction: column;
        align-items: flex-start;
      }
      .title-left {
        max-width: 100%;
      }
      table {
        font-size: 0.75rem;
      }
      th, td {
        padding: 0.35rem 0.4rem;
      }
      .qty-input {
        width: 64px;
      }
      .totals-row {
        flex-direction: column;
        align-items: flex-start;
      }
      .totals-note {
        text-align: left;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="card">
      <header class="header">
        <div class="brand">
          <div class="brand-logo">R</div>
          <div>
            <div class="brand-text-title">RockCode</div>
            <div class="brand-text-sub">Cotizador modular · Recursos e-learning (Adecco)</div>
          </div>
        </div>
        <div class="meta">
          <div class="badge">Uso interno / Pri</div>
          <div>Versión: v0.1 (cotizador modular)</div>
          <div>Autor: Rockwell Harrison &amp; Spark</div>
        </div>
      </header>

      <div class="title-row">
        <div class="title-left">
          <div class="eyebrow">Tarifario por recursos</div>
          <h1 class="title-main">Arma tu curso sumando componentes.</h1>
          <p class="title-sub">
            Ingresa el valor de la UF y las cantidades de cada recurso (cápsulas, PDFs, minutos, etc.).
            El cotizador calcula automáticamente los totales en UF, CLP neto y CLP con IVA.
          </p>
        </div>
        <div class="uf-box">
          <div class="uf-label">Valor de referencia · UF en CLP</div>
          <div class="uf-input-row">
            <span>$</span>
            <input id="ufInput" type="number" min="0" step="100" placeholder="ej: 36500" />
          </div>
          <div class="uf-hint">
            Este valor solo se utiliza como referencia. El monto final se ajusta a la UF vigente al momento
            de la OC/aceptación.
          </div>
        </div>
      </div>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Recurso</th>
              <th>Tamaño</th>
              <th>Unidad</th>
              <th class="num">UF sin IVA</th>
              <th class="num">Cantidad</th>
              <th class="num">UF total</th>
              <th class="num">CLP neto</th>
              <th class="num">CLP c/ IVA</th>
            </tr>
          </thead>
          <tbody id="resources-body">
            <!-- Se rellena por JS -->
          </tbody>
        </table>
      </div>

      <div class="totals-row">
        <div class="totals-main">
          <div class="chip">
            <span class="chip-label">Total UF:</span>
            <span id="totalUf" class="chip-value">0,00</span>
          </div>
          <div class="chip">
            <span class="chip-label">Total CLP neto:</span>
            <span id="totalClpNet" class="chip-value">$ 0</span>
          </div>
          <div class="chip">
            <span class="chip-label">Total CLP c/ IVA:</span>
            <span id="totalClpIva" class="chip-value">$ 0</span>
          </div>
        </div>
        <div class="totals-note">
          Usa este total como referencia para cada curso/app.<br />
          RockCode valida y ajusta la propuesta final según alcance real.
        </div>
      </div>

      <div class="footnote">
        Nota: valores base en UF según matriz RockCode S/M/L. El uso está pensado como herramienta de
        estimación rápida para Pri. La propuesta formal se emite siempre desde RockCode.
      </div>
    </div>
  </div>

  <script>
    const RESOURCES = [
      // Microlearnings
      { id: "mic-s", name: "Microlearning (HTML → SCORM 1.2)", size: "S (≤5 min / ≤8 pantallas)", unit: "cápsulas", uf: 7.00 },
      { id: "mic-m", name: "Microlearning (HTML → SCORM 1.2)", size: "M (6–10 min / 9–15 pantallas)", unit: "cápsulas", uf: 10.50 },
      { id: "mic-l", name: "Microlearning (HTML → SCORM 1.2)", size: "L (>10 min / >15 pantallas)", unit: "cápsulas", uf: 14.50 },

      // Quizzes
      { id: "quiz-s", name: "Evaluación / Quiz", size: "S (≈10 ítems)", unit: "quizzes", uf: 4.50 },
      { id: "quiz-m", name: "Evaluación / Quiz", size: "M (≈15 ítems)", unit: "quizzes", uf: 6.50 },
      { id: "quiz-l", name: "Evaluación / Quiz", size: "L (≈20 ítems / bancos)", unit: "quizzes", uf: 9.00 },

      // PDFs
      { id: "pdf-s", name: "PDF accesible", size: "S (2–3 págs)", unit: "PDFs", uf: 3.50 },
      { id: "pdf-m", name: "PDF accesible", size: "M (4–6 págs)", unit: "PDFs", uf: 5.50 },
      { id: "pdf-l", name: "PDF accesible", size: "L (7–8 págs)", unit: "PDFs", uf: 8.00 },

      // Landing / Micrositio
      { id: "land-s", name: "Landing / Micrositio", size: "S (1–2 secciones)", unit: "sitios", uf: 8.00 },
      { id: "land-m", name: "Landing / Micrositio", size: "M (3 secciones)", unit: "sitios", uf: 11.00 },
      { id: "land-l", name: "Landing / Micrositio", size: "L (≥4 secciones)", unit: "sitios", uf: 14.50 },

      // SCORM
      { id: "scorm", name: "Empaquetado SCORM 1.2", size: "—", unit: "piezas HTML", uf: 3.00 },

      // Subtítulos
      { id: "subs", name: "Subtítulos", size: "—", unit: "minutos", uf: 0.065 },

      // Locución / sincronización
      { id: "vo", name: "Sincronización de locución", size: "—", unit: "minutos", uf: 0.80 },
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
        tdName.textContent = r.name;
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

        cellUfTotal.textContent = ufTotal > 0 ? formatUF(ufTotal) : "—";
        cellClpNet.textContent = clpNet > 0 ? formatCLP(clpNet) : "$ 0";
        cellClpIva.textContent = clpIva > 0 ? formatCLP(clpIva) : "$ 0";
      });

      document.getElementById("totalUf").textContent = formatUF(totalUf);
      document.getElementById("totalClpNet").textContent = formatCLP(totalClpNet);
      document.getElementById("totalClpIva").textContent = formatCLP(totalClpIva);
    }

    document.addEventListener("DOMContentLoaded", () => {
      renderTable();
      document.getElementById("ufInput").addEventListener("input", recalc);
    });
  </script>
</body>
</html>
