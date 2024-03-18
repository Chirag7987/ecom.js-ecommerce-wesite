export const addToCard = (event,id, stock)=> {
    const currentProductElem = document.querySelector(`#card${id}`);
    let product = currentProductElem.querySelector(".productQuantity").innerText;
    let price = currentProductElem.querySelector('.productPrice').innerText;
    console.log(product , price);
};