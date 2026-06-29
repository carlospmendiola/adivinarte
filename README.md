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

## Autor

**Carlos Mendiola**  
Bootcamp Full Stack Developer — Vitoria-Gasteiz, abril 2026
