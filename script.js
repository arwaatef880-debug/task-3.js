///////////////////  بيانات المتجر  ///////////////////

let store = {
    name: "Coffee Shop",
    city: "Cairo",
    phone: "01012345678",
};

 document.querySelector("#store-name") .innerHTML = store.name;
 document.querySelector("#store-info").innerHTML = store.city + " | " + store.phone;



///////////////////// السله  ////////////////////////
let cart = [
    { name: "coffee",
      price: 150, 
      qty: 2 },

    { name: "Cupcake",
      price: 250, 
      qty: 2 },

    { name: "Cake",
      price: 500, 
      qty: 1 }
           ];

    
//////////////////// التعديل على السله  ///////////////////
 cart.push({                     //اضافه منتج جديد فى اخر السله
               name: "Spanish Latte",  
               price: 100, 
               qty: 3 });

cart.unshift({                 //المتجر حط هديه فى اول السله سعرها 0
               name: "Mocha (Gift)",
               price: 0,
               qty: 5 });

 cart.pop();                   //العميل شال اخر منتج ضافه

 cart.shift();                 //الهديه خلصت ف شيلها من اول السله



 //////////////////// عرض السله  ///////////////////
let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {

     let itemTotal = cart[i].price * cart[i].qty;  
      totalPrice = totalPrice + itemTotal ;


       document.querySelector("#cart").innerHTML += `<li>${cart[i].name}  -
        ${cart[i].price} EGP x ${cart[i].qty} = ${itemTotal} EGP </li>`;
   
       
}
document.querySelector("#count").innerHTML = `You have ${cart.length} items in your cart`;
document.querySelector("#total").innerHTML = `Total: ${totalPrice.toFixed(2)} EGP`;


