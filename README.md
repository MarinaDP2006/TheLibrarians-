# THE LIBRARIANS: CRÓNICAS DEL ANEXO
> Fan game web y aventura interactiva basada en el universo de *The Librarians* (las películas y la serie de televisión).

---

## 🏛️ Descripción del Proyecto
**Crónicas del Anexo** es una aventura narrativa y juego de rol por misiones desarrollado en JavaScript y CSS puros (sin dependencias pesadas externas), ambientado en la estética *Dark Academia* de la Biblioteca Metropolitana y el Anexo de Portland.

El jugador encarna a una nueva Bibliotecaria que organiza expediciones reclutando a personajes icónicos, resolviendo enigmas ancestrales, descifrando acertijos y enfrentándose a villanos para salvaguardar los artefactos mágicos del mundo.

---

## 🌟 Características Principales

### 1. Las 7 Crónicas Canónicas
- **Misión 1: La Lanza del Destino** *(Película 1: En busca de la lanza perdida)* — Contra Edward Wilde y la Hermandad de la Serpiente.
- **Misión 2: Las Minas del Rey Salomón** *(Película 2)* — En el Valle del Rift contra el General Samir.
- **Misión 3: La Maldición del Cáliz de Judas** *(Película 3)* — En Nueva Orleans contra el Profesor Lazlo y las huestes vampíricas.
- **Misión 4: El Árbol del Conocimiento** *(Serie: Temporada 1)* — La caída de la Biblioteca original, reclutamiento en el Anexo y duelo con Dulaque.
- **Misión 5: La Tempestad de Próspero** *(Serie: Temporada 2)* — Entidades de ficción liberadas por Próspero y conspiración con Moriarty.
- **Misión 6: El Dios del Caos** *(Serie: Temporada 3)* — La plaga de Apep, la Caja de Pandora y el asedio de la D.O.S.A.
- **Misión 7: El Vínculo** *(Serie: Temporada 4)* — El regreso de Nicole Noone tras 500 años y el ritual de anclaje permanente de la Biblioteca.

### 2. El Elenco (11 Personajes)
- **Flynn Carsen**: Magia, Arqueología, Idiomas.
- **Eve Baird**: Combate, Táctica, Liderazgo.
- **Jenkins (Sir Galahad)**: Alquimia, Historia, Magia.
- **Cassandra Cillian**: Cálculo, Geometría, Sinestesia.
- **Jacob Stone**: Arte, Arquitectura, Historia.
- **Ezekiel Jones**: Robo, Tecnología, Infiltración.
- **Nicole Noone**: Combate, Supervivencia, Sigilo.
- **Judson**: Sabiduría, Mentoría, Magia.
- **Charlene**: Gestión, Recursos, Táctica.
- **Emily Davenport**: Idiomas, Antropología, Historia.
- **Simone Renoir**: Música, Ocultismo, Combate.

### 3. Villanos (9 Amenazas) y Vitrina (9 Artefactos)
- Edward Wilde, General Samir, Profesor Lazlo, Dulaque, Morgan le Fay, Próspero, James Moriarty, Apep y Nicole Noone (Inmortal).
- La Lanza del Destino, Mapa de las Minas de Salomón, Cáliz de Judas, Árbol del Conocimiento, Excalibur, Báculo de Próspero, Caja de Pandora, El Vínculo y el Libro de Recortes.

### 4. Correcciones Técnicas Implementadas
- **Bloqueo estricto de habilidades**: Las opciones que requieren talentos que el equipo no posee quedan deshabilitadas visualmente y bloqueadas en JavaScript para evitar ejecuciones ilegítimas.
- **Motor de puzles blindado**: Protección antirrebote para evitar doble clic o procesamiento múltiple de respuestas; control estricto de temporizadores limpios; prevención de recompensas duplicadas.
- **Sistema de guardado seguro**: Guardado reactivo en `localStorage` (perfil, misiones, artefactos, escena actual, corazones, récords) y soporte completo para exportar e importar partidas en archivos JSON con validación de estructura.
- **Diseño responsive Dark Academia**: Optimizado para pantallas de PC, portátiles, tablets y móviles sin desbordamientos ni botones inaccesibles.

---

## 📁 Estructura del Repositorio
```text
TheLibrarians/
├── index.html                  # Punto de entrada y estructura semántica HTML5
├── css/
│   └── estilo.css              # Hoja de estilos (Dark academia, responsive, botones)
├── js/
│   ├── datos.js                # Base de datos de misiones, personajes, villanos y reliquias
│   └── juego.js                # Motor del juego, guardado JSON, puzles y habilidades
├── imagenes/                   # Directorio de recursos gráficos
│   ├── LEEME.md                # Manifiesto general de proporciones y formatos
│   ├── personajes/             # Fotografías 3:4 de los 11 personajes
│   ├── villanos/               # Fotografías 3:4 de los 9 antagonistas
│   ├── artefactos/             # Imágenes cuadradas 1:1 de los 9 artefactos
│   └── escenarios/             # Fondos panorámicos 16:9 de las 7 misiones
├── tests/
│   └── validate-project.mjs    # Suite de pruebas automatizadas en NodeJS
├── README.md                   # Esta documentación
└── GUIA-SUBIDA-Y-RENDER.md     # Guía paso a paso para GitHub y Render
```

---

## 🧪 Ejecución de Pruebas Automatizadas
Para verificar la integridad de todos los datos y enlaces:
```bash
node tests/validate-project.mjs
```
El test valida la coherencia de las 7 misiones, 11 personajes, habilidades requeridas, destinos de opciones, selectores del DOM y seguridad de guardado JSON.
