# Primera entrega técnica: validación y publicación

Esta entrega añade comprobaciones automáticas sin cambiar todavía el motor del juego ni borrar datos.

## Archivos incluidos

- `.github/workflows/validate.yml`: ejecuta las comprobaciones en cada push a `main` y en cada pull request.
- `tests/validate-project.mjs`: comprueba la estructura de personajes, villanos, artefactos, misiones, escenas, habilidades, puzles y destinos.
- `docs/GUIA-SUBIDA-Y-RENDER.md`: esta guía.

## Cómo subir los archivos desde GitHub

1. Descarga y descomprime el ZIP en tu dispositivo.
2. Abre el repositorio `MarinaDP2006/TheLibrarians-` en GitHub.
3. Entra en `Add file` → `Upload files`.
4. Sube los archivos conservando las carpetas y rutas exactas. Si GitHub móvil no conserva las carpetas, crea primero cada carpeta mediante `Add file` → `Create new file` y escribe la ruta completa, por ejemplo `.github/workflows/validate.yml`.
5. Escribe como mensaje: `Añadir validación automática del proyecto`.
6. Para proteger `main`, crea una rama desde la pantalla de subida si GitHub ofrece esa opción y abre un pull request. Si solo puedes subir directamente a `main`, revisa los tres archivos antes de confirmar.

No subas el ZIP dentro del repositorio esperando que GitHub lo descomprima: GitHub almacena el ZIP como un archivo normal.

## Cómo comprobar que las pruebas funcionan

1. Abre la pestaña `Actions` del repositorio.
2. Entra en el flujo `Validar proyecto`.
3. Espera a que termine el trabajo `validar`.
4. Debe quedar en verde. Si falla, abre el paso rojo y copia el error completo antes de modificar nada.

Las imágenes ausentes se muestran como advertencias y no bloquean esta primera validación. Así se puede incorporar la comprobación ahora sin que la falta actual de imágenes impida ejecutar el resto de pruebas.

## Cómo publicar en Render

Primero comprueba en Render que el servicio está conectado a este repositorio y que su rama de despliegue es `main`.

- Si Render tiene activado `Auto-Deploy`, un cambio integrado en `main` debería iniciar un despliegue.
- Si no se inicia, abre el servicio en Render y utiliza `Manual Deploy` → `Deploy latest commit`.
- No cambies a ciegas el `Build Command` ni el `Publish Directory`: deben coincidir con la configuración real del servicio. Este proyecto es una web estática con `index.html` en la raíz y carpetas `css/`, `js/` e `imagenes/`.
- Cuando termine el despliegue, abre la URL pública y recarga sin caché. Comprueba que la portada aparece y que el navegador no muestra errores 404 para `css/estilo.css`, `js/datos.js` o `js/juego.js`.

## Qué no hace esta entrega

- No incorpora todavía las 60 imágenes previstas.
- No convierte la web en APK.
- No reescribe las siete misiones.
- No cambia el sistema de guardado.
- No garantiza que Render esté conectado o configurado correctamente; eso se comprueba en el panel del servicio.

Esta es una primera entrega de calidad: añade una red de seguridad antes de realizar cambios más profundos en el motor.
