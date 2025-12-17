# Users Microfrontend App

Aplicación en React para la **gestión de usuarios**, enfocada en arquitectura modular y preparada como **microfrontend** (`Module Federation`) para integrarse en aplicaciones más grandes.

---

## Características

- **Listado de usuarios** con detalles individuales (modal con datos completos)
- **Búsqueda** de usuarios por nombre con validación y UX amigable
- **Paginación** y ajuste dinámico de tamaño de página
- **Microfrontend**: Listado y gestión de usuarios expuestos como módulo federado, integrable e independiente
- **Estados de carga y error** manejados y visibles para el usuario
- Arquitectura separada por features:
  - Componentes reutilizables con estilos aislados (`CSS Modules`)
  - Hooks personalizados (lógica desacoplada)
  - Servicios API y utilidades
- **Preparada para escalabilidad y migración a TypeScript**
- Buenas prácticas de accesibilidad básica y validaciones de props

---

## Estructura de carpetas

```text
src/
├── components/
│   ├── base/
│   ├── pagination/
│   ├── searchBar/
│   ├── userCard/
│   ├── userList/
│   └── userModal/
├── hooks/
│   ├── useUsers.js
│   └── useSearchForm.js
├── pages/
│   └── userPage/
│       └── UsersPage.jsx
├── services/
│   └── users.api.js
├── utils/
│   └── pagination.utils.js
├── validation/
│   └── searchValidation.js
├── propTypes/
│   └── user.js
├── global.css
└── main.jsx
```

---

## Instalación y uso local

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

   o (según tu config)

   ```bash
   npm run dev
   ```

3. Abre [http://localhost:5173](http://localhost:5173) o tu puerto configurado.

> **Requiere:** Servidor backend REST en `http://localhost:3001/users` para datos de usuario (puedes usar JSON Server o tu propio backend).

---

## Microfrontend

El módulo de gestión de usuarios está preparado como **microfrontend** (módulo federado Vite/Webpack). Puede ser cargado en cualquier host compatible mediante el archivo `remoteEntry.js` generado en `dist/assets/`.

### Integración ejemplo con módulo federado

```js
// En la app host (Webpack, Vite...)
// Carga UsersApp como remoto y úsalo así:
import('usersApp/UsersPage').then((mod) => {
  const UsersPage = mod.default;
  // Renderízalo o pásale eventos/props según tu shell
});
```

_Asegúrate de que el host reconoce el remote y comparte react/react-dom como dependencias federadas._

---

## Scripts principales

- `npm start` / `npm run dev` — Desarrollar localmente
- `npm run build` — Construye el microfrontend para producción
- `npm run lint` — Lint de código JS

## Licencia

MIT
