let name= prompt('¿Cuál es tu nombre?');
let age = prompt('¿Cuántos años tienes?');
let language = prompt('¿Qué lenguaje de programación estás estudiando?');

alert(`Hola ${name}! Tu edad es ${age} años y estás estudiando ${language}.`);

let likeLanguage = prompt(`¿Te gusta estudiar ${language}? Responde con el número 1 para SÍ o 2 para NO.`);

if (likeLanguage == '1'){
  alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.')
}
if (likeLanguage == '2'){
  alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?')
}
