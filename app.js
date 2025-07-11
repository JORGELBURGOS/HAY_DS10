const contenido = document.getElementById('contenido');
const progress = document.getElementById('progress');
const progressLabel = document.getElementById('progress-label');
const navItems = document.querySelectorAll('.nav-item');

const modal = document.getElementById('modal');
const savePdf = document.getElementById('savePdf');
const saveLocal = document.getElementById('saveLocal');
const cancelModal = document.getElementById('cancelModal');

let datos = {
  puesto: '',
  area: '',
  descripcion: '',
  responsabilidades: '',
  fecha: '',
  knowhow: null,
  problemas: null,
  responsabilidad: null
};

const secciones = ['descripcion', 'knowhow', 'problemas', 'responsabilidad', 'resultado'];
let actual = 0;

function actualizarBarra() {
  const porc = Math.round((actual) / (secciones.length - 1) * 100);
  progress.style.width = porc + '%';
  progressLabel.textContent = porc + '% completado';
}

function cargarContenido(paso) {
  if (paso === 'descripcion') {
    contenido.innerHTML = `
      <h2>Descripción del Puesto</h2>
      <input placeholder="Nombre del Puesto" value="${datos.puesto}" oninput="datos.puesto=this.value"/>
      <input placeholder="Área / Departamento" value="${datos.area}" oninput="datos.area=this.value"/>
      <textarea placeholder="Descripción General" oninput="datos.descripcion=this.value">${datos.descripcion}</textarea>
      <textarea placeholder="Responsabilidades Principales" oninput="datos.responsabilidades=this.value">${datos.responsabilidades}</textarea>
      <input type="date" value="${datos.fecha}" oninput="datos.fecha=this.value"/>
    `;
  } else if (paso === 'knowhow') {
    contenido.innerHTML = `
      <h2>Know-How</h2>
      <label><input type="radio" name="kh" value="6" onchange="datos.knowhow=6"> Básico</label><br>
      <label><input type="radio" name="kh" value="9" onchange="datos.knowhow=9"> Medio</label><br>
      <label><input type="radio" name="kh" value="12" onchange="datos.knowhow=12"> Alto</label>
    `;
  } else if (paso === 'problemas') {
    contenido.innerHTML = `
      <h2>Resolución de Problemas</h2>
      <label><input type="radio" name="pb" value="5" onchange="datos.problemas=5"> Repetitivos</label><br>
      <label><input type="radio" name="pb" value="8" onchange="datos.problemas=8"> Conocidos</label><br>
      <label><input type="radio" name="pb" value="11" onchange="datos.problemas=11"> Nuevos / Complejos</label>
    `;
  } else if (paso === 'responsabilidad') {
    contenido.innerHTML = `
      <h2>Responsabilidad</h2>
      <label><input type="radio" name="resp" value="7" onchange="datos.responsabilidad=7"> Limitada</label><br>
      <label><input type="radio" name="resp" value="10" onchange="datos.responsabilidad=10"> Compartida</label><br>
      <label><input type="radio" name="resp" value="13" onchange="datos.responsabilidad=13"> Directa</label>
    `;
  } else if (paso === 'resultado') {
    const total = calcularTotal();
    contenido.innerHTML = `
      <h2>Resultado Final</h2>
      <p><strong>Know-How:</strong> ${datos.knowhow || '-'}</p>
      <p><strong>Problemas:</strong> ${datos.problemas || '-'}</p>
      <p><strong>Responsabilidad:</strong> ${datos.responsabilidad || '-'}</p>
      <p><strong>Total HAY:</strong> ${total}</p>
      <button onclick="mostrarModal()">Guardar Evaluación</button>
    `;
  }
  actualizarBarra();
}

function calcularTotal() {
  let suma = (parseInt(datos.knowhow) || 0) + (parseInt(datos.problemas) || 0) + (parseInt(datos.responsabilidad) || 0);
  if (suma === 0) return 8;
  return Math.min(25, Math.max(8, Math.round(suma / 3)));
}

function mostrarModal() {
  modal.classList.remove('hidden');
}

saveLocal.addEventListener('click', () => {
  localStorage.setItem('evaluacion_hay', JSON.stringify(datos));
  alert('Evaluación guardada localmente.');
  modal.classList.add('hidden');
});

savePdf.addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Evaluación HAY", 20, 20);
  doc.text("Puesto: " + datos.puesto, 20, 30);
  doc.text("Área: " + datos.area, 20, 40);
  doc.text("Fecha: " + datos.fecha, 20, 50);
  doc.text("Total HAY: " + calcularTotal(), 20, 60);
  doc.autoTable({
    startY: 70,
    head: [['Factor', 'Puntaje']],
    body: [
      ['Know-How', datos.knowhow || '-'],
      ['Problemas', datos.problemas || '-'],
      ['Responsabilidad', datos.responsabilidad || '-']
    ]
  });
  doc.save('evaluacion_hay.pdf');
  modal.classList.add('hidden');
});

cancelModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

navItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    actual = i;
    cargarContenido(secciones[i]);
  });
});

cargarContenido(secciones[0]);
