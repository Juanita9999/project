const ourProducts = [
  {
productname: "Library stool chair",
price: "$20",
image:  "images/productchair1.png",
sale: false,
new: true,
inCart: true,

},

{
  productname: "Library stool chair",
  price: "$20",
  image:  "images/productchair2.png",
  sale: true,
  new: false,
  inCart: false,
  
},
{
  productname: "Library stool chair",
  price: "$20",
  image:  "images/productchair3.png",
  sale: false,
  new: false,
  inCart: false,

},
{
  productname: "Library stool chair",
  price: "$20",
  image:  "images/productchair4.png",
  sale: false,
  new: false,
  inCart: false,
  
 },
];

function ourProductsGrid() {
  ourProducts.forEach((item,i)=>{
    const productsItem = document.getElementById(`item${ i + 1}`);
    productsItem.innerHTML= `<div>
    // <div class="product-chair" > <img src="${item.image}"> 
    //   <div class="bottom">
    //     <div>
    //       <h4 class="product-name">${item.productname}</h4>
    //       <p class="product-price">${item.price}</p>
    //     </div>
    //     <div><i class="${cartClass} fa-solid fa-cart-shopping"></i></div>
    //   </div>
    //   <p></p>
    // </div>
    123
    </div>
    `
  })
};

ourProductsGrid();
    