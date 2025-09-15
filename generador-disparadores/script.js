const disparadores = [
  "Sus ojos eran el reflejo de un verano eterno.",
  "Nunca había sentido que alguien entendiera sus silencios.",
  "Cada mensaje suyo era un latido que aceleraba mi corazón.",
  "Se encontraron bajo la lluvia y todo cambió.",
  "El aroma de su perfume seguía flotando en mi memoria.",
  "Nunca creí en el amor a primera vista… hasta ese día.",
  "Cada despedida era un suspiro que duraba días.",
  "Su voz era mi melodía favorita.",
  "Se escribían cartas que jamás debían ser leídas por nadie más.",
  "Sus miradas eran poesía que no necesitaba palabras.",
  "Todo empezó con un café compartido.",
  "Nunca había sentido que un abrazo pudiera decir tanto.",
  "Su amor era un secreto que ambos guardaban con ternura.",
  "Se perdieron entre la multitud y se encontraron en una sonrisa.",
  "Sus manos contaban historias que nadie más podía entender.",
  "La ciudad parecía más viva cuando él estaba cerca.",
  "Su risa tenía el poder de curar cualquier tristeza.",
  "Sus palabras eran un refugio en medio de la tormenta.",
  "Se amaban en silencios que hablaban más que cualquier declaración.",
  "Cada carta que recibía era un mundo nuevo.",
  "Nunca se cansaban de mirarse.",
  "Se escribían mensajes que solo ellos podían descifrar.",
  "Sus risas se mezclaban en un ritmo perfecto.",
  "Todo lo que él hacía la hacía sentir viva.",
  "Sus encuentros eran como capítulos de un libro que no quería terminar.",
  "Nunca había sentido que alguien completara sus silencios.",
  "Todo comenzó con una nota olvidada en un libro.",
  "Sus manos se buscaban en la oscuridad.",
  "Cada despedida era la promesa de un reencuentro.",
  "Sus susurros llenaban el silencio de la noche.",
  "Cada día junto a él era un nuevo descubrimiento.",
  "Sus caricias hablaban más que cualquier palabra.",
  "El primer encuentro quedó grabado en su memoria.",
  "Se amaban en los pequeños detalles que nadie más veía.",
  "Nunca se imaginó que un encuentro casual cambiaría su vida.",
  "Cada abrazo suyo era un hogar que no quería dejar."
];

const disparadorDiv = document.querySelector('#disparador');
const boton = document.querySelector('button');

boton.addEventListener('click', generarDisparador);

function generarDisparador() {
  const randomIndex = Math.floor(Math.random() * disparadores.length);

  // efecto de desvanecimiento
  disparadorDiv.style.opacity = 0;
  setTimeout(() => {
    disparadorDiv.textContent = disparadores[randomIndex];
    disparadorDiv.style.opacity = 1;
  }, 200);
}
