# PersonalPortfolio

Portfolio personal hecho con **Astro**, desarrollado con **Docker** (no necesitas
Node instalado en el Mac) y publicado en **GitHub Pages**.

## Desarrollo local

Solo necesitas Docker Desktop en marcha.

```bash
docker compose up          # http://localhost:4321  (con hot-reload)
docker compose down        # parar
```

O con el Makefile:

| Comando          | Qué hace                                        |
|------------------|-------------------------------------------------|
| `make up`        | Servidor de desarrollo en http://localhost:4321 |
| `make down`      | Para los contenedores                           |
| `make build`     | Genera el sitio estático en `./dist`            |
| `make preview`   | Sirve `./dist` en http://localhost:4322         |
| `make shell`     | Shell dentro del contenedor                     |
| `make install PKG=paquete` | Añade una dependencia npm             |

> Al añadir o cambiar dependencias hay que reconstruir la imagen:
> `docker compose build`

## Editar el contenido

Todo vive en **`src/data/cv.js`**: perfil, enlaces, sobre mí, experiencia,
proyectos y stack. No hace falta tocar HTML.

Los estilos y la paleta (modo claro y oscuro) están en `src/styles/global.css`,
en las variables CSS de `:root`.

## Publicar en GitHub Pages

1. Crea el repositorio en GitHub.
   - **Sitio de usuario**: llámalo `TU-USUARIO.github.io` → queda en
     `https://TU-USUARIO.github.io`
   - **Repo de proyecto**: p. ej. `PersonalPortfolio` → queda en
     `https://TU-USUARIO.github.io/PersonalPortfolio`

2. Ajusta `astro.config.mjs`:
   - `site`: la URL final.
   - `base`: **solo** si es repo de proyecto (`base: '/PersonalPortfolio'`).

3. Sube el código:

   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin git@github.com:TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

4. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   Si lo dejas en "Deploy from a branch", GitHub intentará procesarlo con Jekyll
   y no funcionará.

5. El workflow `.github/workflows/deploy.yml` despliega en cada push a `main`.
   El progreso se ve en la pestaña **Actions**.

## Dominio propio (danir.dev)

1. Crea `public/CNAME` con una única línea: `danir.dev`
2. `site: 'https://danir.dev'` y sin `base` en `astro.config.mjs`.
3. DNS apuntando a GitHub Pages:
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - o `CNAME` de `www` → `TU-USUARIO.github.io`
4. **Settings → Pages → Custom domain**: escribe el dominio y marca *Enforce HTTPS*.
