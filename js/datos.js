/* =========================================================
   CRÓNICAS DEL ANEXO — fan game inspirado en The Librarians
   Datos: personajes, villanos, artefactos y misiones.
   Imágenes: pon tus archivos en /imagenes/... con el nombre
   indicado en "img" y el juego los usará solo.
   ========================================================= */

const PERSONAJES = {
  flynn:{nombre:'Flynn Carsen',rol:'El Bibliotecario',hab:'deduccion',habTxt:'Deducción · descifra textos, historia y artefactos',
    img:'imagenes/personajes/flynn.jpg',grad:'linear-gradient(160deg,#6b4a22,#24160c)',
    bio:'Eterno estudiante con más de veinte títulos universitarios. La Biblioteca lo eligió para proteger los artefactos mágicos del mundo. Habla rápido, se emociona con cualquier dato y es capaz de sacrificarlo todo por los suyos.'},
  judson:{nombre:'Judson',rol:'El Mentor',hab:'sabiduria',habTxt:'Sabiduría · consejos y enigmas',
    img:'imagenes/personajes/judson.jpg',grad:'linear-gradient(160deg,#5a4a3a,#1e1812)',
    bio:'Bibliotecario veterano y guía de Flynn. Siempre parece saber más de lo que cuenta y responde con acertijos.'},
  charlene:{nombre:'Charlene',rol:'La Administradora',hab:'orden',habTxt:'Orden · presupuestos, archivos y normas',
    img:'imagenes/personajes/charlene.jpg',grad:'linear-gradient(160deg,#5a3a4a,#1e1218)',
    bio:'Lleva la Biblioteca con mano de hierro y una agenda impecable. Nadie gasta un céntimo sin que ella lo sepa.'},
  nicole:{nombre:'Nicole Noone',rol:'La Guardiana',hab:'combate',habTxt:'Combate · protege al equipo en peleas',
    img:'imagenes/personajes/nicole.jpg',grad:'linear-gradient(160deg,#6a2a2a,#1e0c0c)',
    bio:'Guardiana del Bibliotecario en su primera gran misión. Experta en lucha, tozuda y muy rápida.'},
  emily:{nombre:'Emily Davenport',rol:'La Arqueóloga',hab:'arqueologia',habTxt:'Arqueología · ruinas, mapas y lenguas antiguas',
    img:'imagenes/personajes/emily.jpg',grad:'linear-gradient(160deg,#7a5a2a,#24180c)',
    bio:'Arqueóloga valiente y testaruda que se cruza con Flynn en la búsqueda de las Minas del Rey Salomón.'},
  simone:{nombre:'Simone Renoir',rol:'La Cantante',hab:'noche',habTxt:'Noche · ve en la oscuridad y conoce lo sobrenatural',
    img:'imagenes/personajes/simone.jpg',grad:'linear-gradient(160deg,#3a1a3a,#120812)',
    bio:'Cantante de Nueva Orleans con un secreto antiguo. Su voz llena los clubes de jazz y su pasado, las leyendas.'},
  eve:{nombre:'Eve Baird',rol:'La Guardiana',hab:'combate',habTxt:'Combate · protege al equipo en peleas',
    img:'imagenes/personajes/eve.jpg',grad:'linear-gradient(160deg,#2a4a6a,#0c1624)',
    bio:'Coronel experta en antiterrorismo, reclutada como Guardiana. Práctica, directa y la que mantiene unido al equipo.'},
  jenkins:{nombre:'Jenkins',rol:'El Cuidador del Anexo',hab:'magia',habTxt:'Magia antigua · rituales, leyendas y caballería',
    img:'imagenes/personajes/jenkins.jpg',grad:'linear-gradient(160deg,#4a4a4a,#141414)',
    bio:'Cuida del Anexo entre té, libros y quejas elegantes. Mucho más viejo de lo que aparenta, y con un pasado de caballero.'},
  cassandra:{nombre:'Cassandra Cillian',rol:'La Matemática',hab:'calculo',habTxt:'Cálculo · números, patrones y física',
    img:'imagenes/personajes/cassandra.jpg',grad:'linear-gradient(160deg,#6a3a5a,#1e0c18)',
    bio:'Genio de las matemáticas con sinestesia: ve los números como colores y sonidos. Dulce, brillante y más valiente de lo que cree.'},
  stone:{nombre:'Jacob Stone',rol:'El Historiador del Arte',hab:'arte',habTxt:'Arte e historia · arquitectura, pintura y épocas',
    img:'imagenes/personajes/stone.jpg',grad:'linear-gradient(160deg,#6a4a2a,#1e140c)',
    bio:'Trabajador del petróleo de Oklahoma con una mente de erudito en arte y arquitectura. Tiene puños y tiene cerebro.'},
  ezekiel:{nombre:'Ezekiel Jones',rol:'El Ladrón',hab:'robo',habTxt:'Robo y tecnología · cerraduras, cajas fuertes y sistemas',
    img:'imagenes/personajes/ezekiel.jpg',grad:'linear-gradient(160deg,#2a5a4a,#0c1e18)',
    bio:'Ladrón internacional y genio de la tecnología. Presumido, encantador… y siempre con un plan para salir de cualquier sitio.'}
};

const VILLANOS = {
  wilde:{nombre:'Edward Wilde',rol:'Hermandad de la Serpiente',img:'imagenes/villanos/edward-wilde.jpg',e:'🐍',bio:'Un antiguo aliado de la Biblioteca que se pasa al lado de la Hermandad de la Serpiente.'},
  samir:{nombre:'General Samir',rol:'Mercenario',img:'imagenes/villanos/general-samir.jpg',e:'⚔️',bio:'Militar sin escrúpulos que quiere el poder de las Minas del Rey Salomón.'},
  lazlo:{nombre:'Profesor Lazlo',rol:'El Conde',img:'imagenes/villanos/profesor-lazlo.jpg',e:'🦇',bio:'Un profesor encantador que esconde una identidad oscura y muy antigua.'},
  dulaque:{nombre:'Dulaque',rol:'Líder de la Hermandad',img:'imagenes/villanos/dulaque.jpg',e:'🗡️',bio:'Elegante líder de la Hermandad de la Serpiente, con un pasado legendario de caballero.'},
  morgan:{nombre:'Morgan le Fay',rol:'La Hechicera',img:'imagenes/villanos/morgan-le-fay.jpg',e:'🔮',bio:'Hechicera de las leyendas artúricas, imprevisible y peligrosísima.'},
  prospero:{nombre:'Próspero',rol:'El Mago Shakespeariano',img:'imagenes/villanos/prospero.jpg',e:'📜',bio:'Escapado de las páginas de Shakespeare, quiere reescribir el mundo a su gusto.'},
  moriarty:{nombre:'Moriarty',rol:'El Profesor del Crimen',img:'imagenes/villanos/moriarty.jpg',e:'🎩',bio:'El genio del crimen salido de la ficción, al servicio de Próspero… o eso dice.'},
  apep:{nombre:'Apep',rol:'El Dios del Caos',img:'imagenes/villanos/apep.jpg',e:'🌑',bio:'Antigua serpiente egipcia del caos que busca un cuerpo para volver al mundo.'},
  noone:{nombre:'Nicole Noone (inmortal)',rol:'La Guardiana perdida',img:'imagenes/villanos/nicole-inmortal.jpg',e:'⏳',bio:'La antigua Guardiana, atrapada siglos en el tiempo y con muchas cuentas pendientes con la Biblioteca.'}
};

const ARTEFACTOS = {
  lanza:{nombre:'La Lanza del Destino',e:'🔱',img:'imagenes/artefactos/lanza-del-destino.jpg',desc:'Dividida en tres piezas. Unida, otorga un poder enorme a quien la empuñe.'},
  mapa:{nombre:'Mapa de las Minas de Salomón',e:'🗺️',img:'imagenes/artefactos/mapa-minas-salomon.jpg',desc:'Señala el camino a las legendarias minas del rey sabio.'},
  caliz:{nombre:'El Cáliz de Judas',e:'🏆',img:'imagenes/artefactos/caliz-de-judas.jpg',desc:'Copa maldita ligada a las leyendas de los vampiros.'},
  rama:{nombre:'Rama del Árbol del Conocimiento',e:'🌳',img:'imagenes/artefactos/arbol-del-conocimiento.jpg',desc:'De ella puede volver a crecer la Biblioteca entera.'},
  excalibur:{nombre:'Excalibur',e:'🗡️',img:'imagenes/artefactos/excalibur.jpg',desc:'La espada legendaria… con vida propia y muy leal a Flynn.'},
  baculo:{nombre:'El Báculo de Próspero',e:'🪄',img:'imagenes/artefactos/baculo-de-prospero.jpg',desc:'Con él, un autor podría reescribir la realidad.'},
  pandora:{nombre:'La Caja de Pandora',e:'📦',img:'imagenes/artefactos/caja-de-pandora.jpg',desc:'Mejor no abrirla. Salvo que sea absolutamente necesario.'},
  vinculo:{nombre:'El Vínculo de la Biblioteca',e:'🔗',img:'imagenes/artefactos/vinculo.jpg',desc:'El lazo que une a un Bibliotecario, una Guardiana y la Biblioteca.'},
  libro:{nombre:'El Libro de los Recortes',e:'📖',img:'imagenes/artefactos/libro-de-recortes.jpg',desc:'El libro que avisa a los Bibliotecarios de dónde despierta la magia.'}
};

/* ----- MISIONES -----
 Cada escena: lugar, emoji, texto, opciones.
 Opción: {t, ir, nec:'habilidad', coste:corazones, gana:conocimiento, puzle:{...}, fin:true}
 Puzles: acertijo (respuestas), cifrado (código + respuestas), secuencia (símbolos + orden), test (opciones + correcta)
*/
const MISIONES = [
{
 id:'m1',titulo:'La Lanza del Destino',origen:'Película · 2004',icono:'🔱',color:'#7a3a1c',
 equipo:['flynn','nicole'],elegir:0,premio:'lanza',villano:'wilde',
 resumen:'Tu primer día como Bibliotecario. Alguien ha robado una pieza de la Lanza del Destino y la Hermandad de la Serpiente quiere las otras dos.',
 inicio:'a',
 escenas:{
  a:{lugar:'Biblioteca Metropolitana',e:'✉️',img:'imagenes/escenarios/m1-biblioteca.jpg',
   txt:`<p>Flynn Carsen tiene más títulos universitarios que pares de calcetines. Su profesor lo echa de clase para que "viva un poco", y esa misma noche llega una invitación sin remitente: <em>"Has sido seleccionado"</em>.</p><p>En la entrevista, una mujer seria, <b>Charlene</b>, mira su currículum sin pestañear. Detrás, un anciano sonriente, <b>Judson</b>, plantea una pregunta.</p><span class="who">Judson</span><p>"Tengo hojas pero no soy árbol. Tengo lomo pero no soy animal. ¿Qué soy?"</p>`,
   op:[{t:'Responder al acertijo',puzle:{tipo:'acertijo',q:'Tengo hojas pero no soy árbol. Tengo lomo pero no soy animal. ¿Qué soy?',r:['libro','un libro','el libro'],pista:'Estás rodeado de miles.'},ir:'b',gana:2}]},
  b:{lugar:'La Biblioteca secreta',e:'🏛️',img:'imagenes/escenarios/m1-biblioteca-secreta.jpg',
   txt:`<p>Judson abre una puerta tras un ascensor imposible. Aparece una sala infinita: el Arca, la Caja de Pandora, Excalibur… <em>"Bienvenido a la Biblioteca. Protegemos lo que el mundo no está preparado para tener."</em></p><p>De pronto saltan las alarmas: la <b>Hermandad de la Serpiente</b> ha robado una de las tres piezas de la <b>Lanza del Destino</b>. Judson te entrega un viejo diario: las otras dos piezas siguen escondidas.</p>`,
   op:[{t:'Estudiar el diario antes de salir',nec:'deduccion',puzle:{tipo:'test',q:'El diario dice que la Lanza se dividió para que nadie la usara. ¿Por qué es tan peligrosa unida?',o:['Porque es muy pesada','Porque da un poder enorme a quien la empuñe','Porque está maldita y oxida el metal','Porque abre portales al Anexo'],c:1},ir:'c',gana:2},
       {t:'Salir corriendo detrás de los ladrones',ir:'c',coste:1}]},
  c:{lugar:'Selva del Amazonas',e:'🌿',img:'imagenes/escenarios/m1-amazonas.jpg',
   txt:`<p>El diario te lleva a la selva. Allí aparece tu nueva <b>Guardiana</b>, <b>Nicole Noone</b>: rápida, borde y con muy poca paciencia para un ratón de biblioteca.</p><p>La pieza está en un templo. El suelo está lleno de losas con símbolos. Una inscripción avisa: <em>"Pisa como gira el cielo."</em></p>`,
   op:[{t:'Cruzar las losas en orden',puzle:{tipo:'secuencia',q:'Memoriza el orden en que se iluminan las losas y repítelo.',s:['☀️','🌙','⭐','🐍'],orden:[0,2,1,0,3]},ir:'d',gana:2},
       {t:'Que Nicole abra paso a golpes',nec:'combate',ir:'d',coste:1,gana:0}]},
  d:{lugar:'Himalaya',e:'🏔️',img:'imagenes/escenarios/m1-himalaya.jpg',
   txt:`<p>Con la segunda pieza en la mochila, el diario señala las montañas. Una nota cifrada de un antiguo Bibliotecario marca el destino final. Cada letra está desplazada tres posiciones en el alfabeto.</p>`,
   op:[{t:'Descifrar la nota',puzle:{tipo:'cifrado',q:'Cifrado César: cada letra avanzó 3 posiciones (A→D). ¿Qué lugar escondido dice?',code:'VKDQJUL-OD',r:['shangri-la','shangrila','shangri la'],pista:'Un paraíso perdido en las montañas.'},ir:'e',gana:3}]},
  e:{lugar:'Templo de la Lanza',e:'🐍',img:'imagenes/escenarios/m1-final.jpg',
   txt:`<p>En el santuario os espera <b>Edward Wilde</b>, con la Hermandad detrás y la primera pieza en la mano. Quiere las tres.</p><span class="who">Edward Wilde</span><p>"La Biblioteca colecciona poder y lo esconde. Yo pienso usarlo."</p>`,
   op:[{t:'Distraerlo con lógica y arrebatarle la pieza',nec:'deduccion',puzle:{tipo:'test',q:'Para detener a Wilde sin que nadie salga herido, ¿qué haces?',o:['Le das la Lanza y huyes','Separas las piezas para que nunca pueda unirlas','Le retas a un duelo de espadas','Rompes el templo'],c:1},fin:true,gana:3},
       {t:'Nicole se lanza contra la Hermandad',nec:'combate',fin:true,coste:1}]}
 },
 final:'Las tres piezas vuelven a la Biblioteca, separadas para siempre. Judson sonríe: "Bienvenido, Bibliotecario".'
},
{
 id:'m2',titulo:'Las Minas del Rey Salomón',origen:'Película · 2006',icono:'🗺️',color:'#8a6a2a',
 equipo:['flynn','emily'],elegir:0,premio:'mapa',villano:'samir',
 resumen:'Un paquete misterioso trae un fragmento de mapa. Un general sin escrúpulos quiere las Minas de Salomón… y su poder.',
 inicio:'a',
 escenas:{
  a:{lugar:'El Anexo',e:'📦',img:'imagenes/escenarios/m2-paquete.jpg',
   txt:`<p>Flynn recibe un paquete sin remitente: dentro, un trozo de mapa antiquísimo. Charlene lo fulmina con la mirada: <em>"¿Sabes lo que cuesta un viaje a África?"</em> Judson, en cambio, solo deja otro enigma.</p><span class="who">Judson</span><p>"Cuanto más le quitas, más grande se hace. ¿Qué es?"</p>`,
   op:[{t:'Resolver el enigma',puzle:{tipo:'acertijo',q:'Cuanto más le quitas, más grande se hace. ¿Qué es?',r:['agujero','un agujero','el agujero','hoyo','un hoyo'],pista:'Piensa en cavar.'},ir:'b',gana:2}]},
  b:{lugar:'Norte de África',e:'🏜️',img:'imagenes/escenarios/m2-desierto.jpg',
   txt:`<p>En un mercado conoces a <b>Emily Davenport</b>, arqueóloga, que también persigue las minas… y no piensa compartir el mérito. Os toca trabajar juntos.</p><p>Una tablilla habla del rey Salomón y de lo que pidió a Dios cuando pudo pedir cualquier cosa.</p>`,
   op:[{t:'Interpretar la tablilla',puzle:{tipo:'test',q:'Según la tradición, ¿qué pidió el rey Salomón?',o:['Oro sin fin','Vivir para siempre','Sabiduría','Un ejército invencible'],c:2},ir:'c',gana:2},
       {t:'Dejar que Emily lea la tablilla',nec:'arqueologia',ir:'c',gana:1}]},
  c:{lugar:'Persecución',e:'🐫',img:'imagenes/escenarios/m2-persecucion.jpg',
   txt:`<p>Los hombres del <b>General Samir</b> os persiguen por callejuelas y dunas. Hay que recordar la ruta que marcó Emily antes de que os alcancen.</p>`,
   op:[{t:'Seguir la ruta exacta',puzle:{tipo:'secuencia',q:'Repite la ruta de huida.',s:['⬆️','⬅️','➡️','⬇️'],orden:[0,0,2,1,0,3]},ir:'d',gana:2},
       {t:'Esconderse y esperar',ir:'d',coste:1}]},
  d:{lugar:'La puerta de las minas',e:'🚪',img:'imagenes/escenarios/m2-puerta.jpg',
   txt:`<p>Ante la puerta de piedra, un cerrojo con discos numerados: <b>3 · 6 · 12 · 24 · ?</b></p>`,
   op:[{t:'Completar la serie',puzle:{tipo:'acertijo',q:'3 · 6 · 12 · 24 · ¿?',r:['48'],pista:'Cada número es el doble del anterior.'},ir:'e',gana:2}]},
  e:{lugar:'Las Minas del Rey Salomón',e:'💎',img:'imagenes/escenarios/m2-minas.jpg',
   txt:`<p>Dentro, tesoros sin fin… y un poder capaz de dominar a quien lo tome. Samir entra detrás, arma en mano.</p><span class="who">General Samir</span><p>"Apártate, Bibliotecario. Esto es mío."</p>`,
   op:[{t:'Recordar la lección de Salomón y sellar las minas',puzle:{tipo:'test',q:'¿Qué haría un Bibliotecario?',o:['Llevarse el tesoro','Sellar las minas para que nadie abuse de su poder','Repartirlo con Samir','Hacerse rey'],c:1},fin:true,gana:3}]}
 },
 final:'Las minas quedan selladas. El mapa vuelve a la Biblioteca, y Emily se despide con un "ha sido un placer… casi siempre".'
},
{
 id:'m3',titulo:'La Maldición del Cáliz de Judas',origen:'Película · 2008',icono:'🏆',color:'#4a1a3a',
 equipo:['flynn','simone'],elegir:0,premio:'caliz',villano:'lazlo',
 resumen:'Nueva Orleans, jazz y sombras. El Cáliz de Judas ha despertado y alguien muy antiguo lo quiere.',
 inicio:'a',
 escenas:{
  a:{lugar:'Nueva Orleans',e:'🎷',img:'imagenes/escenarios/m3-nueva-orleans.jpg',
   txt:`<p>Agotado tras tantas misiones, Flynn necesita descansar. Termina en un club de jazz de Nueva Orleans donde canta <b>Simone Renoir</b>. Su voz le pone los pelos de punta… y no solo por lo bonita que es.</p><p>Esa noche alguien intenta robar un viejo documento que habla del <b>Cáliz de Judas</b>.</p>`,
   op:[{t:'Investigar el documento',nec:'deduccion',puzle:{tipo:'test',q:'El documento menciona criaturas de la noche. Según las leyendas, ¿qué metal las daña?',o:['Cobre','Plata','Hierro','Estaño'],c:1},ir:'b',gana:2},
       {t:'Seguir a Simone entre la niebla',ir:'b'}]},
  b:{lugar:'Cementerio',e:'🪦',img:'imagenes/escenarios/m3-cementerio.jpg',
   txt:`<p>Simone te lleva a un cementerio sobre el agua. Sabe demasiado de criaturas nocturnas. Sobre una cripta hay un acertijo grabado.</p><p><em>"Me rompes sin tocarme, con solo nombrarme."</em></p>`,
   op:[{t:'Responder',puzle:{tipo:'acertijo',q:'Me rompes sin tocarme, con solo nombrarme. ¿Qué soy?',r:['silencio','el silencio'],pista:'Shhh…'},ir:'c',gana:2},
       {t:'Dejar que Simone guíe en la oscuridad',nec:'noche',ir:'c',gana:1}]},
  c:{lugar:'La universidad',e:'🎓',img:'imagenes/escenarios/m3-profesor.jpg',
   txt:`<p>El amable <b>Profesor Lazlo</b> te ayuda con los textos antiguos. Demasiado amable. Sus cartas están firmadas en un alfabeto antiguo: cifrado de nuevo, desplazado tres letras.</p>`,
   op:[{t:'Descifrar la firma',puzle:{tipo:'cifrado',q:'César +3. ¿Qué nombre esconde la firma?',code:'GUDFXOD',r:['dracula','drácula'],pista:'El conde más famoso de Transilvania.'},ir:'d',gana:3}]},
  d:{lugar:'La cripta del Cáliz',e:'🦇',img:'imagenes/escenarios/m3-cripta.jpg',
   txt:`<p>Lazlo revela su verdadero rostro: quiere el Cáliz para ser imparable. Simone se coloca a tu lado; ella también tiene cuentas pendientes con él.</p>`,
   op:[{t:'Usar lo que sabes de las leyendas',puzle:{tipo:'test',q:'¿Qué arma eliges contra él?',o:['Un espejo','Una estaca de madera','Una antorcha de cera','Una cuerda'],c:1},fin:true,gana:3},
       {t:'Que Simone le haga frente',nec:'noche',fin:true,coste:1}]}
 },
 final:'El Cáliz vuelve a la Biblioteca. Simone se queda con una despedida triste y un último tema de jazz.'
},
{
 id:'m4',titulo:'El Árbol del Conocimiento',origen:'Serie · Temporada 1',icono:'🌳',color:'#2a4a2a',
 equipo:['eve','flynn'],elegir:2,candidatos:['cassandra','stone','ezekiel','jenkins'],premio:'rama',villano:'dulaque',
 resumen:'La Hermandad de la Serpiente está matando a futuros Bibliotecarios. Eve Baird tiene que proteger a tres candidatos… y la magia vuelve al mundo.',
 inicio:'a',
 escenas:{
  a:{lugar:'Ciudad nocturna',e:'🎯',img:'imagenes/escenarios/m4-reclutamiento.jpg',
   txt:`<p>La coronel <b>Eve Baird</b> desactiva una bomba que no es lo que parece. Pronto conoce a <b>Flynn</b> y entra en su mundo: es la nueva Guardiana.</p><p>Hace años, la Biblioteca invitó a otros candidatos a la entrevista, y no fueron: <b>Cassandra</b>, <b>Stone</b> y <b>Ezekiel</b>. Ahora alguien los está buscando para matarlos.</p>`,
   op:[{t:'Ir a buscar a los candidatos',ir:'b',gana:1}]},
  b:{lugar:'El Anexo',e:'🫖',img:'imagenes/escenarios/m4-anexo.jpg',
   txt:`<p>Llegáis a un edificio lleno de polvo y puertas mágicas: el <b>Anexo</b>. Os recibe <b>Jenkins</b>, con té y cero ganas de visitas.</p><p>La puerta de salida funciona con un mecanismo de coordenadas: <em>"La siguiente es la suma de las dos anteriores: 1, 1, 2, 3, 5, 8…"</em></p>`,
   op:[{t:'Cassandra calcula al vuelo',nec:'calculo',ir:'c',gana:2},
       {t:'Resolverlo tú',puzle:{tipo:'acertijo',q:'1 · 1 · 2 · 3 · 5 · 8 · ¿?',r:['13'],pista:'Suma los dos últimos.'},ir:'c',gana:2}]},
  c:{lugar:'Museo europeo',e:'🖼️',img:'imagenes/escenarios/m4-museo.jpg',
   txt:`<p>El Libro de los Recortes marca un museo donde un cuadro ha empezado a moverse. La magia ha vuelto al mundo. Hay que encontrar el lienzo correcto.</p>`,
   op:[{t:'Stone identifica el cuadro',nec:'arte',ir:'d',gana:2},
       {t:'Adivinar tú',puzle:{tipo:'test',q:'El lienzo muestra un cielo en remolinos sobre un pueblo dormido. ¿Quién lo pintó?',o:['Rembrandt','Van Gogh','Velázquez','Monet'],c:1},ir:'d',gana:2}]},
  d:{lugar:'Sede de la Hermandad',e:'🔐',img:'imagenes/escenarios/m4-hermandad.jpg',
   txt:`<p><b>Dulaque</b> ha guardado una llave mágica en una caja fuerte. Hay que abrirla antes de que vuelvan los guardias.</p>`,
   op:[{t:'Ezekiel se encarga',nec:'robo',ir:'e',gana:2},
       {t:'Probar la combinación',puzle:{tipo:'secuencia',q:'Escucha los clics y repite la combinación.',s:['1️⃣','2️⃣','3️⃣','4️⃣'],orden:[2,0,3,3,1]},ir:'e',gana:2}]},
  e:{lugar:'El Árbol del Conocimiento',e:'🌳',img:'imagenes/escenarios/m4-arbol.jpg',
   txt:`<p>La Biblioteca se ha perdido en el espacio y el tiempo. Dulaque quiere el fruto del <b>Árbol del Conocimiento</b> para dominar la magia. Excalibur se enfrenta a él con todo.</p><span class="who">Dulaque</span><p>"El mundo necesita que alguien con autoridad controle la magia."</p>`,
   op:[{t:'Eve lo frena mientras Flynn coge una rama',nec:'combate',fin:true,gana:3},
       {t:'Jenkins recuerda un antiguo juramento',nec:'magia',fin:true,gana:3}]}
 },
 final:'Con una rama del Árbol, la Biblioteca podrá volver a crecer. Nacen los nuevos Bibliotecarios… y el Anexo se convierte en su casa.'
},
{
 id:'m5',titulo:'La Tempestad de Próspero',origen:'Serie · Temporada 2',icono:'🪄',color:'#2a3a5a',
 equipo:['eve'],elegir:2,candidatos:['flynn','cassandra','stone','ezekiel','jenkins'],premio:'baculo',villano:'prospero',
 resumen:'Personajes de ficción escapan de los libros. Próspero quiere su báculo para reescribir la historia del mundo, con Moriarty a su servicio.',
 inicio:'a',
 escenas:{
  a:{lugar:'El Anexo',e:'📚',img:'imagenes/escenarios/m5-libros.jpg',
   txt:`<p>Los libros tiemblan en las estanterías. Una figura salida de una obra de teatro camina por el mundo real: un mago que fue duque de Milán.</p>`,
   op:[{t:'Identificar al mago',puzle:{tipo:'test',q:'Próspero es el protagonista de una obra de Shakespeare. ¿Cuál?',o:['Hamlet','Macbeth','La tempestad','Otelo'],c:2},ir:'b',gana:2}]},
  b:{lugar:'Londres victoriano (en un libro)',e:'🎩',img:'imagenes/escenarios/m5-moriarty.jpg',
   txt:`<p><b>Moriarty</b> deja pistas como quien deja migas de pan. Su mensaje está cifrado, desplazado tres letras.</p>`,
   op:[{t:'Descifrar a Moriarty',puzle:{tipo:'cifrado',q:'César +3. ¿Qué busca Próspero?',code:'EDFXOR',r:['baculo','báculo'],pista:'Un bastón mágico.'},ir:'c',gana:3}]},
  c:{lugar:'Pueblo encantado',e:'🌪️',img:'imagenes/escenarios/m5-tormenta.jpg',
   txt:`<p>Una tormenta mágica reescribe calles y personas. Hay que fijar los puntos de anclaje en el orden correcto antes de que el pueblo cambie para siempre.</p>`,
   op:[{t:'Fijar los anclajes',puzle:{tipo:'secuencia',q:'Repite el patrón de la tormenta.',s:['⚡','🌊','🌪️','☁️'],orden:[3,0,2,1,0,3]},ir:'d',gana:2},
       {t:'Cassandra calcula el patrón',nec:'calculo',ir:'d',gana:2}]},
  d:{lugar:'El escenario final',e:'🎭',img:'imagenes/escenarios/m5-final.jpg',
   txt:`<p>Próspero alza su báculo. Si lo usa, todos seréis personajes de su historia.</p><span class="who">Próspero</span><p>"Toda la vida es un escenario… y yo soy el autor."</p>`,
   op:[{t:'Robarle el báculo en el último segundo',nec:'robo',fin:true,gana:3},
       {t:'Recordarle que los personajes también deciden',nec:'deduccion',fin:true,gana:3},
       {t:'Atacar a la desesperada',fin:true,coste:2}]}
 },
 final:'Próspero vuelve a las páginas y el báculo queda guardado. Moriarty, por supuesto, se escabulle.'
},
{
 id:'m6',titulo:'El Dios del Caos',origen:'Serie · Temporada 3',icono:'📦',color:'#3a2a10',
 equipo:['eve','flynn'],elegir:2,candidatos:['cassandra','stone','ezekiel','jenkins'],premio:'pandora',villano:'apep',
 resumen:'Apep, la serpiente egipcia del caos, busca un cuerpo para volver. Una agencia del gobierno vigila la magia… y a vosotros.',
 inicio:'a',
 escenas:{
  a:{lugar:'Egipto',e:'🌑',img:'imagenes/escenarios/m6-egipto.jpg',
   txt:`<p>Una antigua prisión se abre: <b>Apep</b>, el dios del caos, ha escapado. Puede saltar de cuerpo en cuerpo. Mientras tanto, una agencia secreta del gobierno quiere controlar la magia a su manera.</p>`,
   op:[{t:'Leer los jeroglíficos',nec:'arte',ir:'b',gana:2},
       {t:'Investigar tú',puzle:{tipo:'test',q:'En la mitología egipcia, ¿qué representa Apep?',o:['El sol','El caos y la oscuridad','La sabiduría','La cosecha'],c:1},ir:'b',gana:2}]},
  b:{lugar:'Base de la agencia',e:'🛰️',img:'imagenes/escenarios/m6-agencia.jpg',
   txt:`<p>La agencia ha requisado artefactos. Hay que colarse y recuperar los vuestros sin activar las alarmas.</p>`,
   op:[{t:'Ezekiel hackea el sistema',nec:'robo',ir:'c',gana:2},
       {t:'Burlar los sensores',puzle:{tipo:'secuencia',q:'Pasa entre los láseres en el orden correcto.',s:['🔴','🟢','🔵','🟡'],orden:[1,1,3,0,2]},ir:'c',gana:2}]},
  c:{lugar:'El Anexo',e:'🫖',img:'imagenes/escenarios/m6-anexo.jpg',
   txt:`<p>Jenkins encuentra una referencia: hay un objeto capaz de atrapar al caos mismo. Para saber cuál, hay que resolver su acertijo.</p><span class="who">Jenkins</span><p>"Se abrió una vez y escaparon todos los males del mundo. Solo quedó dentro la esperanza."</p>`,
   op:[{t:'Nombrar el objeto',puzle:{tipo:'acertijo',q:'Se abrió una vez y escaparon todos los males; solo quedó la esperanza. ¿Qué es?',r:['caja de pandora','la caja de pandora','pandora'],pista:'Mitología griega, una mujer muy curiosa.'},ir:'d',gana:3}]},
  d:{lugar:'La batalla final',e:'📦',img:'imagenes/escenarios/m6-final.jpg',
   txt:`<p>Apep ha poseído a alguien cercano. Eve se planta delante de él con la Caja de Pandora en las manos. Solo hay una oportunidad.</p>`,
   op:[{t:'Abrir la caja en el momento exacto',nec:'combate',fin:true,gana:3},
       {t:'Abrirla tú',fin:true,coste:1,gana:1}]}
 },
 final:'El caos queda atrapado. La Caja de Pandora vuelve a la Biblioteca, esta vez muy, muy bien cerrada.'
},
{
 id:'m7',titulo:'El Vínculo',origen:'Serie · Temporada 4',icono:'🔗',color:'#4a2a1a',
 equipo:['eve','flynn'],elegir:2,candidatos:['cassandra','stone','ezekiel','jenkins'],premio:'vinculo',villano:'noone',
 resumen:'La Biblioteca necesita un vínculo para sobrevivir. Y Nicole Noone ha vuelto del pasado con rencor acumulado durante siglos.',
 inicio:'a',
 escenas:{
  a:{lugar:'La Biblioteca',e:'⏳',img:'imagenes/escenarios/m7-biblioteca.jpg',
   txt:`<p>La Biblioteca se debilita. Para mantenerse, necesita un <b>vínculo</b> con su Bibliotecario y su Guardiana. Y alguien conoce ese ritual mejor que nadie: <b>Nicole Noone</b>, la antigua Guardiana, que ha vivido siglos sola en el tiempo.</p>`,
   op:[{t:'Escuchar lo que dice Nicole',puzle:{tipo:'test',q:'¿Qué une a un Bibliotecario y su Guardiana con la Biblioteca?',o:['Un contrato firmado','Un vínculo de confianza y propósito','Una llave de oro','Un hechizo de sangre'],c:1},ir:'b',gana:2}]},
  b:{lugar:'Recuerdos',e:'🕰️',img:'imagenes/escenarios/m7-recuerdos.jpg',
   txt:`<p>Nicole os arrastra por recuerdos del pasado. Para salir, hay que recordar el orden de las misiones que os trajeron hasta aquí.</p>`,
   op:[{t:'Ordenar los recuerdos',puzle:{tipo:'secuencia',q:'Repite el orden: Lanza, Minas, Cáliz, Árbol…',s:['🔱','🗺️','🏆','🌳'],orden:[0,1,2,3]},ir:'c',gana:2}]},
  c:{lugar:'El Anexo',e:'🫖',img:'imagenes/escenarios/m7-anexo.jpg',
   txt:`<p>Los nuevos Bibliotecarios se miran: ¿dejarán que Flynn y Eve carguen solos con el vínculo? Jenkins sirve té con las manos temblando.</p>`,
   op:[{t:'Que el equipo entero proteja el ritual',ir:'d',gana:2},
       {t:'Jenkins prepara un contra-hechizo',nec:'magia',ir:'d',gana:3}]},
  d:{lugar:'El ritual',e:'🔗',img:'imagenes/escenarios/m7-final.jpg',
   txt:`<p>Nicole intenta romper el ritual. Pero en el fondo solo quería no estar sola. Flynn y Eve se cogen de la mano.</p><span class="who">Flynn</span><p>"La Biblioteca no es un edificio. Somos nosotros."</p>`,
   op:[{t:'Tender la mano a Nicole',fin:true,gana:4},
       {t:'Eve la detiene',nec:'combate',fin:true,gana:2}]}
 },
 final:'El vínculo se completa. La Biblioteca respira. Y tú, Bibliotecaria, has recorrido toda la historia.'
}
];
