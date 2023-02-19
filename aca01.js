/* Código para el buscador 
const searchInput = document.querySelector('#search-input');
const sections = document.querySelectorAll('section');

searchInput.addEventListener('input', (event) => {
const searchTerm = event.target.value.toLowerCase();
sections.forEach((section) => {
if (section.textContent.toLowerCase().includes(searchTerm)) {
section.style.display = 'block';
} else {
section.style.display = 'none';
}
});
});
*/
/* Otro Código para el buscador */
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', function() {
  console.log('Búsqueda ejecutada');
});
/* Código para copiar el fragmento */
const copyButton = document.querySelector('.copy-button');

copyButton.addEventListener('click', (event) => {
  const codeBlock = event.target.closest('.code-block');
  const pre = codeBlock.querySelector('pre');

  navigator.clipboard.writeText(pre.textContent).then(() => {
    console.log('Código copiado al portapapeles');
  });
});
