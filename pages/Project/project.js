document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
  
    function checkPosition() {
      for (let i = 0; i < sections.length; i++) {
        let positionFromTop = sections[i].getBoundingClientRect().top;
        if (positionFromTop - window.innerHeight < 0) {
          sections[i].classList.add('in');
          sections[i].classList.remove('out');
        } else {
          sections[i].classList.add('out');
          sections[i].classList.remove('in');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
  
    checkPosition();
  });