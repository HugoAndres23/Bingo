import { showCard, loadView, showNumber, showBinguito, showBingo } from './domUtils.js';
import { getCard, getStatus, getNumber, checkBinguito, checkBingo, resetGame} from './api.js';

window.onload = function() {
  loadView('inicio');
};

export var contador = 0;

document.addEventListener('click', function(e) {
  if (e.target.closest('.oneplayer') || e.target.closest('.twoplayer')) {
    const players = e.target.closest('.oneplayer') ? 1 : 2;
    loadView('juego');
    document.getElementById('logo').style.width = '12%';
    resetGame();
    var card = getCard();
    showCard(card);
  }

  if (e.target.closest('.generar')) {
    contador++;
    document.getElementById('contador').textContent = contador;
    var number = getNumber();
    showNumber(number);
    setTimeout(() => {
      showBingo(checkBingo(), contador);
      var card = getStatus();
      showCard(card);
      showBinguito(checkBinguito(), contador);
    }, 150);
  }

  if (e.target.closest('.reset')) {
    resetGame();
    window.location.reload()
  }
});