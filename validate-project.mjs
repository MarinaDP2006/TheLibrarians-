import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import vm from "node:vm";

const dataSource = readFileSync(new URL("../js/datos.js", import.meta.url), "utf8");
const data = vm.runInNewContext(
  dataSource + "\n;({ PERSONAJES, VILLANOS, ARTEFACTOS, MISIONES });",
  {},
);

assert.equal(Object.keys(data.PERSONAJES).length, 11, "Deben existir 11 personajes.");
assert.equal(Object.keys(data.VILLANOS).length, 9, "Deben existir 9 villanos.");
assert.equal(Object.keys(data.ARTEFACTOS).length, 9, "Deben existir 9 artefactos.");
assert.equal(data.MISIONES.length, 7, "Deben existir 7 misiones.");

const imagePaths = new Set();
const puzzleTypes = new Set(["acertijo", "cifrado", "secuencia", "test"]);
const missionIds = new Set(data.MISIONES.map((mission) => mission.id));
assert.equal(missionIds.size, data.MISIONES.length, "Los IDs de misión deben ser únicos.");

for (const [id, person] of Object.entries(data.PERSONAJES)) {
  assert.ok(person.nombre && person.rol && person.hab, "Personaje incompleto: " + id);
  if (person.img) imagePaths.add(person.img);
}
for (const [id, villain] of Object.entries(data.VILLANOS)) {
  assert.ok(villain.nombre && villain.rol, "Villano incompleto: " + id);
  if (villain.img) imagePaths.add(villain.img);
}
for (const [id, artifact] of Object.entries(data.ARTEFACTOS)) {
  assert.ok(artifact.nombre && artifact.desc, "Artefacto incompleto: " + id);
  if (artifact.img) imagePaths.add(artifact.img);
}

for (const mission of data.MISIONES) {
  assert.ok(data.VILLANOS[mission.villano], "Villano inexistente en " + mission.id);
  assert.ok(data.ARTEFACTOS[mission.premio], "Premio inexistente en " + mission.id);

  for (const member of [...(mission.equipo || []), ...(mission.candidatos || [])]) {
    assert.ok(data.PERSONAJES[member], "Personaje inexistente en " + mission.id + ": " + member);
  }

  const scenes = mission.escenas || {};
  assert.ok(scenes[mission.inicio], "Escena inicial inexistente en " + mission.id);
  let hasEnding = false;

  for (const [sceneId, scene] of Object.entries(scenes)) {
    assert.ok(Array.isArray(scene.op) && scene.op.length > 0,
      "Escena sin opciones: " + mission.id + "/" + sceneId);
    if (scene.img) imagePaths.add(scene.img);

    for (const option of scene.op) {
      if (option.fin) hasEnding = true;

      if (option.ir) {
        assert.ok(scenes[option.ir],
          "Destino inexistente: " + mission.id + "/" + sceneId + " -> " + option.ir);
      }

      if (option.nec) {
        assert.ok(Object.values(data.PERSONAJES).some((person) => person.hab === option.nec),
          "Habilidad sin personaje: " + mission.id + "/" + option.nec);
      }

      if (option.puzle) {
        const puzzle = option.puzle;
        assert.ok(puzzleTypes.has(puzzle.tipo),
          "Tipo de puzle desconocido: " + mission.id + "/" + puzzle.tipo);

        if (puzzle.tipo === "test") {
          assert.ok(Array.isArray(puzzle.o) && Number.isInteger(puzzle.c) &&
            puzzle.c >= 0 && puzzle.c < puzzle.o.length,
            "Pregunta mal configurada: " + mission.id + "/" + sceneId);
        }

        if (puzzle.tipo === "secuencia") {
          assert.ok(Array.isArray(puzzle.s) && Array.isArray(puzzle.orden) &&
            puzzle.orden.length > 0 &&
            puzzle.orden.every((index) => Number.isInteger(index) &&
              index >= 0 && index < puzzle.s.length),
            "Secuencia mal configurada: " + mission.id + "/" + sceneId);
        }

        if (["acertijo", "cifrado"].includes(puzzle.tipo)) {
          assert.ok(Array.isArray(puzzle.r) && puzzle.r.length > 0,
            "Puzle sin respuestas: " + mission.id + "/" + sceneId);
        }
      }
    }
  }

  assert.ok(hasEnding, "La misión no tiene opción de finalización: " + mission.id);
}

const missingImages = [...imagePaths].filter((path) =>
  !existsSync(new URL("../" + path, import.meta.url))
);

console.log("Validación correcta: 11 personajes, 9 villanos, 9 artefactos y 7 misiones.");
console.log("Referencias únicas de imágenes: " + imagePaths.size + ".");
console.log("Archivos de imagen ausentes: " + missingImages.length + ".");

if (missingImages.length) {
  console.warn("Las imágenes ausentes se notifican, pero no bloquean la validación:");
  for (const path of missingImages) console.warn(" - " + path);
}
