# TecnoProjects Security

> Seguridad · Tecnología · Innovación

Sitio web estático de **TecnoProjects Security**, una plataforma que reúne servicios de ciberseguridad, consultoría GRC, desarrollo de software, recursos educativos y un blog especializado.

[![Sitio web](https://img.shields.io/badge/estado-activo-19c37d?style=for-the-badge)](https://tecnoprojects-security.vercel.app/)
[![Despliegue](https://img.shields.io/badge/despliegue-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![Tecnologías](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JavaScript-f7df1e?style=for-the-badge)](#tecnologías)

## Contenido

El repositorio contiene cuatro experiencias web que se despliegan como archivos estáticos:

| Ruta | Descripción |
|---|---|
| [`/`](./index.html) | Sitio institucional actual: servicios de seguridad, GRC y desarrollo de software. |
| [`/Academy`](./Academy/index.html) | TecnoProjects Academy: cursos, eventos, equipo y contacto. |
| [`/Blog`](./Blog/index.html) | Blog de ciberseguridad, vulnerabilidades y tecnología. |
| [`/v1.0.0`](./v1.0.0/index.html) | Versiones y recursos históricos del proyecto. |

## Servicios

La página principal presenta soluciones técnicas y de consultoría para organizaciones:

- Pentesting web: modalidades Black Box, Gray Box y White Box.
- Análisis de código estático (SAST) y dinámico (DAST).
- Hardening, revisión de configuración y seguridad cloud.
- Inteligencia y reconocimiento (OSINT), modelado de amenazas y evaluación de riesgos.
- GRC, TISAX, ISO 27001/22301, SOX, ITGC, COBIT/ITIL, BIA, BCP, DRP y SPEI/SPID.
- Desarrollo de aplicaciones web, escritorio y móviles.

## Tecnologías

El proyecto no requiere compilación ni un backend propio. Está construido con:

- HTML5, CSS3 y JavaScript nativo.
- jQuery, Bootstrap, Owl Carousel, Isotope, Flexslider y Lightbox en los módulos heredados.
- Font Awesome e iconografía local.
- EmailJS en formularios de Academy.
- Vercel para hosting estático y cabeceras de seguridad.

La configuración de despliegue está en [`vercel.json`](./vercel.json), con CSP, HSTS, `X-Content-Type-Options`, política de permisos y protección contra framing.

## Estructura

```text
TPS-Web/
├── index.html              # Landing principal
├── css/                    # Estilos de la landing
├── js/                     # Interacciones de la landing
├── img/                    # Recursos de la landing
├── Academy/                # Sitio de cursos y eventos
├── Blog/                   # Blog y artículos
├── 404/                    # Página de error general
├── v1.0.0/                 # Versiones anteriores y material histórico
└── vercel.json             # Configuración de despliegue y cabeceras
```

## Ejecutar localmente

Al ser un sitio estático, puedes abrir `index.html` en tu navegador. Para probarlo con un servidor local, por ejemplo:

```bash
npx serve .
```

Después, abre la URL indicada por el servidor —habitualmente `http://localhost:3000`—.

## Despliegue

El proyecto está preparado para desplegarse en Vercel sin pasos de compilación:

1. Importa el repositorio en Vercel.
2. Usa la raíz del repositorio como directorio de proyecto.
3. No configures comando de build ni directorio de salida.
4. Vercel aplicará automáticamente las cabeceras definidas en `vercel.json`.

## Créditos y licencias

El proyecto integra componentes y plantillas de terceros. Consulta los avisos incluidos en:

- [`Blog/LICENSE.txt`](./Blog/LICENSE.txt) — plantilla del Blog bajo Creative Commons Attribution 3.0.
- [`v1.0.0/LICENSE`](./v1.0.0/LICENSE) — licencia BSD 3-Clause del contenido de esa versión.
- [`Blog/README.txt`](./Blog/README.txt) — créditos de la plantilla Shahala.

---

<p align="center">
  Hecho por <a href="https://github.com/TecnoProjects">TecnoProjects Security</a><br />
  <a href="https://tecnoprojects-security.vercel.app/">Visitar sitio web</a>
</p>
