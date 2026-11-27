# Guía de Publicación: The Librarians · Crónicas del Anexo

## 1. Actualización en tu repositorio
1. Descomprime los archivos del paquete integrado en tu equipo.
2. Sube los archivos actualizados (`index.html`, carpeta `css`, carpeta `js`, carpeta `imagenes`, carpeta `tests` y `README.md`) a tu repositorio.
3. Confirma los cambios (commit) en la rama principal (`main`).

## 2. Publicación en la plataforma de alojamiento (Render)
El proyecto es una aplicación web estática pura (HTML5, CSS y JavaScript):
1. En la configuración del servicio estático, asegúrate de que la rama de despliegue sea `main`.
2. El directorio raíz (`Root Directory`) y el directorio de publicación (`Publish Directory`) deben apuntar a la raíz del proyecto (`.` o en blanco).
3. No requiere comando de compilación (`Build Command`).
4. Al detectar la nueva confirmación en la rama principal, el servicio se desplegará de forma automática y pasará a estar activo.
