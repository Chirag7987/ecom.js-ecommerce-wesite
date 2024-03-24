import { addToCard } from "./addToCard";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer =(products) => {
    if(!products){
        return false
    }

    products.forEach((curProd) => {
        const {id, name, category , brand ,price, stock, description, image}=curProd;
    
    const productClone= document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardvalue").setAttribute("id", `card${id}`);
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src= image;
    productClone.querySelector('.productImage').alt= name;
    productClone.querySelector('.productDiscription').textContent = description;
    productClone.querySelector('.productStock').textContent = stock;
    productClone.querySelector('.productPrice').textContent =  `₹${price}`;
    productClone.querySelector('.productActualPrice').textContent = `₹${price*4}`;
    productClone.querySelector('.category').textContent = category;
    
    productClone.querySelector(".stockElement").addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

    productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
        addToCard(event, id, stock);
        
      });

    productContainer.append(productClone);
});

};