// const { createElement } = require("react");

// ! Search Functionality
let searchfield=document.getElementById("Searchfield")

let Tiffincards=document.querySelectorAll(".cart_container")
// console.log(searchfield)
// console.log(TiffinContainer)
// console.log(Tiffincard)


searchfield.addEventListener("input",()=>{
   let searchterm= searchfield.value.toLowerCase().trim();
//    console.log(searchterm)
Tiffincards.forEach((card)=>{
    // console.log(card)
    let name=card.id
    // console.log(name)

    if(name.includes(searchterm)){
        card.style.display="flex"
        
    }else{
        card.style.display="none"
     
    }

})
})

// ! Cart Update Logic part
let cardQuantity=document.getElementById("cart_num")
// console.log(cardQuantity)
let cartPrice=document.getElementById("price")
// console.log(cartPrice)


let cart={}
let  totalQuantity=0
let totalprice=0

let carts=document.querySelectorAll(".cart_container")
// console.log(carts)
carts.forEach((card)=>{
    let itemid=card.id
//  console.log(itemid)
let itemName=card.querySelector(".food_title").innerText
// console.log(itemName)
let itemPrice=Number(card.querySelector(".food_price").innerText.replace("₹",""))
// console.log(itemPrice)
// console.log(itemPrice.typeof)
let itemQuantity=card.querySelector("span")
// console.log(itemQuantity)
let minusbtn=card.querySelectorAll(".quantity_btns")[0]
let plusbtn=card.querySelectorAll(".quantity_btns")[1]
// console.log(minusbtn)
// console.log(plusbtn)

cart[itemid]={
    name:itemName,
    price:itemPrice,
    quantity:0
};

plusbtn.addEventListener("click",()=>{
    cart[itemid].quantity++
    totalQuantity++

    totalprice+=itemPrice
    itemQuantity.innerText= cart[itemid].quantity

Updatecart()
})


minusbtn.addEventListener("click",()=>{
    if(cart[itemid].quantity>0){
          cart[itemid].quantity--
    totalQuantity--
   
    totalprice-=itemPrice
    itemQuantity.innerText= cart[itemid].quantity
     Updatecart()
    }
   
})


})




let Updatecart=()=>{
    cardQuantity.innerText=totalQuantity
    // console.log(cardQuantity.innerText)
    cartPrice.innerText=`₹ ${totalprice.toFixed(2)}`
}

// !Cart pop up logic
 let carticon=document.getElementById("cart")
//  console.log(carticon)
let closebtn=document.querySelector("#popup_container>button")
// console.log(closebtn)
let main=document.getElementById("popupmain")
// console.log(main)
carticon.addEventListener("click",()=>{
    main.style.display="flex";
    RendercartDetails()
   
})
closebtn.addEventListener("click",()=>{
    main.style.display="none";
})


let cartDetails=document.getElementById("cart_details")
let cart_total_price=document.querySelector("#cart_total_price>span")
let cart_total_items=document.querySelector("#cart_total_items>span")
// console.log(cartDetails)
// console.log(cart_total_items)
// console.log(cart_total_price)


function RendercartDetails(){
    cartDetails.innerHTML=""
    let hasresults=false;
    // console.log(cart)
    for(let id in cart){
       let name= cart[id].name
       let price= cart[id].price
       let quantity= cart[id].quantity
           if(quantity>0){
        hasresults=true;
        let para=document.createElement("p")
        para.innerHTML=`${name} x ${quantity} = ₹${(price*quantity).toFixed(2)}`
        cartDetails.append(para)
}
    }

     if(hasresults==false){
      cartDetails.innerHTML=`<p>No items in the cart</p>`
     }

     cart_total_items.innerText=totalQuantity
    cart_total_price.innerText=totalprice.toFixed(2)



}

// function renderCartDetails(){
//      cartDetails.innerHTML=""
//      let hasResults = false
//      for(let id in cart){
//          let name = cart[id].name
//          let price = cart[id].price
//          let quantity = cart[id].quantity
//          if(quantity>0){
//           hasResults=true;
//            let para = document.createElement("p")
//            para.innerHTML=`${name} x ${quantity} = ₹ ${(price*quantity).toFixed(2)}`
//            cartDetails.append(para)
//          }
//      }
//      if(hasResults==false){
//       cartDetails.innerHTML=`<p>No items in the cart</p>`
//      }

//      cart_total_items.innerText=totalQuantity
//      cart_total_price.innerText=totalprice.toFixed(2)
// }