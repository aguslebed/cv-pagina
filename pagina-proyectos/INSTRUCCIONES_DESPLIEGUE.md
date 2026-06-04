# Guía de Despliegue en GitHub Pages 🚀

Esta guía detalla los pasos para subir tus cambios y publicar la última versión de tu portafolio en **GitHub Pages**.

> [!NOTE]
> Los cambios locales para corregir las advertencias de compilación y los íconos ya han sido guardados localmente en un commit. Solo necesitas subirlos a tu repositorio remoto y ejecutar el comando de despliegue.

---

### Paso 1: Subir los cambios a GitHub (Push)

Abre tu terminal en el directorio del proyecto y ejecuta el siguiente comando para enviar el último commit a tu repositorio remoto en la rama principal (`main`):

```bash
git push origin main
```

*Si la terminal te solicita tu nombre de usuario y contraseña o un token de acceso personal (Personal Access Token), ingrésalos para autenticarte.*

---

### Paso 2: Desplegar en GitHub Pages 🌐

El proyecto está configurado para compilar y desplegar automáticamente usando la biblioteca `gh-pages`. Para publicar el sitio, ejecuta:

```bash
npm run deploy
```

#### ¿Qué hace este comando internamente?
1. **`predeploy` (`npm run build`)**: Compila todo el código del portafolio (React, Tailwind CSS, etc.) y genera la carpeta de producción `dist` optimizada y lista para web.
2. **`deploy` (`gh-pages -d dist`)**: Toma el contenido de la carpeta `dist` y lo sube de manera automatizada a la rama `gh-pages` de tu repositorio de GitHub para que sea servido en internet.

---

### Paso 3: Verificar tu sitio web 🔍

Una vez completado el comando anterior de forma exitosa, tu portafolio actualizado estará disponible públicamente en unos minutos en la URL de tu GitHub Pages:

👉 **[https://aguslebed.github.io/cv-pagina/](https://aguslebed.github.io/cv-pagina/)**

> [!TIP]
> Si no ves los cambios inmediatamente al entrar, intenta recargar la página limpiando la caché del navegador presionando `Ctrl + F5` (o `Cmd + Shift + R` en Mac).
