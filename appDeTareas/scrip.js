const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let totalTareas = 0;

const actualizarContador = () => {
  contador.textContent = totalTareas;
};

const eliminarTarea = (evento) => {
  const li = evento.target.parentElement;
  lista.removeChild(li);
  totalTareas--;
  actualizarContador();
};

const agregarTarea = (evento) => {
  evento.preventDefault();

  const texto = inputTarea.value.trim();

  if (texto === "") {
    alert("No puedes agregar una tarea vacía");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${texto}
    <button class="eliminar">Eliminar</button>
  `;

  const botonEliminar = li.querySelector(".eliminar");
  botonEliminar.addEventListener("click", eliminarTarea);

  lista.appendChild(li);

  totalTareas++;
  actualizarContador();

  inputTarea.value = "";
};

formulario.addEventListener("submit", agregarTarea);