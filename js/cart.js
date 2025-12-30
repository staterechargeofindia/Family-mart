function addToCart(name,price,merchant){
 const cart=JSON.parse(localStorage.getItem("cart"))||[];
 cart.push({name,price,merchant});
 localStorage.setItem("cart",JSON.stringify(cart));
 updateCartCount();
 alert("Added to cart");
}
function updateCartCount(){
 const c=JSON.parse(localStorage.getItem("cart"))||[];
 const el=document.getElementById("cartCount");
 if(el) el.innerText=c.length;
}
