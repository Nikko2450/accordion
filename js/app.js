document.addEventListener('DOMContentLoaded', function(){
  const accordion = document.querySelector('.accordion');
  const accordionButton = accordion.querySelectorAll('.accordion__trigger');

  accordionButton.forEach(item => {
    item.addEventListener('click', () => {
      const currentAccordion = accordion.querySelector('.active');
      console.log(currentAccordion);  
      if (currentAccordion === null) {
        item.parentNode.parentNode.classList.add('active');
      } else {
        const currentButton = currentAccordion.querySelector('.accordion__trigger');
        if (currentButton !== item) {
          item.parentNode.parentNode.classList.add('active');
          currentAccordion.classList.remove('active');
        } else if (currentButton === item) {
          currentAccordion.classList.remove('active');
        }
      } 
    });
  });

});
