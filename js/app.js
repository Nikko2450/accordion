document.addEventListener('DOMContentLoaded', function() {
  const accordion = document.querySelector('.accordion');
  const accordionButtons = accordion.querySelectorAll('.accordion__header');

  accordionButtons.forEach(item => {
    item.addEventListener('click', () => {
      const activePanel = accordion.querySelector('.active');

      if (activePanel) {
        const activeButton = activePanel.querySelector('.accordion__header');
        activePanel.classList.remove('active');
        
        if (activeButton !== item) {
          item.closest('.accordion__panel').classList.add('active');
        } 
      } else {
        item.closest('.accordion__panel').classList.add('active');
      } 
    });
  });
});
