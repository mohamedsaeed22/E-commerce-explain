
/**

      <!-- <div class="card">
        <img src="./imgs/jacket1.jpg" alt="" />
        <p class="title">Jacket</p>
        <p class="description">
          this is very good jaket , and this ddescription
        </p>
        <button class="cartBtn">Add To Cart</button>
      </div> -->



 container.innerHTML += `
  <div class="card">
  <img src="./imgs/jacket1.jpg" alt="" />
  <p class="title">Jacket</p>
  <p class="description">
    this is very good jaket , and this ddescription
  </p>
  <button class="cartBtn" onclick="show(${el})">Add To Cart</button>
</div>


 *   const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const img = document.createElement("img");
  img.src = "./imgs/jacket1.jpg";

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = "Jacket";

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = "this is very good jacket, and this description";

  const button = document.createElement("button");
  button.classList.add("cartBtn");
  button.textContent = "Add To Cart";

  cardDiv.append(img, title, description, button);
  container.appendChild(cardDiv);
  


  var cartContainer = document.getElementById("cart");
function showCart() {
  cartContainer.innerHTML = "";
  cart.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.src = "./imgs/jacket1.jpg";

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "Jacket";

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "this is very good jacket, and this description";

    const button = document.createElement("button");
    button.classList.add("cartBtn");
    button.textContent = "Add To Cart";

    cardDiv.append(img, title, description, button);
    cartContainer.appendChild(cardDiv);
  });
}
 * 


var jacket = document.getElementById("jacketBtn");
var watch = document.getElementById("watchBtn");
var printer = document.getElementById("printerBtn");

jacket.addEventListener("click", () => {
  console.log("jacket");
});

watch.addEventListener("click", () => {
  console.log("watch");
});
printer.addEventListener("click", () => {
  console.log("printer");
});

 * 
 */


/**
 * var products = [
  {
    id: 1,
    img: "./imgs/jacket1.jpg",
    title: "Jacket1",
    description: " this is very good description about Jacket1",
    category: "clothes",
  },
  {
    id: 2,
    img: "./imgs/jaket2.jpg",
    title: "Jacket2",
    description: " this is very good description about Jacket2",
    category: "clothes",
  },
  {
    id: 3,
    img: "./imgs/watch1.jpg",
    title: "Watch1",
    description: " this is very good description about Watch1",
    category: "electronics",
  },
  {
    id: 4,
    img: "./imgs/watch2.jpg",
    title: "Watch2",
    description: " this is very good description about Watch2",
    category: "electronics",
  },
  {
    id: 5,
    img: "./imgs/printer1.webp",
    title: "Printer1",
    description: " this is very good description about Priner1",
    category: "devices",
  },
  {
    id: 6,
    img: "./imgs/printer2.webp",
    title: "Printer2",
    description: " this is very good description about Priner2",
    category: "devices",
  },
];

var container = document.getElementById("products");
var cart = [];

function showProducts(productsArray) {
  container.innerHTML = "";
  productsArray.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.src = product.img;

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = product.title;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = product.description;

    const button = document.createElement("button");
    button.classList.add("cartBtn");
    button.textContent = "Add To Cart";

    cardDiv.append(img, title, description, button);
    container.appendChild(cardDiv);

    button.addEventListener("click", () => {
      cart.push(product);
      console.log(cart);
      showCart();
    });
  });
}

showProducts(products);

var cartContainer = document.getElementById("cart");

function showCart() {
  cartContainer.innerHTML = "";
  cart.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.src = product.img;

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = product.title;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = product.description

    const button = document.createElement("button");
    button.classList.add("cartBtn");
    button.textContent = "Add To Cart";

    cardDiv.append(img, title, description, button);
    cartContainer.appendChild(cardDiv);
  });
}

var jacket = document.getElementById("jacketBtn");
var watch = document.getElementById("watchBtn");
var printer = document.getElementById("printerBtn");
var all = document.getElementById("allBtn");

jacket.addEventListener("click", () => {
  var filterArr = products.filter((product) => {
    return product.category == "clothes";
  });
  showProducts(filterArr);
});

watch.addEventListener("click", () => {
  var filterArr = products.filter((product) => {
    return product.category == "electronics";
  });
  showProducts(filterArr);
});
printer.addEventListener("click", () => {
  var filterArr = products.filter((product) => {
    return product.category == "devices";
  });
  showProducts(filterArr);
});
all.addEventListener("click", () => {

  showProducts(products);
});

 * 
 */