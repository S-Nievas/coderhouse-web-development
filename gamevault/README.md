# GameVault

GameVault es un proyecto académico de Coderhouse desarrollado por etapas.

El sitio propone una web de recomendación y descubrimiento de videojuegos. La idea principal es ayudar al usuario a encontrar qué jugar según el tipo de experiencia que busca, además del género o la similitud con otros títulos.

## Objetivo de la entrega actual

Crear la estructura HTML semántica del sitio y aplicar una estilización visual completa mediante CSS externo.

Esta entrega no utiliza:

- JavaScript.
- Bootstrap.
- Tailwind.
- React.
- Frameworks.
- Librerías externas.

## Estructura del proyecto

```text
gamevault/
├── index.html
├── pages/
│   ├── juegos.html
│   ├── experiencias.html
│   ├── generos.html
│   └── contacto.html
├── assets/
│   └── img/
│       └── gamevault.jpg
└── styles/
    └── styles.css
```

## Páginas

- `index.html`: presentación general de GameVault.
- `pages/juegos.html`: catálogo inicial de juegos recomendados.
- `pages/experiencias.html`: recomendaciones según el tipo de experiencia buscada.
- `pages/generos.html`: recomendaciones organizadas por género.
- `pages/contacto.html`: formulario para sugerir videojuegos.

## Características HTML

- Uso de etiquetas semánticas como `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption` y `footer`.
- Navegación entre todas las páginas mediante rutas relativas.
- Formulario con `label` correctamente asociados a sus campos.
- Jerarquía de títulos ordenada.
- Estilos centralizados en `styles/styles.css`.
- Imagen local disponible en `assets/img/gamevault.jpg`.
