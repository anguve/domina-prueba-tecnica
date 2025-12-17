# Proyecto: User Management Microfrontends

Este repositorio contiene una solución simple basada en arquitectura de microfrontends: hay un backend (API REST con Express) y dos aplicaciones front-end (host principal y un microfrontend de usuarios), ambas usando React y Vite.

---

## Estructura principal

```
b\Pruebas-tecnicas\domina\
├── back\           # Backend Express: API REST para usuarios
├── frontend\
│   ├── host-app\   # App principal (Host) que orquesta microfrontends
│   └── users-mf\   # Microfrontend de gestión de usuarios
```

---

## Backend (back\)

- **Express** sirve la ruta `/users` para obtener usuarios, admite paginación y búsqueda.
- Corre en `http://localhost:3001`.

### Ejecución backend:

```bash
cd back
npm install
npm start
```

---

## Frontend principal (host-app\)

- App React + Vite que carga microfrontends por Module Federation.
- Corre en `http://localhost:5173` (por defecto).

### Ejecución host-app:

```bash
cd frontend/host-app
npm install
npm run dev
```

---

## Microfrontend de usuarios (users-mf\)

- App React para mostrar/buscar/paginar usuarios.
- Preparado como módulo federado (puede integrarse en el host o por separado).

### Ejecución users-mf:

```bash
cd frontend/users-mf
npm install
npm run dev
```

```bash
cd frontend/users-mf
npm install
npm run build
npm run preview
```

---

## ¿Cómo se conecta todo?

- **El backend** provee el endpoint `/users`.
- **users-mf** consume la API para mostrar usuarios y lo expone como microfrontend.
- **host-app:** orquesta y muestra los microfrontends.

---

## Notas simples

- Levanta siempre el backend antes del front para evitar errores de datos.
- El puerto del backend y frontend pueden cambiar, revisa la config si cambias algo.
- Todo el código es JS (puedes migrar fácil a TS si lo deseas).
- Puedes modificar usuarios en el archivo `back/users.data.js` para probar.

---

## Requisitos

- Node.js >= 18

---

## Licencia

MIT
