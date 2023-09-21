var products = [
  {
    id: 1,
    img: "./imgs/jacket1.jpg",
    title: "Jacket1",
    price:200,
    description: " this is very good description about Jacket1",
    category: "clothes",
  },
  {
    id: 2,
    img: "./imgs/jaket2.jpg",
    title: "Jacket2",
    price:200,
    description: " this is very good description about Jacket2",
    category: "clothes",
  },
  {
    id: 3,
    img: "./imgs/watch1.jpg",
    title: "Watch1",
    price:200,
    description: " this is very good description about Watch1",
    category: "electronics",
  },
  {
    id: 4,
    img: "./imgs/watch2.jpg",
    title: "Watch2",
    price:200,
    description: " this is very good description about Watch2",
    category: "electronics",
  },
  {
    id: 5,
    img: "./imgs/printer1.webp",
    title: "Printer1",
    price:200,
    description: " this is very good description about Priner1",
    category: "devices",
  },
  {
    id: 6,
    img: "./imgs/printer2.webp",
    title: "Printer2",
    price:200,
    description: " this is very good description about Priner2",
    category: "devices",
  },
];

var container = document.getElementById("products");
var cart = [];

function showProducts(arr) {
  container.innerHTML = "";
  arr.forEach((product) => {
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

    button.addEventListener("click", () => {
      cart.push(product);
      showCart();
    });

    cardDiv.append(img, title, description, button);
    container.appendChild(cardDiv);
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
    description.textContent = product.description;

    // const button = document.createElement("button");
    // button.classList.add("cartBtn");
    // button.textContent = "Add To Cart";

    cardDiv.append(img, title, description);
    cartContainer.appendChild(cardDiv);
  });
}

var all = document.getElementById("allBtn");
var jacket = document.getElementById("jacketBtn");
var watch = document.getElementById("watchBtn");
var printer = document.getElementById("printerBtn");

jacket.addEventListener("click", () => {
  var filteJacket = products.filter((product) => {
    return product.category === "clothes";
  });
  showProducts(filteJacket);
});

watch.addEventListener("click", () => {
  var filteJacket = products.filter((product) => {
    return product.category === "electronics";
  });
  showProducts(filteJacket);
});

printer.addEventListener("click", () => {
  var filteJacket = products.filter((product) => {
    return product.category === "devices";
  });
  showProducts(filteJacket);
});

all.addEventListener("click", () => {
  showProducts(products);
});
