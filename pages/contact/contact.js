const frst = document.querySelector(".frst")
const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");
const contactForm = document.querySelector("contact-form")

const hideBtn =() =>{
    frst.style.visibility= "hidden";
    contactForm.style.visibility= "visible";
    frst.style.transition= "0.2s ease"; 
  }
  yesBtn.addEventListener("click", hideBtn);


  

  // const displayBtn =() =>{
  //   contactForm.style.visibility= "visible";
  //   contactForm.style.transition= "0.2s ease";
  // }
  // yesBtn.addEventListener("click",displayBtn);

