const heroDetails = [
  {
    title: "Welcome to Chairy",
    text: "Best Furniture Collection for Your Interior",
    image: "images/chair.png",
    percentage: "54%"
},
{
    title: "Elegant and Modern Sofas",
    text: "Comfort Meets Style in Every Sofa We Offer",
    image: "images/sofa.png",
    percentage: "70%"
},
{
    title: "Premium Dining Tables",
    text: "Transform Your Dining Room with Our Exquisite Tables",
    image: "images/dining-table.png",
    percentage: "60%"
},
];

function populateSliders() {
  heroDetails.forEach((hero,index )=>{
    const heroDiv=document.getElementById(`slider${index + 1}`);
    heroDiv.innerHTML=`<div>
    <h5>${hero.title}</h5>
    <p>${hero.text}</p>
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