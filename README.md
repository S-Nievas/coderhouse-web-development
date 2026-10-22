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
- CSS propio en `styles/styles.css`, con la paleta del proyecto y ajustes de componentes de Bootstrap.
- Flexbox, CSS Grid y media queries para distribuir el contenido en mobile y desktop.
- Tipografías **Inter** y **Orbitron** de Google Fonts.

## Estructura

```text
coderhouse-web-development/
├── index.html
├── README.md
├── pages/
│   ├── juegos.html
│   ├── experiencias.html
│   ├── generos.html
│   └── contacto.html
├── assets/
│   └── img/
└── styles/
    └── styles.css
```

El archivo `index.html` se ubica en la raíz para permitir la publicación de GitHub Pages desde esa carpeta.

## Abrir el proyecto en tu computadora

1. Cloná o descargá este repositorio.
2. Abrí el archivo `index.html` en un navegador.
3. Recorré las páginas desde la barra de navegación.

No requiere instalación ni compilación. Se necesita conexión a internet para cargar Bootstrap y las fuentes externas.

## Control de versiones

Rama de trabajo: `feature/pre-entrega`. Los cambios de esta pre-entrega se registran desde la consola con commits descriptivos y se integran a `main` conservando un commit de merge visible en el historial.

Los commits separan el traslado del sitio a la raíz, la actualización de la documentación y la configuración de publicación estática.

## Publicación en GitHub Pages

En **Settings → Pages → Build and deployment**, la configuración de publicación es:

- **Source:** Deploy from a branch.
- **Branch:** `main`.
- **Folder:** `/ (root)`.

Dirección del sitio: [https://s-nievas.github.io/coderhouse-web-development/](https://s-nievas.github.io/coderhouse-web-development/).

## Alcance actual

El sitio es estático. El formulario de contacto es demostrativo y no cuenta con un servicio de envío de mensajes. Los enlaces a redes sociales quedan pendientes para una próxima etapa.
