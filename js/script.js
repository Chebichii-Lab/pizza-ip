$(document).ready(function(){
    $("#details").hide();
    $("#deliver").hide();
});

var totalPriceArray=[];
function Order(toppings, size, crust, amount) {
this.toppings = toppings;
this.size = size;
this.crust = crust;
this.pizzaPrice = 0;
this.amount = amount;
}

Order.prototype.pizzaCost = function() {
    if (this.toppings === "pepperoni") {
        this.pizzaPrice += 100;
      } else if (this.toppings === "pineapples") {
        this.pizzaPrice += 300;
      } else if (this.toppings === "mushrooms") {
        this.pizzaPrice += 350;
      } else if (this.toppings === "bacon") {
        this.pizzaPrice += 250;
      } else if (this.toppings === "cheese") {
        this.pizzaPrice += 600;
      }else if (this.toppings === "brocolli") {
          this.pizzaPrice += 150;
      }else if (this. toppings === "beef") {
          this.pizzaPrice += 600;
      }
        if (this.size === "small-pizza") {
            this.pizzaPrice += 300;
          } else if (this.size === "medium-pizza") {
            this.pizzaPrice += 600;
          } else if (this.size === "large-pizza") {
            this.pizzaPrice += 800; 
          }
    if (this.crust === "crispy") {
      this.pizzaPrice += 100;
    } else if (this.crust === "stuffed") {
      this.pizzaPrice += 150;
    } else if (this.crust === "baked") {
      this.pizzaPrice += 200;
    } else if (this.crust === "gluten-free") {
      this.pizzaPrice += 150;
    }
};
function Address(address) {
    this.address = address;
    this.deliveryAddress = (address);
  }

  Order.prototype.finalCost = function() {
    var cartTotalPrice = [];
    for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
      cartTotalPrice += totalPriceArray[arrayElement];
    }
    return cartTotalPrice;
  };

  $(".btn.finish").click(function() {
});
$("form#custom-pizza").submit(function(event) {
  event.preventDefault();
  var size = $("select#size").val();
  var crust = $("select#crust").val();
  var toppings = $("select#toppings").val();
  var pizzaDetails = (size + " - " + crust + " - " + toppings);
  var newPizzaOrder = new Order(size, crust, toppings);
  newPizzaOrder.pizzaCost();
  totalPriceArray.push(newPizzaOrder.pizzaPrice);
  // $("#pizza-details").hide();
  $("#final-cost").text(newPizzaOrder.finalCost());
  $("#details").append("<ul><li>" + pizzaDetails + "</li></ul>");
  // $("#size, #crust, #toppings,").val("");
});
$("#submit-pizza").click(function() {
  $("#deliver").toggle();
});

$("#finish-btn").click(function() {
  $("#order-details").toggle();
});


