# GameVault

Proyecto académico de Desarrollo Web de Coderhouse para descubrir videojuegos según su género y el tipo de experiencia que ofrecen.

- **Repositorio:** [S-Nievas/coderhouse-web-development](https://github.com/S-Nievas/coderhouse-web-development)
- **Sitio web:** [GameVault](https://s-nievas.github.io/coderhouse-web-development/)

## Páginas

| Página | Contenido |
| --- | --- |
| Inicio | Presentación del proyecto, carrusel y recomendaciones destacadas. |
| Juegos | Catálogo de videojuegos con sus descripciones. |
| Experiencias | Recomendaciones según el tipo de experiencia buscada. |
| Géneros | Videojuegos agrupados por género. |
| Contacto | Formulario para sugerir videojuegos. |

## Tecnologías y diseño

- HTML5 semántico, navegación entre las cinco páginas y rutas relativas para imágenes, estilos y enlaces internos.
- Bootstrap **5.3.8**, con su hoja de estilos y su JavaScript `bundle` incluidos en todas las páginas mediante CDN.
- Navbar de Bootstrap adaptable a pantallas pequeñas y carrusel en la página de inicio.
- Estilos propios escritos en SCSS y compilados con Dart Sass **1.106.1** a `styles/styles.css`.
- Variables para la paleta, tipografías, espaciado, bordes y transiciones; mixins para patrones compartidos.
- Partials con `@use`, nesting y el operador `&`, incluidos los ajustes a los componentes de Bootstrap.
- Flexbox, CSS Grid y media queries para distribuir el contenido en mobile y desktop.
- Tipografías **Inter** y **Orbitron** de Google Fonts.

## Estructura

```text
coderhouse-web-development/
├── .nojekyll
├── index.html
├── README.md
├── package.json
├── package-lock.json
├── pages/
│   ├── juegos.html
│   ├── experiencias.html
│   ├── generos.html
│   └── contacto.html
├── assets/
│   └── img/
├── scss/
│   ├── main.scss
│   ├── utilities/
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── base/
│   │   ├── _base.scss
│   │   └── _tipografia.scss
│   ├── layout/
│   │   ├── _header.scss
│   │   ├── _nav.scss
│   │   ├── _main.scss
│   │   └── _footer.scss
│   └── components/
│       ├── _hero.scss
│       ├── _cards.scss
│       ├── _carousel.scss
│       ├── _forms.scss
│       └── _buttons.scss
└── styles/
    └── styles.css          # Generado por Sass; no editar a mano.
```

El archivo `index.html` se ubica en la raíz para permitir la publicación de GitHub Pages desde esa carpeta.

## Abrir el proyecto en tu computadora

1. Cloná o descargá este repositorio.
2. Abrí el archivo `index.html` en un navegador.
3. Recorré las páginas desde la barra de navegación.

Para visitar el sitio no hace falta instalar dependencias: el CSS compilado está incluido en el repositorio. Se necesita conexión a internet para cargar Bootstrap y las fuentes externas.

## Editar y compilar los estilos

Requiere Node.js **20.19.0 o superior** y npm. Desde la raíz del repositorio:

```sh
npm ci
npm run build
```

Para recompilar automáticamente al guardar cambios en SCSS:

```sh
npm run watch:css
```

`scss/main.scss` es el único punto de entrada. Los archivos que empiezan con `_` son partials y se cargan mediante `@use`; las dependencias de cada módulo se declaran también con `@use`.

La salida única es `styles/styles.css`. Se conserva esa ruta para mantener los cinco HTML idénticos a la entrega anterior, incluidos el CDN de Bootstrap, la navbar y todos sus enlaces. El CSS anterior fue reemplazado por el resultado de Sass: todo cambio de estilo se hace en `scss/` y luego se compila. No se generan otras hojas propias ni source maps.

`utilities/` centraliza los valores reutilizables y los mixins; `base/` contiene los estilos globales y la tipografía; `layout/` organiza la página y la navegación; `components/` contiene los elementos repetibles. Las reglas responsive se mantienen junto al elemento que modifican, conservando el breakpoint original de 1024 px.

Antes de subir cambios en SCSS, ejecutá `npm run build` y versioná tanto las fuentes como el CSS generado. `node_modules/` está excluido mediante `.gitignore`.

## Conservación del diseño

La refactorización mantiene los colores, fuentes, grillas y estados interactivos originales. Se compararon las cinco páginas en móvil y escritorio, además de los puntos de cambio de la navbar; los cinco HTML permanecen sin modificaciones.

## Control de versiones

- `feature/pre-entrega`: estructura en la raíz, documentación y publicación en GitHub Pages.
- `feature/arquitectura-scss`: herramientas de compilación, migración a partials y documentación de la arquitectura SCSS.

Las entregas se registran desde la consola con commits descriptivos y se integran a `main` conservando un commit de merge visible en el historial. La refactorización SCSS separa en tres commits la configuración de Sass, la migración de estilos y la documentación.

## Publicación en GitHub Pages

En **Settings → Pages → Build and deployment**, la configuración de publicación es:

- **Source:** Deploy from a branch.
- **Branch:** `main`.
- **Folder:** `/ (root)`.

El archivo `.nojekyll` permite publicar los HTML, CSS e imágenes directamente, sin procesarlos con Jekyll.

Dirección del sitio: [https://s-nievas.github.io/coderhouse-web-development/](https://s-nievas.github.io/coderhouse-web-development/).

## Alcance actual

El sitio es estático. El formulario de contacto es demostrativo y no cuenta con un servicio de envío de mensajes. Los enlaces a redes sociales quedan pendientes para una próxima etapa.
