// Всплывающие формы
const bellIcon = document.getElementById('bellIcon');
const helpPopup = document.getElementById('helpPopup');
const helpTabs = document.getElementById('helpTabs');

bellIcon.addEventListener('click', () => {
  helpPopup.style.display = 'block';
});

function confirmHelp(answer) {
  if (answer) {
    helpPopup.style.display = 'none';
    helpTabs.style.display = 'block';
  } else {
    alert('Не стесняйтесь обращаться, если вам понадобится помощь!');
    helpPopup.style.display = 'none';
  }
}

function closeHelpTabs() {
    document.querySelectorAll('.tab input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
    document.getElementById('helpTabs').style.display = 'none';
  }  

function goBackToHelp() {
  // При клике на "Назад" возвращаемся к начальному состоянию "Нужна ли помощь?"
  helpTabs.style.display = 'none';
  helpPopup.style.display = 'block';
}
