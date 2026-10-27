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
- Variables, operadores Sass, mixins con parámetros y `@extend` para compartir estilos.
- Partials con `@use`, nesting y `&`, incluidos los ajustes a los componentes de Bootstrap.
- Flexbox, CSS Grid y diseño mobile-first con cambios a **768 px** y **1024 px**.
- Animación nativa desde SCSS y [Animate.css **4.1.1**](https://animate.style/), con respeto por la preferencia de movimiento reducido.
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

Para visitar el sitio no hace falta instalar dependencias: el CSS compilado está incluido en el repositorio. Se necesita conexión a internet para cargar los CDN de Bootstrap y Animate.css, además de las fuentes externas.

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

La salida única es `styles/styles.css`, conservando la ruta que enlazan los cinco HTML. Todo cambio de estilo propio se hace en `scss/` y luego se compila; no se generan otras hojas propias ni source maps. Bootstrap y su navbar siguen presentes en todas las páginas.

`utilities/` centraliza los valores reutilizables y los mixins; `base/` contiene los estilos globales y la tipografía; `layout/` organiza la página y la navegación; `components/` contiene los elementos repetibles. Las reglas responsive y las animaciones se mantienen en el partial correspondiente, sobre la arquitectura de la entrega anterior.

Antes de subir cambios en SCSS, ejecutá `npm run build` y versioná tanto las fuentes como el CSS generado. `node_modules/` está excluido mediante `.gitignore`.

## SCSS avanzado y responsive

- **Mixin con parámetros:** `responsive-grid($tablet-columns, $desktop-columns, $gap)` define una columna como base y permite elegir columnas y separación en tablet y escritorio. Se aplica a las recomendaciones, el catálogo, experiencias, géneros y el formulario.
- **`@extend`:** `.game-card`, `.experience-card` y `.genre-card` extienden el placeholder `%content-card` en `_cards.scss`, compartiendo superficie, espaciado y estados de interacción.
- **Operadores:** `_variables.scss` calcula espaciados desde `$space-unit * 2`, `* 4` y `* 6`, y la duración de entrada desde `$transition-fast * 3`.
- **Mobile-first:** la base no requiere media queries. Los mixins `tablet` y `desktop` generan `min-width: 768px` y `min-width: 1024px`; la navbar conserva el comportamiento responsivo de Bootstrap.

Los HTML suman las clases de animación y contenedores para las grillas de experiencias y géneros. Se mantienen la paleta, las tipografías y el contenido del proyecto.

## Animaciones

- **Nativa:** `@keyframes vault-reveal`, en `_hero.scss`, presenta la imagen principal con una entrada breve de opacidad y desplazamiento de 8 px. La navegación suma un subrayado con `transition` al pasar el puntero o enfocar con teclado; las tarjetas y los botones conservan transiciones suaves.
- **Librería:** los títulos principales de las cinco páginas usan `animate__animated animate__fadeIn` de Animate.css. La duración de **600 ms** se configura desde SCSS mediante `--animate-duration`.
- **Movimiento reducido:** `_base.scss` incluye `prefers-reduced-motion: reduce` para minimizar animaciones y transiciones, incluidas las de las librerías.

## Verificación de la entrega

Se compiló el proyecto con Sass y se revisaron las cinco páginas en **60 combinaciones** de página y ancho: 375, 480, 600, 767, 768, 900, 991, 992, 1023, 1024, 1200 y 1400 px. En esas medidas no se detectaron scroll horizontal, textos cortados ni superposiciones de contenido.

También se comprobaron los cinco enlaces de cada menú móvil, las cuatro diapositivas del carrusel a 375 px y la reducción de las duraciones de animación con la preferencia de movimiento reducido activada en el dispositivo.

## Control de versiones

- `feature/pre-entrega`: estructura en la raíz, documentación y publicación en GitHub Pages.
- `feature/arquitectura-scss`: herramientas de compilación, migración a partials y documentación de la arquitectura SCSS.
- `feature/animaciones-responsive`: cierre del responsive en las cinco páginas, SCSS avanzado y animaciones.

Las entregas se registran desde la consola con commits descriptivos y se integran a `main` conservando un commit de merge visible en el historial. Esta entrega separa en tres commits los ajustes responsive y de SCSS avanzado, las animaciones y la documentación.

## Publicación en GitHub Pages

En **Settings → Pages → Build and deployment**, la configuración de publicación es:

- **Source:** Deploy from a branch.
- **Branch:** `main`.
- **Folder:** `/ (root)`.

El archivo `.nojekyll` permite publicar los HTML, CSS e imágenes directamente, sin procesarlos con Jekyll.

Dirección del sitio: [https://s-nievas.github.io/coderhouse-web-development/](https://s-nievas.github.io/coderhouse-web-development/).

## Alcance actual

El sitio es estático. El formulario de contacto es demostrativo y no cuenta con un servicio de envío de mensajes. Los enlaces a redes sociales quedan pendientes para una próxima etapa.
