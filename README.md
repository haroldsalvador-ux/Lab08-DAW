# Lab 08 – Desarrollo de Aplicaciones Web Avanzado
**Despliegue de aplicaciones con JWT** · Harold Salvador

| Carpeta | Descripción | Render (Root Directory) | Secret de GitHub |
|---|---|---|---|
| `express-mongo-cloud/` | API CRUD de usuarios con Express + MongoDB Atlas (laboratorio guiado) | `express-mongo-cloud` | `RENDER_DEPLOY_HOOK_URL` |
| `express-auth-salvador/` | API con autenticación JWT del Lab 07 (tarea) | `express-auth-salvador` | `RENDER_DEPLOY_HOOK_URL_AUTH` |

## Ejecutar en local
```bash
cd express-mongo-cloud   # o express-auth-salvador
cp .env.example .env     # completar la cadena de MongoDB Atlas
npm install
npm run dev
```

## CI/CD
Los workflows en `.github/workflows/` llaman al Deploy Hook de Render en cada push a `main` que modifique la carpeta del proyecto.

## Render
- Build Command: `npm install`
- Start Command: `npm start`
- Variables de entorno: las de `.env.example` de cada proyecto.
