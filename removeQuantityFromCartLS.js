import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showTost";
import { updateCartValue } from "./updateCartValue";

export const removeQuantityFromCartLS = (id) =>{
    let cartProducts = getCartProductFromLS();

     cartProducts = cartProducts.filter((curProd)=> curProd.id !== id);



    // update the localStorage after removing the item
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    //   to remove the div onclick
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
      removeDiv.remove();

  
      //show toast when product added to the cart
      showToast("delete", id);
    }
  
    // -----------------------------------------------------
    // calculating the card total in our cartProducts page
    // --------------------------------------------------------
    // updateCartProductTotal();
  
    updateCartValue(cartProducts);
};