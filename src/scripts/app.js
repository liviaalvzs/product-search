import { productsJson } from "../products/products.js";

// SWICTH MODE (DARK/LIGHT) -------------------------------------
var checkbox = document.querySelector(".change-theme-checkbox");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.querySelector("link[href='styles/light-style.css']").href = "styles/dark-style.css";
    document.getElementById('icon').src = "img/darkmode-icon.png"
  } else {
    document.querySelector("link[href='styles/dark-style.css']").href = "styles/light-style.css";
    document.getElementById('icon').src = "img/icon.png"
  }
});


// SEARCH -------------------------------------------------------
document.querySelector('#search-item').addEventListener('keyup', function () {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".product-item")
    const pname = document.getElementsByClassName("product-title")
    console.log(pname)
    
    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByClassName("product-title")[0];
        if (match) {
            let textvalue = match.textcontent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display="none";
            }
        }
    }
});

// INJETANDO PRODUTOS NO HTML -----------------------------------
productsJson.map((item, index) => {
    let productItem = document.querySelector('.models .product-item').cloneNode(true);
    document.querySelector('.product-area').append(productItem) // injetando na tela principal os modelos de cada produto
    // preenchendo os modelos com dados dos produtos
    productItem.querySelector('.product-img img').src = item.img;
    productItem.querySelector('.product-title').innerHTML = item.name;
    productItem.querySelector('.product-price').innerHTML = "R$ " + item.price.toFixed(2);
    }
)

