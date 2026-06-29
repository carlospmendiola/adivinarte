
# AdivinARTE

Juego web de historia del arte desarrollado como proyecto personal del **Bootcamp Full Stack Developer (abril 2026)**. El jugador visualiza una obra de arte del Cleveland Museum of Art y debe adivinar su título o su autor entre 4 opciones. El jugador debe responder a 10 preguntas sobre obras diferentes y va acumulando sus puntos. Al final sale la puntuación que ha logrado y qué tipo de jugador es según los puntos logrados.

---

## Urls

- Despliegue en Render: [adivinarte.onrender.com](https://adivinarte.onrender.com)  
- Repositorio Github: [github.com/carlospmendiola/adivinarte](https://github.com/carlospmendiola/adivinarte)

---

## Tecnologías

- **React** + **Vite**
- **React Router** — navegación entre páginas sin recargar el navegador
- **SCSS** — arquitectura de parciales, mobile first
- **Cleveland Museum of Art API** — open access, sin autenticación
- **Embla Carousel** — carrusel de obras en la home
- **Custom hooks**: `useFetch` (peticiones genéricas), `useGame` (lógica del juego)

---

## Funcionalidades

- Juego de 10 preguntas con obras aleatorias
- Pregunta aleatoria sobre título o autor de la obra
- Feedback visual inmediato: opción correcta en verde, incorrecta en rojo
- Puntuación en tiempo real y pantalla de resultado con perfil del jugador según puntuación
- Catálogo paginado de obras (12 por página) con página de detalle de cada obra
- Carrusel de obras en la página de inicio
- Diseño responsive (mobile first)

---

## Cómo ejecutarlo en local

### Requisitos

- Yarn

### Instalación

```bash
git clone https://github.com/carlospmendiola/adivinarte.git
cd adivinarte
yarn install
```

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con:

```
VITE_API_URL=/api/cleveland/api/artworks
```

### Arrancar el servidor de desarrollo

```bash
yarn dev
```

---

## Estructura del proyecto

```
src/
├── api/          # Funciones de acceso y transformación de datos de la API
├── components/   # Componentes reutilizables (Card, Juego, Resultado, NavBar...)
├── hooks/        # Custom hooks (useFetch, useGame)
├── pages/        # Páginas de la app (HomePage, GamePage, CataloguePage...)
└── styles/       # Arquitectura SCSS con parciales por componente
```

---

## Sistema de Diseño APP

Esta sección fundamenta el sistema de diseño generado con los fundamentes visuales y la arquitectura CSS para la APP para lograr una coherencia visua en todo el sitio web y facilitar posibles modificaciones posteriores siguiendo un patrón reconocible.

### Principios

- **Mobile first**: los estilos base son para móvil. Los breakpoints (`768px`, `990px`, `1200px`) añaden capas sobre ese base.
- **Design tokens centralizados**: todas las decisiones visuales están en `_variables.scss`. Los componentes importan las variables y nunca usan valores hardcodeados.
- **Componentes auto-contenidos**: cada componente tiene su propio SCSS parcial que importa variables y mixins global

### Estructura del SCSS APP

```
src/styles/                ← Capa global
  ├── _variables.scss      ← Tokens: colores, fuentes, espaciado, radios
  ├── _mixins.scss         ← Mixins reutilizables (flex, column, mayus...)
  ├── _reset.scss          ← Reset CSS básico
  ├── _fonts.scss          ← Tipografía: h1, h2, p, textos auxiliares
  ├── _elements.scss       ← Botones y elementos reutilizables
  ├── _estructura.scss     ← Layout: main, header, footer, zonas
  └── style.scss           ← Entry point (usa @use de todos los anteriores)
```

### Estructura del SCSS componentes

Los componentes tienen además su propio parcial en `src/components/`:

```
src/components/
├── _card.scss
├── _catalogo.scss
├── _juego.scss
├── _resultado.scss
├── _navbar.scss
├── _carousel.scss
└── _EmblaCarousel.scss
```

### Tokens (`_variables.scss`)

## Colores

| Variable                  | Valor                   | Uso                                           |
| ------------------------- | ----------------------- | --------------------------------------------- |
| `$primary-color`          | `#7cb518`               | Botón principal, aciertos, acento verde       |
| `$primary-color-dark`     | `#6aaa14`               | Hover del color principal                     |
| `$primary-color-shadow`   | `rgba(124,181,24,0.30)` | Fondos suaves, footer                         |
| `$secondary-color`        | `#0077b6`               | Botón secundario, enlaces, títulos destacados |
| `$secondary-color-shadow` | `rgba(0,119,182,0.30)`  | Hover suave del secundario                    |
| `$error-color`            | `#8e0002`               | Respuesta incorrecta                          |
| `$error-color-shadow`     | `rgba(142,0,2,0.40)`    | Fondo suave de error                          |
| `$sep-color`              | `#cecece`               | Separadores y bordes                          |
| `$text-color`             | `#131313`               | Texto principal                               |
| `$white`                  | `#ffffff`               | Fondos y texto sobre color                    |

**Escala de grises:**

| Variable          | Valor     |
| ----------------- | --------- |
| `$black-color-90` | `#191919` |
| `$black-color-85` | `#262626` |
| `$black-color-70` | `#4c4c4c` |
| `$black-color-55` | `#737373` |
| `$black-color-40` | `#999999` |
| `$black-color-25` | `#bfbfbf` |
| `$black-color-10` | `#e5e5e5` |
| `$black-color-5`  | `#f2f2f2` |

---

## Tipografía

| Variable          | Fuente                              | Uso                      |
| ----------------- | ----------------------------------- | ------------------------ |
| `$primary-font`   | Cormorant, Georgia, serif           | Títulos principales      |
| `$secondary-font` | Cormorant Garamond, Georgia, serif  | Subtítulos, labels       |
| `$text-font`      | DM Sans, Helvetica Neue, sans-serif | Cuerpo de texto, botones |

**Tamaños:**

| Variable              | Valor     | Uso                   |
| --------------------- | --------- | --------------------- |
| `$txt-title`          | `3.1rem`  | Título principal      |
| `$txt-resultado`      | `1.8rem`  | Pantalla de resultado |
| `$txt-subtitle`       | `1.6rem`  | Subtítulos de sección |
| `$txt-title-sections` | `1.4rem`  | Títulos de sección    |
| `$txt-title-card`     | `1.2rem`  | Títulos de tarjeta    |
| `$txt-normal`         | `0.95rem` | Texto estándar        |
| `$txt-menu`           | `0.8rem`  | Navegación            |
| `$txt-xs`             | `0.7rem`  | Texto muy pequeño     |

**Pesos:**

| Variable               | Valor |
| ---------------------- | ----- |
| `$fontweigth-bold`     | `800` |
| `$fontweigth-semibold` | `600` |
| `$fontweigth-regular`  | `500` |
| `$fontweigth-light`    | `400` |

---

## Espaciado

Sistema de 6 niveles basado en múltiplos de 8px:

| Variable  | Valor  | Uso típico                       |
| --------- | ------ | -------------------------------- |
| `$sp-xs`  | `4px`  | Separaciones mínimas             |
| `$sp-sm`  | `8px`  | Padding interior pequeño         |
| `$sp-md`  | `16px` | Padding estándar                 |
| `$sp-lg`  | `24px` | Separación entre bloques         |
| `$sp-xl`  | `32px` | Márgenes de sección              |
| `$sp-xxl` | `64px` | Espaciado grande entre secciones |

---

## Bordes y radio

| Variable       | Valor    | Uso                  |
| -------------- | -------- | -------------------- |
| `$radius-sm`   | `6px`    | Imágenes en desktop  |
| `$radius-md`   | `8px`    | Botones              |
| `$radius-lg`   | `12px`   | Tarjetas             |
| `$radius-xl`   | `16px`   | Contenedores grandes |
| `$radius-full` | `9999px` | Elementos circulares |

**Transición global:** `$transition: all 0.2s ease`

---

## Botones

Todas las variantes están definidas en `_elements.scss` y comparten padding, `border-radius: $radius-md` y fuente `$text-font`.

| Clase               | Color de fondo                        | Uso                        |
| ------------------- | ------------------------------------- | -------------------------- |
| `.boton-juego`      | Azul (`$secondary-color`)             | Acción principal del juego |
| `.boton-catalogo`   | Verde suave (`$primary-color-shadow`) | Acción secundaria          |
| `.boton-paginacion` | Blanco con borde gris                 | Navegación del catálogo    |
| `.boton-detalle`    | Gris claro con borde azul             | Ver detalle de obra        |

Todos tienen estado `:hover` definido y soporte para `disabled`.

### Layout (`_estructura.scss`)

```
main               → flex column, 100vh
├── header         → título y subtítulo centrados
├── .intro-juego   → texto informativo
├── .zona-botones  → botones centrados en columna → fila en desktop
├── .zona-paginacion → paginación con borde superior
└── footer         → fijo al fondo con Flex y margin-top auto, así conseguimos que siempre el footer esté pegado al fondo, color primary semi-transparente
```

Los contenedores principales (`.container-Principal`, `.container-catalogo`, `.detalleCard`) usan anchos progresivos según el viewport.

### Catálogo: sistema masonry (`_card.scss`)

Se implementa con `column-count` CSS puro (sin JavaScript):

| Viewport | Columnas |
| -------- | -------- |
| < 768px  | 1        |
| ≥ 768px  | 2        |
| ≥ 990px  | 3        |
| ≥ 1200px | 4        |

Cada `.card` usa `break-inside: avoid` para evitar que se parta entre columnas. Las imágenes ocupan el `100%` del ancho de la columna. El texto va dentro de `.txt-card` con título (mayúscula, `$secondary-color`) y descripción (cursiva).


### Buenas prácticas (para quien herede el proyecto)

1. No escribas valores directamente — usa las variables de `_variables.scss`
2. Cada componente nuevo crea su propio SCSS parcial en `src/components/_componente.scss`
3. Para layouts responsivos, usa los breakpoints de `_estructura.scss` (768, 990, 1200)
4. Para flexbox, aplica los mixins de `_mixins.scss` en vez de escribir `display: flex` manualmente
5. No modifiques `style.scss` para añadir estilos de componentes — ese archivo solo importa parciales globales

---


## Autor

**Carlos Mendiola**  
Bootcamp Full Stack Developer — Vitoria-Gasteiz, abril 2026