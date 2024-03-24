import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showTost";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCard = (event,id, stock)=> {
    const currentProductElem = document.querySelector(`#card${id}`);

    let arrLocalStorageProduct = getCartProductFromLS();

    let quantity = currentProductElem.querySelector(".productQuantity").innerText;
    let price = currentProductElem.querySelector('.productPrice').innerText;

    price = price.replace('₹',"");

    let existingProduct = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    );

    if(existingProduct && quantity>1){
        quantity = Number(existingProduct.quantity)+Number(quantity);
        price =Number(price*quantity);
        let updateProduct = ({id,quantity,price});
      
        updateProduct= arrLocalStorageProduct.map( (curProd) =>{
            return curProd.id===id?updateProduct:curProd;
            
        });
        localStorage.setItem('cartProductLS',JSON.stringify(updateProduct));

         //show toast when product added to the cart
        showToast("add", id);

        // console.log(`quantity`,quantity);
    }
    if(existingProduct)
    {
        // alert("duplicate value");
        return false 
    }
    price = price*quantity;
    quantity=Number(quantity); 

    arrLocalStorageProduct.push({id,price,quantity});
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

     //show toast when product added to the cart
    showToast("add", id);
    
};