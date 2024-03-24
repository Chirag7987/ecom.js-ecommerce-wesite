import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id,price) =>{
    let cartProducts = getCartProductFromLS();

    let eixstigProduct = cartProducts.find((curProd)=> curProd.id===id);

    let quantity =1 ;
    if(eixstigProduct){
        quantity = eixstigProduct.quantity;
        price = eixstigProduct.price;
    }
    return{quantity,price};
};