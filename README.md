# Curriculum Vitae Interactivo

Este proyecto es una aplicación web moderna y responsiva que presenta un Curriculum Vitae dinámico e interactivo. Está construido utilizando tecnologías web estándar y enfocado en una experiencia de usuario fluida y personalizable.

## Características Principales

- **Carga Dinámica de Contenido**: Toda la información (Experiencia, Educación, Habilidades) se carga dinámicamente mediante JavaScript, simulando una arquitectura basada en componentes.
- **Diseño Responsivo**: Maquetación adaptable a cualquier dispositivo (Móvil, Tablet, Desktop) utilizando **Bootstrap 5**.
- **Personalización de Tema**:
  - **Modo Claro / Oscuro**: Alternancia de tema persistente.
  - **Selector de Fondos**: Variedad de degradados de fondo que se adaptan automáticamente al modo claro u oscuro seleccionado.
- **Animaciones**: Efectos de aparición al desplazarse (Scroll Reveal) utilizando la API `IntersectionObserver` para un alto rendimiento.
- **Interactividad**:
  - Tarjetas de experiencia colapsables.
  - Formulario de contacto con validación en tiempo real y simulación de envío asíncrono.
- **Estilo Moderno**: Uso de _Glassmorphism_ (efecto cristal), gradientes y variables CSS para una estética pulida.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica.
- **CSS3**:
  - Variables CSS (Custom Properties) para theming.
  - Flexbox y Grid.
- **JavaScript (ES6+)**:
  - Módulos para organización del código.
  - **jQuery**: Para manipulación eficiente del DOM.
- **Bootstrap 5.3**: Framework de estilos y componentes.
- **Bootstrap Icons**: Iconografía.

## Estructura del Proyecto

```text
/
├── index.html              # Punto de entrada principal
├── actions                 # GitHub Actions (si aplica)
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globales y específicos
│   └── img/                # Recursos de imagen
├── src/
│   ├── main.js             # Script principal de inicialización
│   ├── data/
│   │   └── data.js         # Datos del CV (JSON-like structure)
│   ├── components/         # Componentes UI reutilizables
│   │   ├── ui/             # Tarjetas, Inputs, Badges, etc.
│   │   └── forms/          # Lógica de formularios
│   └── utils/              # Utilidades (Theming, Helpers, Validaciones)
└── README.md               # Documentación
```

## Instalación y Uso

No se requiere instalación de dependencias de Node.js ni procesos de compilación complejos para ejecutar la versión básica.

1.  **Clonar o Descargar** el repositorio.
2.  Abrir el archivo `index.html` directamente en tu navegador web favorito.

## 👤 Autor

**Carlos González**

- Desarrollador Full Stack
- Link del sitio: https://lorcas88.github.io/curriculum_vitae/
