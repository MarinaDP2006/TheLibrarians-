# Crónicas del Anexo
**Fan game web inspirado en *The Librarians*** (las películas y la serie). Juego de aventura por misiones, en español, para móvil, tablet, PC y Mac.

---

##  Qué incluye
- **7 misiones**:
  - Películas: *La Lanza del Destino*, *Las Minas del Rey Salomón* y *La Maldición del Cáliz de Judas*.
  - Serie, temporadas 1 a 4: *El Árbol del Conocimiento*, *La Tempestad de Próspero*, *El Dios del Caos* y *El Vínculo*.
- **El Anexo** como base:
  - Libro de misiones en una estantería.
  - Equipo.
  - Vitrina de artefactos.
  - Archivo de villanos.
- **11 personajes** con habilidades: Flynn, Eve, Jenkins, Cassandra, Stone, Ezekiel, Nicole, Judson, Charlene, Emily y Simone.
- **9 villanos**: Wilde, Samir, Lazlo, Dulaque, Morgan le Fay, Próspero, Moriarty, Apep y Nicole inmortal.
- **Acertijos, cifrados César, secuencias de memoria y preguntas** sobre historia, arte y mitología.
- **Decisiones que dependen del equipo.** Algunas opciones solo aparecen si llevas a la persona con esa habilidad (Combate, Cálculo, Arte, Robo, Magia…).
- **Corazones y conocimiento.** Los aciertos dan 📖 y los fallos cuestan ❤️.
- **Guardado automático** en el navegador.
- **Certificado final** de Bibliotecaria.

## Cómo jugar

### En el PC o el Mac
1. Descarga el repo: botón verde **Code → Download ZIP** y descomprímelo.
2. Abre `index.html` con Chrome, Edge, Firefox o Safari.

### En el móvil con APK
Se descargarse con un Actions en GitHub cuando esté disponible y creado. 

## Poner tus imágenes
1. Abre la carpeta [`imagenes/`](imagenes/LEEME.md). Está separada en:
   - [`personajes/`](imagenes/personajes/LEEME.md): 11 fotos verticales.
   - [`villanos/`](imagenes/villanos/LEEME.md): 9 fotos verticales.
   - [`escenarios/`](imagenes/escenarios/LEEME.md): 31 fondos horizontales, uno por escena.
   - [`artefactos/`](imagenes/artefactos/LEEME.md): 9 imágenes cuadradas.
2. Cada carpeta tiene un `LEEME.md` con el **nombre exacto** que debe tener cada archivo (por ejemplo `flynn.jpg`).
3. Copia tus imágenes en **.jpg** con ese nombre y recarga el juego.

Para subirlas desde GitHub: entra en la carpeta, pulsa **Add file → Upload files**, arrastra las imágenes y pulsa **Commit changes**.

## Estructura

```
index.html          → página del juego
css/estilo.css      → diseño (dark academia, pergamino y oro)
js/datos.js         → personajes, villanos, artefactos y misiones
js/juego.js         → motor: escenas, equipo, puzles y guardado
imagenes/           → tus imágenes, separadas por tipo
```

## Añadir o cambiar misiones
Todo el contenido está en `js/datos.js`. Cada misión tiene escenas, y cada escena tiene opciones. Una opción puede:
- llevar a otra escena (`ir:'b'`),
- necesitar una habilidad (`nec:'calculo'`),
- costar corazones (`coste:1`),
- dar conocimiento (`gana:2`),
- abrir un puzle (`puzle:{tipo:'acertijo' | 'cifrado' | 'secuencia' | 'test', …}`),
- o terminar la misión (`fin:true`).
