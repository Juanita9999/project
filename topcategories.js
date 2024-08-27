const categoryInfo = [ {
  productname : "wing chair",
  stock : "3,584 Products ",
  image : "images/category1.png",

},
{
  productname : "wooden chair",
  stock : "157 Products ",
  image : "images/category2.png",

},
{
  productname : "wing chair",
  stock : "154 Products ",
  image : "images/category3.png",

},
{
  productname : "Park bench",
  stock : "154 Products ",
  image : "images/category4.png",

},
{
  productname : "wing chair",
  stock : "3,584 Products ",
  image : "images/category5.png",

},
]

function categorySlider() {
  categoryInfo.forEach((category,i)=>{
    const categoryDiv = document.getElementById(`category${i + 1}`);
    categoryDiv.innerHTML = `<div>
    <div class="category-image" > <img src="${category.image}"> 
      <div class="bottom-layer">
        <div>
          <h4 class="product-name">${category.productname}</h4>
          <p class="product-stock">${category.stock}</p>
        </div>
      </div>
      </div>
    </div>`

  }
)
};

function startSlider() {
  let currentSlider = 0;
  const sliderElements = document.querySelectorAll('.category');

  function showNextSlider() {
      sliderElements[currentSlider].classList.remove('active');
      currentSlider = (currentSlider + 1) % sliderElements.length;
      sliderElements[currentSlider].classList.add('active');
  }

  sliderElements[currentSlider].classList.add('active');
  setInterval(showNextSlider, 5000); // Change slide every 5 seconds
}
categorySlider();
startSlider();