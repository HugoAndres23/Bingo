import { showCard, loadView, showNumber } from './domUtils.js';
import { getCard, getStatus, getNumber } from './api.js';

window.onload = function() {
  loadView('inicio');
};

document.addEventListener('click', function(e) {
  if (e.target.closest('.oneplayer') || e.target.closest('.twoplayer')) {
    const players = e.target.closest('.oneplayer') ? 1 : 2;
    loadView('juego');
    document.getElementById('logo').style.width = '12%';
    var card = getCard();
    showCard(card);
  }

  if (e.target.closest('.generar')) {
    var number = getNumber();
    showNumber(number);
    setTimeout(() => {
      var card = getStatus();
      showCard(card);
    }, 10);
  }
});