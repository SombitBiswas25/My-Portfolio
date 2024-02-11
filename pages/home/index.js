
// var typed= new Typed("#text",{
//     Strings:['Frontend Developer' , 'youTuber' , 'Web Developer'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true,
// })
var typed = new Typed('#text', {
    strings: ['Frontend Developer.' , 'YouTuber.' , 'Web Developer.'],
    typeSpeed:50,
     backSpeed:50,
     backDelay:1000,
     loop:true,
  });

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
  