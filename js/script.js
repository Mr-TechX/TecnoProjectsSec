document.getElementById("copyright-year").textContent = new Date().getFullYear();
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ],
  );
const technical = [
  [
    "Pentesting Web",
    "Evaluación exhaustiva de seguridad en aplicaciones web mediante pruebas de penetración.",
    ["Black Box", "Gray Box", "White Box"],
    [
      "Informe técnico detallado",
      "Resumen ejecutivo",
      "Sesión de entrega",
      "Plan de remediación priorizado",
    ],
  ],
  [
    "Análisis de Código Estático (SAST)",
    "Revisión completa del código fuente para detectar vulnerabilidades antes de la producción.",
    ["Remoto"],
    [
      "Revisión completa del código fuente",
      "Detección de vulnerabilidades de lógica",
      "Análisis de uso inseguro de librerías",
      "Requiere acceso al repositorio (read-only)",
    ],
  ],
  [
    "Análisis de Código Dinámico (DAST)",
    "Evaluación del comportamiento de aplicaciones en ejecución en entornos reales.",
    ["Remoto"],
    [
      "Evaluación del comportamiento en ejecución",
      "Análisis de entornos staging o producción",
      "No requiere acceso al código fuente",
      "Detección de vulnerabilidades en tiempo real",
    ],
  ],
  [
    "Revisión de Configuración y Hardening",
    "Análisis y fortalecimiento de configuraciones de seguridad en servidores y aplicaciones.",
    ["Remoto"],
    [
      "Headers HTTP de seguridad",
      "Políticas de seguridad del navegador",
      "Configuración de cookies seguras",
      "Certificados SSL/TLS",
      "Configuración CORS",
      "Content Security Policy (CSP)",
    ],
  ],
  [
    "Inteligencia y Reconocimiento (OSINT)",
    "Búsqueda y análisis de información expuesta públicamente sobre tu organización.",
    ["Remoto"],
    [
      "Búsqueda de información sensible expuesta",
      "Análisis de la superficie de ataque",
      "Investigación de empleados y estructura organizacional",
      "Detección de data leaks relacionados",
      "Mapeo de infraestructura pública",
    ],
  ],
  [
    "Threat Modelling",
    "Identificación y análisis sistemático de amenazas potenciales para tus aplicaciones.",
    ["Remoto"],
    [
      "Análisis de arquitectura de aplicaciones",
      "Identificación de activos críticos",
      "Modelado de amenazas STRIDE/DREAD",
      "Priorización de riesgos",
      "Recomendaciones de controles",
    ],
  ],
  [
    "Cloud Security",
    "Evaluación integral de seguridad en infraestructuras cloud.",
    ["Remoto"],
    [
      "Análisis de configuraciones de seguridad",
      "Revisión de políticas IAM",
      "Evaluación de cifrado y protección de datos",
      "Análisis de redes y segmentación",
    ],
  ],
  [
    "Cloud Accreditation (AWS)",
    "Verificación de que tu arquitectura AWS cumple con configuraciones mínimas de seguridad.",
    ["Remoto"],
    [
      "Revisión de arquitectura AWS",
      "Validación de configuraciones de seguridad",
      "Verificación de compliance con mejores prácticas",
      "Informe de hallazgos y recomendaciones",
    ],
  ],
];
const grc = [
  [
    "Análisis de Riesgos",
    "Identificación, evaluación y priorización de riesgos de seguridad de la información.",
    ["Remoto/Presencial"],
    [
      "Identificación de activos críticos",
      "Evaluación de amenazas y vulnerabilidades",
      "Análisis de impacto",
      "Matriz de riesgos priorizada",
      "Plan de tratamiento de riesgos",
    ],
  ],
  [
    "Capacitación en TISAX",
    "Formación especializada en el estándar de seguridad de la información para la industria automotriz.",
    ["Remoto/Presencial"],
    [
      "Introducción a TISAX y VDA ISA",
      "Requisitos de seguridad de la información",
      "Proceso de evaluación y certificación",
      "Ejercicios prácticos",
      "Material de referencia",
    ],
  ],
  [
    "Business Impact Analysis (BIA)",
    "Análisis del impacto en el negocio para identificar procesos críticos y tiempos de recuperación.",
    ["Remoto/Presencial"],
    [
      "Identificación de procesos críticos",
      "Análisis de dependencias",
      "Determinación de RTO y RPO",
      "Evaluación de impacto financiero y operativo",
      "Informe ejecutivo de BIA",
    ],
  ],
  [
    "Business Continuity Plan (BCP)",
    "Desarrollo de planes para garantizar la continuidad operativa ante incidentes.",
    ["Remoto/Presencial"],
    [
      "Estrategias de continuidad",
      "Planes de respuesta a incidentes",
      "Procedimientos de recuperación",
      "Roles y responsabilidades",
      "Programa de pruebas y mantenimiento",
    ],
  ],
  [
    "Disaster Recovery Plan (DRP)",
    "Planes de recuperación ante desastres para minimizar el tiempo de inactividad.",
    ["Remoto/Presencial"],
    [
      "Estrategias de recuperación de TI",
      "Procedimientos de respaldo y restauración",
      "Sitios alternos y redundancia",
      "Planes de comunicación de crisis",
      "Pruebas de recuperación",
    ],
  ],
  [
    "Desarrollo de Políticas de Seguridad",
    "Creación de manuales y políticas alineados con ISO 27001 e ISO 22301.",
    ["ISO 27001", "ISO 22301"],
    [
      "Políticas de seguridad personalizadas",
      "Procedimientos operativos estándar",
      "Guías de usuario final",
      "Plantillas de documentación",
      "Capacitación en implementación",
    ],
  ],
  [
    "Cumplimiento SOX — Control Interno",
    "Apoyo en el cumplimiento de la Ley Sarbanes-Oxley desde la perspectiva tecnológica.",
    ["SOX"],
    [
      "Evaluación de controles IT SOX",
      "Diseño de controles compensatorios",
      "Documentación de procesos",
      "Pruebas de efectividad",
      "Remediación de deficiencias",
    ],
  ],
  [
    "Controles Generales de TI",
    "Evaluación y diseño de controles generales de tecnología de la información (ITGC).",
    ["Remoto/Presencial"],
    [
      "Gestión de accesos y privilegios",
      "Gestión de cambios a sistemas",
      "Operaciones de TI y seguridad",
      "Continuidad del negocio",
      "Desarrollo y adquisición de sistemas",
    ],
  ],
  [
    "Controles de Aplicación",
    "Diseño y validación de controles automatizados dentro de aplicaciones críticas de negocio.",
    ["Remoto/Presencial"],
    [
      "Controles de entrada de datos",
      "Controles de procesamiento",
      "Controles de salida de información",
      "Segregación de funciones",
      "Validación de cálculos críticos",
    ],
  ],
  [
    "Implementación COBIT e ITIL",
    "Apoyo en el desarrollo e implementación de marcos de gobernanza y gestión de servicios TI.",
    ["COBIT", "ITIL"],
    [
      "Diagnóstico de madurez de procesos",
      "Diseño de procesos tecnológicos",
      "Implementación de mejores prácticas",
      "Capacitación de equipos",
      "Métricas y KPIs de gobierno TI",
    ],
  ],
  [
    "Cumplimiento SPEI / SPID",
    "Asesoría para cumplimiento normativo de sistemas de pagos electrónicos en México.",
    ["SPEI", "SPID"],
    [
      "Análisis de disposiciones Banxico",
      "Evaluación de controles de seguridad",
      "Planes de continuidad operativa",
      "Documentación regulatoria",
      "Preparación para auditorías",
    ],
  ],
];
function pentestCard() {
  return `<article class="service-card service-card--pentest"><div class="pentest-heading"><span class="pentest-icon">⌾</span><div><h3>Pentesting Web</h3><p>Evaluación exhaustiva de seguridad en aplicaciones web mediante pruebas de penetración.</p></div><span class="pentest-mode">◎ Remoto</span></div><div class="test-modes"><article><i class="fa-solid fa-box-open"></i><h4>Black Box</h4><p>Sin acceso a código ni credenciales</p></article><article><i class="fa-solid fa-box-open"></i><h4>Gray Box</h4><p>Acceso parcial (credenciales o info básica)</p></article><article><i class="fa-solid fa-box-open"></i><h4>White Box</h4><p>Con acceso al código fuente y arquitectura</p></article></div><div class="pentest-bottom"><div><h4>◈ Metodologías aplicadas</h4><ul class="methodologies"><li>OWASP Top 10</li><li>OWASP Web Security Testing Guide</li><li>OWASP API Security Top 10</li><li>PTES (Penetration Testing Execution Standard)</li><li>OSSTMM</li><li>NIST SP 800-115</li></ul></div><div class="deliverables"><h4>◉ Entregables</h4><ul>${technical[0][3].map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul><a href="#contacto">Solicitar cotización <b>→</b></a></div></div></article>`;
}
function card([title, description, tags, items], i, featured = false) {
  if (featured && i === 0) return pentestCard();
  return `<article class="service-card"><span class="number">${String(i + 1).padStart(2, "0")} / tps</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(description)}</p><div class="tags">${tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div><details><summary>Alcance del servicio</summary><ul>${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></details><a href="#contacto">Solicitar cotización →</a></article>`;
}
document.querySelector("#technical-services").innerHTML = technical
  .map((service, i) => card(service, i, true))
  .join("");
document.querySelector("#grc-services").innerHTML = grc
  .map((service, i) => card(service, i))
  .join("");
const cases = [
  [
    "Pentesting Avanzado",
    "Seguridad Ofensiva",
    "Servicios Digitales",
    "Protección de Plataforma Crítica ante Amenazas Avanzadas",
    "Empresa con alta exposición de datos sensibles requería validación de controles de seguridad previo a auditoría de cumplimiento normativo.",
    "Identificación y remediación de 2 vulnerabilidades críticas con acceso no autorizado a base de datos.",
  ],
  [
    "Cloud Security",
    "Migración Segura",
    "Consultoría Empresarial",
    "Transformación Digital con Arquitectura de Seguridad Robusta",
    "Infraestructura local obsoleta con riesgos de pérdida de datos y necesidad de modernización sin interrumpir operaciones críticas.",
    "Migración completa (100%) sin tiempo de inactividad operacional; mejora del 40% en velocidad de acceso y disponibilidad de datos.",
  ],
  [
    "Infraestructura de Red",
    "Acceso Remoto Seguro",
    "Corporativo",
    "Implementación de Conectividad Empresarial para Equipos Distribuidos",
    "Organización con 60% de plantilla remota accediendo mediante herramientas no corporativas, exponiendo infraestructura crítica.",
    "Cierre completo de puertos expuestos y vectores de ataque externos; programa de capacitación para 100% de usuarios remotos.",
  ],
];
document.querySelector("#cases").innerHTML = cases
  .map(
    (c) =>
      `<article class="case-card"><small>${escapeHTML(c[1].toUpperCase())} · ${escapeHTML(c[2].toUpperCase())}</small><h3>${escapeHTML(c[0])}</h3><h4>${escapeHTML(c[3])}</h4><p><b>Situación inicial:</b> ${escapeHTML(c[4])}</p><p><b>Resultados:</b> ${escapeHTML(c[5])}</p></article>`,
  )
  .join("");
document.querySelector(".menu-button").addEventListener("click", (e) => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
});
document
  .querySelectorAll("nav a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.querySelector("nav").classList.remove("open"),
    ),
  );
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target,
        target = +el.dataset.count;
      let start = null;
      const tick = (t) => {
        start ??= t;
        const n = Math.min((t - start) / 1500, 1);
        el.textContent =
          Math.floor(target * (1 - (1 - n) ** 3)).toLocaleString() + "+";
        if (n < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    }),
  { threshold: 0.6 },
);
document.querySelectorAll("[data-count]").forEach((el) => observer.observe(el));
let lastSubmission = 0;
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget,
    message = form.querySelector(".form-message"),
    now = Date.now();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  if (form.elements.website.value) {
    message.textContent = "No fue posible procesar la solicitud.";
    return;
  }
  if (now - lastSubmission < 15000) {
    message.textContent =
      "Espera unos segundos antes de volver a enviar la solicitud.";
    return;
  }
  lastSubmission = now;
  message.textContent =
    "Solicitud preparada. Conecta este formulario a un endpoint seguro antes de publicarlo.";
});
