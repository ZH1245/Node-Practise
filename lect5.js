// ASYNC SYNC part2
makePizza = (flavour) => {
  return new Promise((resolve, reject) => {
    if (flavour == "Fajita") {
      reject("Fajita Is Out Of Stock");
      return;
    }
    setTimeout(() => {
      console.log("Preparing Pizza");
      resolve(flavour + " Pizza Prepared");
    }, 1000);
  });
};
makePizza("BBQ")
  .then((message) => console.log(message))
  .catch((message) => console.log(message));

//   AXIOS
const axios = require("axios");
axios
  .get("https://usman-recipes.herokuapp.com/api/recipes/asdasf123")
  .then((res) => console.log(res.data))
  .catch((error) => console.log(error.message));

// AWAIT
