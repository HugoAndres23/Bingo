function cargarVista(vista) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `views/${vista}.html`, true);

  xhr.onload = function() {
      if (xhr.status === 200) {
          document.getElementById('contenido').innerHTML = xhr.responseText;
      } else {
          document.getElementById('contenido').innerHTML = '<p>Error al cargar la vista.</p>';
      }
  };
  xhr.send();
}

window.onload = function() {
  cargarVista('inicio');
};

document.addEventListener('click', function(e) {
  if (e.target.closest('.oneplayer') || e.target.closest('.twoplayer')) {
    var jugadores = e.target.closest('.oneplayer') ? 1 : 2;
    cargarVista('juego');
    document.getElementById('logo').style.width = '12%';
  }
});