# Host App - Microfrontend Platform

Este proyecto es una aplicación host para arquitectura de microfrontends (MF), construida con **React** y **Vite**. Permite orquestar y mostrar distintos microfrontends de manera ágil, facilitando su integración y despliegue independiente.

---

## Características principales

- **Carga dinámica de microfrontends**
- **Aislamiento y manejo de errores**
- Base moderna con React 18 y Vite
- Desarrollo rápido y Hot Module Replacement (HMR)
- Estructura clara y escalable

---

## Requisitos

- Node.js >= 18
- npm >= 9 (o usar yarn/pnpm)

---

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

---

## Estructura del proyecto

```sh
src/
  components/         # Componentes reutilizables y de layout
    errors/           # Manejo de errores en MF
  microfrontends/     # Microfrontends cargados/ orquestados desde el host
  pages/              # Vistas principales de la aplicación host
  App.jsx             # Configuración principal de rutas/layout
  main.jsx            # Punto de entrada de la app
```

---

## ¿Cómo agregar un microfrontend?

1. Suma tu archivo/entrada MF en `src/microfrontends`.
2. Orquéstralo/importa y monta desde `App.jsx` o la página deseada.
3. Puedes envolver MF críticos en un ErrorBoundary para mayor robustez (`src/components/errors`).
4. Usar `HTTP POST` para toda comunicación con el backend (según la política del proyecto).

---

## Manejo de errores

Incluye componentes como `ErrorBoundary` para capturar caídas de microfrontends y mostrar mensajes amigables.

---

## Scripts principales

- `npm run dev` — Arranca el entorno de desarrollo con recarga al vuelo.
- `npm run build` — Build optimizado para producción.
- `npm run preview` — Corre una vista previa local del build.

---

## Notas y recomendaciones

- Los microfrontends deben ser lo más desacoplados posible.
- Considera la comunicación solo por eventos/props/HTTP POST.
- El código host debe permanecer simple y enfocado sólo en orquestar MFs.

---

## Licencia

MIT
