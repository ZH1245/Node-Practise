// ASYNC SYNC
makePizza = (flav) => {
  setTimeout(function () {
    console.log("Preparing Pizza");
    return flav + " Pizza has been Prepared";
  }, 1000);
  return "Order Received " + flav + " PIZZA";
};

console.log(makePizza("TIKKA"));

// CallBack
makePizza2 = (flav, callback) => {
  console.log("Order Received");
  console.log("Preparing Pizza");
  setTimeout(() => {
    callback(flav + " Pizza");
  }, 1000);
};

handlePizza = (pizza) => {
  console.log("Eating " + pizza);
};
makePizza2("Tikka", handlePizza);
console.log("Pizza Ordered");

// Promises
makePizza3 = (flavour) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Preparing Pizza");
      resolve(flavour + " Pizza prepared");
    }, 1000);
  });
};
makePizza3("BBQ").then((message) => console.log(message));
// console.log(makePizza3("BBQ"));
