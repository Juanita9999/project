const productInfo = [
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
function productGrid() {
  productInfo.forEach((product,i)=>{
    const productItem = document.getElementById(`Product${ i + 1}`);
    
    let productTitle = "product-title"
    let cartClass = "cart-class"

    if (product.inCart === true  ){
      cartClass = "cart-full";
      productTitle = "product-full"
    }
    else if (product.inCart === false  ){
      cartClass = "cart-empty" ;
      productTitle = "product-empty" 
    }
     let newProduct = " "
     if (product.new === true){
      newProduct ="new-product"
     }
     let saleProduct = " "
     if (product.sale === true){
      saleProduct = "sale-product"
     }
   
    productItem.innerHTML= `<div>
    <div class="product-chair" > <img src="${product.image}"> 
    <p class="${newProduct} hidden"> New </p>
    <p class="${saleProduct} hidden" > Sale   </p>
      <div class="bottom">
        <div>
          <h4 class="product-name ${productTitle}" >${product.productname}</h4>
          <p class="product-price">${product.price}</p>
        </div>
        <div class="${cartClass}"><i class=" fa-solid fa-cart-shopping"></i></div>
      </div>
      <p></p>
    </div>
    </div>
    `
  })
};

productGrid();