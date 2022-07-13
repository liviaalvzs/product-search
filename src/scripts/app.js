import { productsJson } from "../products/products.js";

const c = (el) =>document.querySelector(el);
const ca = (el) =>document.querySelectorAll(el);

productsJson.map((item, index) => {
    let productItem = c('.models .product-item').cloneNode(true);
    c('.product-area').append(productItem) // injetando na tela principal os modelos de cada produto
    // preenchendo os modelos com dados dos produtos
    productItem.querySelector('.product-img img').src = item.img
    productItem.querySelector('.product-title').innerHTML = item.name
    productItem.querySelector('.product-price').innerHTML = item.price


    console.log(productItem);
    }
    )
