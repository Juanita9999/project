const heroDetails = [
  {
    title: "Welcome to Chairy",
    text: "Best Furniture Collection for Your Interior",
    button: "Shop Now ",
    image: "images/chair.png",
    percentage: "54%",
    colorBg: "#F0F2F3",
    circle: "#E1E3E5",
    class: "chair",
    imgclass: "imgchair",
},
{
    title: "Elegant and Modern Sofas",
    text: "Comfort Meets Style in Every Sofa We Offer",
    button: "Shop Now ",
    image: "images/sofa.png",
    percentage: "70%",
    colorBg: "#30B2F3",
    circle: "#1D8EBE",
    class: "sofa",
    imgclass: "imgsofa",
},
{
    title: "Premium Dining Tables",
    text: "Transform Your Dining Room with Our Exquisite Tables",
    button: "Shop Now ",
    image: "images/dining-table.png",
    percentage: "60%",
    colorBg: "#F082A3",
    circle: "#D56783",
    class: "dining",
    imgclass: "imgdining",
},
];

function populateSliders() {
  heroDetails.forEach((hero,index)=>{
    const heroDiv=document.getElementById(`slider${index + 1}`);
    heroDiv.style.backgroundColor=hero.colorBg;
    heroDiv.innerHTML=`<div>
    <h5>${hero.title}</h5>
    <p>${hero.text}</p>
    <button>${hero.button} <span><i class="fa-solid fa-arrow-right"></i></span> </button>
    <div class="circle" style="background-color:${hero.circle}">
    <div class=' ${hero.imgclass} hero-img'><img src="${hero.image}" alt="${hero.title}"/></div>
    <div class="discount-container"> 
    <div class="discount ${hero.class}"><span class="discount-number"> ${hero.percentage}</span>
    <span class="discount-word">Discount</span>
     </div>
    </div>
    </div>
   
    </div>`
  })
};
function startSlider() {
  let currentSlider = 0;
  const sliderElements = document.querySelectorAll('.slider');

  function showNextSlider() {
      sliderElements[currentSlider].classList.remove('active');
      currentSlider = (currentSlider + 1) % sliderElements.length;
      sliderElements[currentSlider].classList.add('active');
  }

  sliderElements[currentSlider].classList.add('active');
  setInterval(showNextSlider, 5000); // Change slide every 5 seconds
}
populateSliders();
startSlider();