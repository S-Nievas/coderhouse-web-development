# GameVault

GameVault es un proyecto académico de Coderhouse para una primera entrega de HTML.

El sitio propone una web de recomendación y descubrimiento de videojuegos. La idea principal es ayudar al usuario a encontrar qué jugar según el tipo de experiencia que busca, además del género o la similitud con otros títulos.

## Objetivo de la entrega

Crear la estructura HTML semántica del sitio, sin agregar estilos ni comportamiento dinámico.

Esta entrega no utiliza:

- CSS.
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
└── assets/
    └── img/
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
- Imagen local preparada en `assets/img/gamevault.jpg`.
