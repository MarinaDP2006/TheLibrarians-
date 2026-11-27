/* =========================================================
   CRÓNICAS DEL ANEXO — motor del juego
   ========================================================= */
const KEY='cronicas_anexo_v1';
let S=cargar();
let V={pantalla:'portada',tab:'misiones',mision:null,escena:null,equipo:[],corazones:3,ganado:0,puzle:null};
const $=q=>document.querySelector(q);
const app=()=>$('#app');

function nuevo(){return{nombre:'',hechas:[],artefactos:['libro'],conocimiento:0,mejores:{}};}
function cargar(){try{return Object.assign(nuevo(),JSON.parse(localStorage.getItem(KEY))||{});}catch(e){return nuevo();}}
function guardar(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 -]/g,'').replace(/\s+/g,' ').trim();
function toast(m,ms=2400){document.querySelectorAll('.toast').forEach(t=>t.remove());const d=document.createElement('div');d.className='toast';d.textContent=m;document.body.appendChild(d);setTimeout(()=>d.remove(),ms);}
function chispas(n=18){for(let i=0;i<n;i++){const s=document.createElement('div');s.className='spark';s.textContent=['✦','✧','★','📖'][i%4];
  s.style.left=(window.innerWidth/2)+'px';s.style.top=(window.innerHeight/2)+'px';s.style.setProperty('--dx',(Math.random()*400-200)+'px');s.style.setProperty('--dy',(Math.random()*400-200)+'px');
  document.body.appendChild(s);setTimeout(()=>s.remove(),1300);}}
function vibrar(ms){try{navigator.vibrate&&navigator.vibrate(ms);}catch(e){}}

/* Imagen con respaldo: si el archivo no existe, se oculta y queda el diseño por defecto */
const img=src=>src?`<img src="${src}" alt="" onerror="this.remove()">`:'';
const inicial=n=>esc(n.split(' ').map(w=>w[0]).slice(0,2).join(''));
const desbloqueada=i=>i===0||S.hechas.includes(MISIONES[i-1].id);
const habilidadesEquipo=()=>new Set(V.equipo.map(id=>PERSONAJES[id]?.hab));
const nombreHab=h=>Object.values(PERSONAJES).find(p=>p.hab===h)?.habTxt.split(' · ')[0]||h;
const quienTiene=h=>Object.values(PERSONAJES).filter(p=>p.hab===h).map(p=>p.nombre.split(' ')[0]).join(' o ');
function personajesDesbloqueados(){const s=new Set(['flynn','judson','charlene']);
  MISIONES.forEach((m,i)=>{if(desbloqueada(i)){m.equipo.forEach(x=>s.add(x));(m.candidatos||[]).forEach(x=>s.add(x));}});return s;}

/* ---------------- RENDER ---------------- */
function render(){
  if(V.pantalla==='portada')return portada();
  if(V.pantalla==='equipo')return elegirEquipo();
  if(V.pantalla==='escena')return escena();
  anexo();
}

function portada(){
  app().innerHTML=`<div class="title fade"><div class="rays"></div>
   <svg class="book" viewBox="0 0 120 120"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0d79c"/><stop offset="1" stop-color="#8e6a30"/></linearGradient></defs>
    <path d="M60 30 C45 20 25 20 12 26 V96 C25 90 45 90 60 100 C75 90 95 90 108 96 V26 C95 20 75 20 60 30Z" fill="#2a1b11" stroke="url(#g)" stroke-width="3"/>
    <path d="M60 30 V100" stroke="url(#g)" stroke-width="2"/>
    <path d="M22 40 C32 37 44 37 52 42 M22 52 C32 49 44 49 52 54 M22 64 C32 61 44 61 52 66 M68 42 C76 37 88 37 98 40 M68 54 C76 49 88 49 98 52 M68 66 C76 61 88 61 98 64" stroke="#d4ad6288" stroke-width="2" fill="none"/>
    <circle cx="60" cy="14" r="5" fill="#f0d79c"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/></circle></svg>
   <div class="kick">Fan game · inspirado en The Librarians</div>
   <h1>Crónicas<br>del Anexo</h1>
   <p class="sub">La Biblioteca te ha elegido. Recupera los artefactos, protege el conocimiento y salva el mundo… otra vez.</p>
   ${S.nombre?`<button class="btn" onclick="V.pantalla='anexo';render()">Continuar, ${esc(S.nombre)}</button>
     <button class="btn ghost" onclick="if(confirm('¿Empezar de cero? Se borra tu progreso.')){S=nuevo();guardar();render()}">Nueva partida</button>`
    :`<div style="width:100%;max-width:380px;margin-top:22px"><input id="nom" placeholder="Tu nombre de Bibliotecaria" maxlength="24" onkeydown="if(event.key==='Enter')empezar()"></div>
     <button class="btn" onclick="empezar()">Aceptar la invitación</button>`}
   <p class="quote">"La Biblioteca te ha elegido."</p>
   <p class="disc">Fan game sin ánimo de lucro, hecho para uso personal. The Librarians y sus personajes pertenecen a sus creadores.</p></div>`;
}
function empezar(){const n=$('#nom').value.trim();if(!n)return toast('Escribe tu nombre');S.nombre=n;guardar();V.pantalla='anexo';render();chispas();}

/* ---------- ANEXO ---------- */
function anexo(){
  const hechas=S.hechas.length,tot=MISIONES.length;
  app().innerHTML=`<div class="hud"><div class="ttl">El Anexo</div><div class="stat">📖 ${S.conocimiento}</div><div class="stat">🏺 ${S.artefactos.length}</div></div>
   <div class="annex-head fade"><h2>${{misiones:'Libro de Misiones',equipo:'El Equipo',vitrina:'La Vitrina',villanos:'Archivo de Villanos',info:'Tu Biblioteca'}[V.tab]}</h2>
   <p>${V.tab==='misiones'?`Bibliotecaria ${esc(S.nombre)} · ${hechas}/${tot} misiones`:V.tab==='equipo'?'Toca un personaje para ver su ficha':V.tab==='vitrina'?'Artefactos recuperados':V.tab==='villanos'?'Conoce a tu enemigo':'Ajustes e imágenes'}</p></div>
   ${V.tab==='misiones'?`<div class="prog"><i style="width:${hechas/tot*100}%"></i></div>`:''}
   <div class="fade">${({misiones:tabMisiones,equipo:tabEquipo,vitrina:tabVitrina,villanos:tabVillanos,info:tabInfo})[V.tab]()}</div>
   <nav class="tabs">${[['misiones','📚','Misiones'],['equipo','👥','Equipo'],['vitrina','🏺','Vitrina'],['villanos','🐍','Villanos'],['info','⚙️','Más']].map(([k,i,l])=>`<button class="${V.tab===k?'on':''}" onclick="V.tab='${k}';render();scrollTo(0,0)"><span>${i}</span>${l}</button>`).join('')}</nav>`;
}
function tabMisiones(){
  const lomo=(m,i)=>{const lock=!desbloqueada(i),done=S.hechas.includes(m.id);
    return`<div class="spine ${lock?'locked':''} ${done?'done':''}" style="background:linear-gradient(90deg,${m.color},${m.color}cc 40%,${m.color})" onclick="${lock?"toast('Completa la misión anterior')":`fichaMision(${i})`}">
      <div class="n">${i+1}</div><div class="ic">${lock?'🔒':m.icono}</div><div class="v">${esc(m.titulo)}</div></div>`;};
  return`<div class="sec">Películas</div><div class="shelf"><div class="spines">${MISIONES.slice(0,3).map((m,i)=>lomo(m,i)).join('')}</div></div>
   <div class="sec">Serie</div><div class="shelf"><div class="spines">${MISIONES.slice(3).map((m,i)=>lomo(m,i+3)).join('')}</div></div>
   ${S.hechas.length===MISIONES.length?`<div class="sec">Final</div><div style="padding:0 14px"><button class="btn" onclick="certificado()">📜 Ver tu certificado</button></div>`:''}
   <div class="sec">Siguiente</div><div style="padding:0 14px">${(()=>{const i=MISIONES.findIndex(m=>!S.hechas.includes(m.id));return i<0?'<p class="info">¡Has completado todas las misiones! Puedes repetirlas para mejorar tu conocimiento.</p>':`<button class="btn" onclick="fichaMision(${i})">${MISIONES[i].icono} ${esc(MISIONES[i].titulo)}</button>`;})()}</div>`;
}
function fichaMision(i){const m=MISIONES[i],vil=VILLANOS[m.villano],a=ARTEFACTOS[m.premio];
  modal(`<div class="big">${m.icono}</div><div class="meta">${esc(m.origen)}</div><h2>${esc(m.titulo)}</h2><p>${esc(m.resumen)}</p>
   <p class="ab">Villano: <b>${esc(vil.nombre)}</b> ${vil.e}<br>Artefacto: <b>${esc(a.nombre)}</b> ${a.e}${S.mejores[m.id]!=null?`<br>Tu mejor resultado: 📖 ${S.mejores[m.id]}`:''}</p>
   <button class="btn" onclick="cerrar();prepararEquipo(${i})">Empezar misión</button><button class="btn ghost" onclick="cerrar()">Volver</button>`);}
function fichaPersonaje(id,esVillano){const p=esVillano?VILLANOS[id]:PERSONAJES[id];
  modal(`<div class="ph" style="--grad:${p.grad||'linear-gradient(160deg,#3a1a1a,#100808)'}"><span class="mono">${esVillano?p.e:inicial(p.nombre)}</span>${img(p.img)}</div>
   <div class="meta">${esc(p.rol)}</div><h2>${esc(p.nombre)}</h2><p>${esc(p.bio)}</p>${p.habTxt?`<p class="ab">✦ ${esc(p.habTxt)}</p>`:''}
   <button class="btn ghost" onclick="cerrar()">Cerrar</button>`);}
function tarjeta(id,{sel=false,lock=false,onclick=''}={}){const p=PERSONAJES[id];
  return`<div class="pc ${sel?'sel':''} ${lock?'lock':''}" onclick="${onclick}"><div class="ph" style="--grad:${p.grad}"><span class="mono">${inicial(p.nombre)}</span>${img(p.img)}<div class="role">${esc(p.rol)}</div></div><div class="nm">${lock?'???':esc(p.nombre)}</div></div>`;}
function tabEquipo(){const des=personajesDesbloqueados();
  return`<div class="grid">${Object.keys(PERSONAJES).map(id=>tarjeta(id,{lock:!des.has(id),onclick:des.has(id)?`fichaPersonaje('${id}')`:"toast('Se desbloquea avanzando en las misiones')"})).join('')}</div>`;}
function tabVillanos(){return`<div class="grid">${Object.entries(VILLANOS).map(([id,v],i)=>{const visto=MISIONES.some((m,j)=>m.villano===id&&desbloqueada(j));
  return`<div class="pc ${visto?'':'lock'}" onclick="${visto?`fichaPersonaje('${id}',true)`:"toast('Aún no te has cruzado con él')"}"><div class="ph" style="--grad:linear-gradient(160deg,#3a1414,#0c0606)"><span class="mono" style="font-size:46px">${v.e}</span>${visto?img(v.img):''}<div class="role">${esc(v.rol)}</div></div><div class="nm">${visto?esc(v.nombre):'???'}</div></div>`;}).join('')}</div>`;}
function tabVitrina(){return`<div class="vitrina">${Object.entries(ARTEFACTOS).map(([id,a])=>{const t=S.artefactos.includes(id);
  return`<div class="art ${t?'':'no'}" onclick="${t?`fichaArtefacto('${id}')`:"toast('Todavía no lo has recuperado')"}"><span class="e">${a.e}</span>${t?img(a.img):''}<small>${t?esc(a.nombre):'???'}</small></div>`;}).join('')}</div>`;}
function fichaArtefacto(id){const a=ARTEFACTOS[id];modal(`<div class="big">${a.e}</div><div class="meta">Artefacto</div><h2>${esc(a.nombre)}</h2><p>${esc(a.desc)}</p><button class="btn ghost" onclick="cerrar()">Cerrar</button>`);}
function tabInfo(){return`<div class="info">
   <p><b>Cómo se juega:</b> elige una misión, forma tu equipo y decide. Algunas opciones necesitan una habilidad concreta (<em>Combate</em>, <em>Cálculo</em>, <em>Arte</em>…): lleva a la persona adecuada. Los acertijos dan 📖 conocimiento; los fallos cuestan ❤️. Sin corazones, la misión se reinicia.</p>
   <p style="margin-top:10px"><b>Tus imágenes:</b> copia tus fotos en la carpeta <code>imagenes/</code> con el nombre indicado en <code>imagenes/LEEME.md</code> y aparecerán solas en personajes, villanos, escenarios y artefactos.</p></div>
   <div style="padding:14px"><button class="btn ghost" onclick="V.pantalla='portada';render()">Volver a la portada</button>
   <button class="btn ghost" onclick="if(confirm('¿Borrar todo el progreso?')){S=nuevo();guardar();V.pantalla='portada';render()}">Borrar progreso</button></div>`;}

/* ---------- EQUIPO PARA LA MISIÓN ---------- */
function prepararEquipo(i){V.mision=i;const m=MISIONES[i];V.equipo=[...m.equipo];
  if(!m.elegir)return iniciarMision();V.pantalla='equipo';render();scrollTo(0,0);}
function elegirEquipo(){const m=MISIONES[V.mision];const elegidos=V.equipo.filter(x=>!m.equipo.includes(x));
  app().innerHTML=`<div class="hud"><button class="back" onclick="V.pantalla='anexo';render()">‹</button><div class="ttl">${esc(m.titulo)}</div></div>
   <div class="annex-head fade"><h2>Forma tu equipo</h2><p>Van seguro: ${m.equipo.map(x=>PERSONAJES[x].nombre.split(' ')[0]).join(' y ')}. Elige ${m.elegir} más (${elegidos.length}/${m.elegir}).</p></div>
   <div class="grid fade">${m.candidatos.map(id=>tarjeta(id,{sel:V.equipo.includes(id),onclick:`toggleMiembro('${id}')`})).join('')}</div>
   <div class="sec">Habilidades del equipo</div><div class="info">${V.equipo.map(id=>`✦ <b>${esc(PERSONAJES[id].nombre)}</b> — ${esc(PERSONAJES[id].habTxt)}`).join('<br>')}</div>
   <div style="padding:16px"><button class="btn" ${elegidos.length<m.elegir?'style="opacity:.5"':''} onclick="${elegidos.length<m.elegir?`toast('Elige ${m.elegir} compañeros')`:'iniciarMision()'}">¡A la misión!</button></div>`;}
function toggleMiembro(id){const m=MISIONES[V.mision];const elegidos=V.equipo.filter(x=>!m.equipo.includes(x));
  if(V.equipo.includes(id))V.equipo=V.equipo.filter(x=>x!==id);else if(elegidos.length<m.elegir)V.equipo.push(id);else return toast('Ya tienes '+m.elegir+'. Quita a alguien primero');render();}
function iniciarMision(){const m=MISIONES[V.mision];V.escena=m.inicio;V.corazones=3;V.ganado=0;V.puzle=null;V.pantalla='escena';render();scrollTo(0,0);}

/* ---------- ESCENA ---------- */
function corazones(){return`<span class="hearts">${[0,1,2].map(i=>i<V.corazones?'♥':'<span class="off">♥</span>').join('')}</span>`;}
function escena(){const m=MISIONES[V.mision],e=m.escenas[V.escena],habs=habilidadesEquipo();
  const claves=Object.keys(m.escenas),idx=claves.indexOf(V.escena)+1;
  app().innerHTML=`<div class="hud"><button class="back" onclick="if(confirm('¿Abandonar la misión?')){V.pantalla='anexo';render()}">‹</button><div class="ttl">${esc(m.titulo)}</div><div class="stat">${corazones()}</div><div class="stat">📖 ${V.ganado}</div></div>
   <div class="prog"><i style="width:${idx/claves.length*100}%"></i></div>
   <div class="scene-bg fade" style="--sbg:radial-gradient(circle at 50% 40%,${m.color},#0d0906 85%);margin-top:10px"><div class="em">${e.e}</div>${img(e.img)}<div class="ov"></div><div class="pl"><b>${esc(e.lugar)}</b><small>${esc(m.origen)} · Escena ${idx}/${claves.length}</small></div></div>
   <div class="page fade">${e.txt}</div>
   <div id="zona">${V.puzle?puzleHTML():`<div class="choices">${e.op.map((o,i)=>{const falta=o.nec&&!habs.has(o.nec);
     return`<button class="ch ${falta?'dis':''}" onclick="elegir(${i})"><span class="k">${'ABCD'[i]}</span><span>${esc(o.t)}${o.nec?`<span class="tag">${esc(nombreHab(o.nec))}</span>`:''}${o.coste?`<span class="tag warn">−${o.coste} ♥</span>`:''}${falta?`<br><small style="color:var(--muted)">Necesitas a ${esc(quienTiene(o.nec))} en el equipo</small>`:''}</span></button>`;}).join('')}</div>`}</div>`;
  if(V.puzle&&V.puzle.tipo==='secuencia')setTimeout(mostrarSecuencia,600);}
function elegir(i){const m=MISIONES[V.mision],o=m.escenas[V.escena].op[i];
  if(o.puzle){V.puzle=Object.assign({op:i,intentos:0,pista:false,paso:[]},o.puzle);render();setTimeout(()=>$('#zona')?.scrollIntoView({behavior:'smooth',block:'start'}),50);return;}
  avanzar(o);}
function avanzar(o){if(o.coste){perder(o.coste);if(V.corazones<=0)return;}
  if(o.gana){V.ganado+=o.gana;}
  V.puzle=null;
  if(o.fin)return completar();
  V.escena=o.ir;render();scrollTo({top:0,behavior:'smooth'});}
function perder(n){V.corazones-=n;vibrar(200);document.body.classList.add('shake');setTimeout(()=>document.body.classList.remove('shake'),400);
  if(V.corazones<=0){modal(`<div class="big">💔</div><h2>La misión ha fallado</h2><p>Hasta los mejores Bibliotecarios necesitan un segundo intento.</p><button class="btn" onclick="cerrar();iniciarMision()">Reintentar</button><button class="btn ghost" onclick="cerrar();V.pantalla='anexo';render()">Volver al Anexo</button>`);}
  else toast('−'+n+' ♥');}
function completar(){const m=MISIONES[V.mision],a=ARTEFACTOS[m.premio];
  if(!S.hechas.includes(m.id))S.hechas.push(m.id);if(!S.artefactos.includes(m.premio))S.artefactos.push(m.premio);
  if(m.id==='m4'&&!S.artefactos.includes('excalibur'))S.artefactos.push('excalibur');
  const total=V.ganado+V.corazones;S.conocimiento+=total;S.mejores[m.id]=Math.max(S.mejores[m.id]||0,total);guardar();chispas(30);vibrar([60,40,60]);
  const sig=MISIONES[V.mision+1];
  modal(`<div class="meta">Misión completada</div><div class="big">${a.e}</div><h2>${esc(a.nombre)}</h2><p>${esc(m.final)}</p>
   <p class="ab">📖 +${V.ganado} conocimiento · ❤️ +${V.corazones} por corazones intactos</p>
   ${sig?`<p style="color:var(--gold2)">🔓 Desbloqueada: <b>${esc(sig.titulo)}</b></p>`:''}
   <button class="btn" onclick="cerrar();V.pantalla='anexo';V.tab='${sig?'misiones':'vitrina'}';render()">Volver al Anexo</button>`);}
function certificado(){modal(`<div class="big">📜</div><div class="meta">La Biblioteca certifica que</div><h2>${esc(S.nombre)}</h2>
  <p>ha recuperado ${S.artefactos.length} artefactos, completado ${S.hechas.length} misiones y reunido <b>${S.conocimiento}</b> puntos de conocimiento.</p>
  <p style="font-style:italic;color:var(--gold2)">Es, oficialmente, Bibliotecaria.</p><button class="btn ghost" onclick="cerrar()">Cerrar</button>`);chispas(40);}

/* ---------- PUZLES ---------- */
function puzleHTML(){const p=V.puzle;
  const tit={acertijo:'Acertijo',cifrado:'Cifrado',secuencia:'Secuencia',test:'Pregunta'}[p.tipo];
  let body='';
  if(p.tipo==='acertijo'||p.tipo==='cifrado'){
    body=`${p.code?`<div class="code">${esc(p.code)}</div>`:''}<input id="resp" placeholder="Tu respuesta" autocomplete="off" onkeydown="if(event.key==='Enter')comprobar()">
     <div class="row"><button class="btn" onclick="comprobar()">Comprobar</button>${p.pista?`<button class="btn ghost" onclick="pista()">Pista (−1 📖)</button>`:''}</div>
     ${p.pistaVista?`<div class="hint">✦ ${esc(p.pista)}</div>`:''}`;}
  else if(p.tipo==='test'){body=`<div class="opts">${p.o.map((o,i)=>`<button id="op${i}" onclick="responder(${i})">${'ABCD'[i]}. ${esc(o)}</button>`).join('')}</div>`;}
  else if(p.tipo==='secuencia'){body=`<div class="seqbar" id="seqbar">Observa…</div><div class="syms">${p.s.map((s,i)=>`<button class="sym" id="sy${i}" onclick="pulsar(${i})" disabled>${s}</button>`).join('')}</div>
     <div class="row"><button class="btn ghost" onclick="V.puzle.paso=[];mostrarSecuencia()">Ver otra vez</button></div>`;}
  return`<div class="puz fade"><h3>✦ ${tit}</h3><div class="q">${esc(p.q)}</div>${body}<div class="row"><button class="btn ghost small" style="margin-top:10px" onclick="V.puzle=null;render()">‹ Otra opción</button></div></div>`;}
function comprobar(){const p=V.puzle,v=norm($('#resp').value);if(!v)return;
  if(p.r.map(norm).includes(v))return acierto();fallo();}
function pista(){if(V.puzle.pistaVista)return;V.puzle.pistaVista=true;V.ganado=Math.max(0,V.ganado-1);render();}
function responder(i){const p=V.puzle;$('#op'+i).classList.add(i===p.c?'good':'bad');if(i===p.c)setTimeout(acierto,500);else{setTimeout(fallo,300);}}
let seqTimer=null;
function mostrarSecuencia(){const p=V.puzle;if(!p||p.tipo!=='secuencia')return;clearTimeout(seqTimer);p.paso=[];
  const btns=p.s.map((_,i)=>$('#sy'+i));btns.forEach(b=>b&&(b.disabled=true));const bar=$('#seqbar');if(bar)bar.textContent='Observa…';
  let k=0;const step=()=>{btns.forEach(b=>b&&b.classList.remove('lit'));if(k>=p.orden.length){btns.forEach(b=>b&&(b.disabled=false));if(bar)bar.textContent='¡Tu turno!';return;}
    const b=btns[p.orden[k]];seqTimer=setTimeout(()=>{b&&b.classList.add('lit');k++;seqTimer=setTimeout(step,520);},180);};step();}
function pulsar(i){const p=V.puzle,b=$('#sy'+i);p.paso.push(i);const pos=p.paso.length-1;
  if(p.orden[pos]!==i){p.paso=[];fallo(true);return;}
  b.classList.add('lit');setTimeout(()=>b.classList.remove('lit'),200);$('#seqbar').textContent=p.paso.map(x=>p.s[x]).join(' ');
  if(p.paso.length===p.orden.length)setTimeout(acierto,300);}
function acierto(){const m=MISIONES[V.mision],o=m.escenas[V.escena].op[V.puzle.op];toast('✦ ¡Correcto!');chispas(12);avanzar(o);}
function fallo(seq){V.puzle.intentos++;perder(1);if(V.corazones<=0)return;
  if(seq){$('#seqbar').textContent='¡Fallaste! Mira otra vez';setTimeout(mostrarSecuencia,900);}
  else if(V.puzle.tipo==='test'){setTimeout(()=>{V.puzle.o.forEach((_,i)=>$('#op'+i)?.classList.remove('bad'));},700);}
  else{const r=$('#resp');if(r){r.value='';r.focus();}}}

/* ---------- MODAL ---------- */
function modal(html){cerrar();const d=document.createElement('div');d.className='modal';d.onclick=e=>{if(e.target===d)cerrar();};d.innerHTML=`<div class="card fade">${html}</div>`;document.body.appendChild(d);}
function cerrar(){document.querySelectorAll('.modal').forEach(m=>m.remove());}

render();
