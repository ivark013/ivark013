const toast = document.querySelector('.toast');
function announce(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelector('#pauseButton').addEventListener('click', (event) => {
  const paused = event.currentTarget.dataset.paused === 'true';
  event.currentTarget.dataset.paused = String(!paused);
  event.currentTarget.textContent = paused ? 'Pause all' : 'Resume all';
  document.querySelector('.mission-top span:nth-child(2)').textContent = paused ? 'COLLECTIVE IS ACTIVE' : 'COLLECTIVE IS PAUSED';
  announce(paused ? 'Collective resumed. Human approval remains required.' : 'Collective paused. No research tasks will run.');
});

document.querySelector('#addAgent').addEventListener('click', () => {
  announce('Agent invitation draft opened for administrator review.');
});

document.querySelectorAll('.arrow-button').forEach((button) => button.addEventListener('click', () => announce('Research brief opened for your review.')));
