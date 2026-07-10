const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const yearEl = document.getElementById("year");
const countdownEl = document.getElementById("countdown"); //

// Calculamos dinámicamente el próximo año
const currentYear = new Date().getFullYear();
let nextYear = currentYear + 1;

// Mostramos el año objetivo en la pantalla
yearEl.innerText = nextYear;

// Creamos la fecha objetivo de Año Nuevo
let newYearTime = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();

// Ejecutamos la función principal
cuentaAtras();

function cuentaAtras() {
  const now = new Date().getTime();
  let gap = newYearTime - now;

  // Si la cuenta regresiva llegó a cero o es negativa (¡Ya es Año Nuevo!)
  if (gap <= 0) {
    nextYear = new Date().getFullYear() + 1;
    yearEl.innerText = nextYear;
    newYearTime = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
    gap = newYearTime - now;
  }

  // Constantes de tiempo
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Cálculos matemáticos
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  // Agregamos un cero a la izquierda si el número es menor a 10 (Mejora visual)
  dayEl.innerText = d < 10 ? "0" + d : d;
  hourEl.innerText = h < 10 ? "0" + h : h;
  minuteEl.innerText = m < 10 ? "0" + m : m;
  secondEl.innerText = s < 10 ? "0" + s : s;

  // Una vez calculados los primeros valores, hacemos visible la interfaz sin parpadeos
  if (yearEl.classList.contains("hidden")) {
    yearEl.classList.remove("hidden");
    countdownEl.classList.remove("hidden");

    yearEl.classList.add("visible");
    countdownEl.classList.add("visible");
  }

  // Bucle del temporizador cada segundo
  setTimeout(cuentaAtras, 1000);
}
