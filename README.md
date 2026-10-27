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

## Instalación desde cero

Necesitás **Git**, **Node.js 20.19.0 o superior** y **npm** (incluido con Node.js). Comprobá que estén disponibles en una terminal con `git --version`, `node --version` y `npm --version`.

Cloná el proyecto, entrá a su carpeta, instalá las versiones del archivo `package-lock.json` y compilá:

```sh
git clone https://github.com/S-Nievas/coderhouse-web-development.git
cd coderhouse-web-development
npm ci
npm run build
```

Al terminar sin errores, Sass genera **`styles/styles.css`** desde **`scss/main.scss`**. No hace falta instalar Sass globalmente: se usa la versión local del proyecto.

Abrí `index.html` en un navegador y recorré las cinco páginas desde el menú. No se requieren servidor, claves ni variables de entorno. Si solo querés visitar el sitio, podés usar [GameVault publicado](https://s-nievas.github.io/coderhouse-web-development/) o abrir el HTML descargado: el CSS compilado ya está incluido. Se necesita internet para los CDN de Bootstrap, Animate.css y Google Fonts.

En Windows, si PowerShell bloquea `npm.ps1`, usá `npm.cmd ci`, `npm.cmd run build` y `npm.cmd run watch:css`; no hace falta cambiar la política de ejecución.

## Editar y compilar los estilos

Desde la carpeta del proyecto, iniciá la recompilación automática:

```sh
npm run watch:css
```

Mantené esa terminal abierta mientras editás los partials de `scss/`. Al guardar, Sass actualiza `styles/styles.css`; recargá el navegador para ver el cambio. Detené el modo de observación con `Ctrl+C`. Para una compilación puntual, ejecutá `npm run build`.

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

En la entrega de animaciones se compiló el proyecto con Sass y se revisaron las cinco páginas en **60 combinaciones** de página y ancho: 375, 480, 600, 767, 768, 900, 991, 992, 1023, 1024, 1200 y 1400 px. En esas medidas no se detectaron scroll horizontal, textos cortados ni superposiciones de contenido.

También se comprobaron los cinco enlaces de cada menú móvil, las cuatro diapositivas del carrusel a 375 px y la reducción de las duraciones de animación con la preferencia de movimiento reducido activada en el dispositivo.

Para la entrega de SEO y accesibilidad se repitió la revisión de las cinco páginas a **320, 375, 768, 992, 1024 y 1400 px** (30 combinaciones), sin desbordamientos ni superposiciones. Se verificaron los metadatos, los textos alternativos, la jerarquía de títulos, las rutas y las referencias ARIA. También se probaron con teclado el enlace de salto, los cinco menús móviles y las cuatro diapositivas del carrusel, además del foco y la flecha del selector. `npm ci`, `npm run build` y el inicio de `npm run watch:css` funcionaron correctamente.

## SEO on-page y accesibilidad

Cada HTML tiene un `title` y una `meta description` propios, un solo `h1` y una jerarquía de encabezados sin saltos. Las palabras clave se integran en títulos y contenido según el tema de la página:

| Página | Tema principal |
| --- | --- |
| Inicio | Recomendaciones de videojuegos por experiencia. |
| Juegos | Catálogo, títulos recomendados e historias de videojuegos. |
| Experiencias | Exploración, historias, competición y juegos para relajarse. |
| Géneros | RPG, FPS, MOBA, RTS, survival y horror. |
| Contacto | Sugerencias de videojuegos y formulario de demostración. |

No se añade `meta keywords`. Las descripciones resumen el contenido de cada página siguiendo la [guía de Google Search Central](https://developers.google.com/search/docs/appearance/snippet).

Las cinco imágenes de contenido incluyen `alt` descriptivo. Los fondos de las tarjetas son decorativos y acompañan información que ya está escrita en HTML. Los nombres existentes, como `red-dead-redemption-2-bg.png` y `gamevault-hero-experiencias.png`, son descriptivos; se conservan las rutas y el `index.html` de entrada.

La navegación incorpora un enlace inicial **Saltar al contenido principal**, el atributo `aria-current` para identificar la página actual y nombres para los menús principal y del pie. El mixin con parámetros `focus-ring` comparte el foco visible entre enlaces, campos y botones. Los enlaces del pie llevan a páginas reales del sitio.

El carrusel avanza manualmente, tiene controles de 44 × 44 px, indicadores de 24 × 24 px y una región que anuncia los cambios a lectores de pantalla. Sus controles tienen fondo oscuro sólido para mantener el contraste sobre las fotografías. El formulario incluye etiquetas, autocompletado y una explicación de su carácter demostrativo; el envío permanece deshabilitado porque no hay un servicio de recepción.

Se calcularon los contrastes según la fórmula de [WCAG para contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html):

| Texto / fondo | Relación |
| --- | ---: |
| Principal / fondo general | 17,91:1 |
| Principal / superficie de tarjeta | 16,12:1 |
| Secundario / superficie de tarjeta | 8,24:1 |
| Acento / superficie de tarjeta | 10,19:1 |
| Secundario / fotografía blanca bajo la capa oscura al 82 % (peor caso) | 5,43:1 |

Estas combinaciones superan 4,5:1 para texto normal. El cálculo cubre las combinaciones indicadas; no constituye una certificación completa de conformidad WCAG.

## Control de versiones

- `feature/pre-entrega`: estructura en la raíz, documentación y publicación en GitHub Pages.
- `feature/arquitectura-scss`: herramientas de compilación, migración a partials y documentación de la arquitectura SCSS.
- `feature/animaciones-responsive`: cierre del responsive en las cinco páginas, SCSS avanzado y animaciones.
- `feature/seo-accesibilidad`: metadatos y contenido específico, mejoras de accesibilidad e instalación documentada.

Las entregas se registran desde la consola con commits descriptivos y se integran a `main` conservando un commit de merge visible en el historial. La entrega de SEO y accesibilidad separa los cambios de contenido, los ajustes de accesibilidad y la documentación.

## Publicación en GitHub Pages

En **Settings → Pages → Build and deployment**, la configuración de publicación es:

- **Source:** Deploy from a branch.
- **Branch:** `main`.
- **Folder:** `/ (root)`.

El archivo `.nojekyll` permite publicar los HTML, CSS e imágenes directamente, sin procesarlos con Jekyll.

Dirección del sitio: [https://s-nievas.github.io/coderhouse-web-development/](https://s-nievas.github.io/coderhouse-web-development/).

## Alcance actual

El sitio es estático. El formulario de contacto es demostrativo y no cuenta con un servicio de envío de mensajes.
