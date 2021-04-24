const frm = document.querySelector('#frm');
const btnViewOrder = document.querySelector("#view-order");
const tot =  document.querySelector("#total");
let cart = [];

frm.addEventListener("submit", function(event){
    event.preventDefault();
     const fd = new FormData(frm);

     let order = {};

     for (const key of fd.keys()){
         if(fd.get(key).toString().length > 0){
             order[key] = fd.get(key).toString();

         }
     }
     order["total"] = parseInt(order['qty'] * order["price"]);
     cart.push(order);

     if(confirm("This pizza will be added to your cart")){
         localSrorage.setItem("cart", JSON.stringify(cart));
     }
});

btnViewOrder.addEventListener('click', function(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart.length > 0){
        DocumentFragment.queySelector("#our-order").innerHTML += `<tr>
        <td>${element['Toppings']}</td>
        <td>${element['size']}</td>
        <td>${element['amount']}</td>
        <td>${element['price']}</td>
        <td>${parseInt(element['price']) * parseInt(element['qty'])}</td>
        </tr>`;
    }
});
const total = cart.reduce((sum, item) => sum + (parseInt(item['total'])), 0);

tot.innerHTML = "Total" + total.toString();
