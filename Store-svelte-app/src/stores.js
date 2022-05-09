import {readable,writable,derived} from "svelte/store"
let cart = writable([])
let products = readable([{
        id: 1,
        name: "Italian House Blend",
}]);

let totalprice = derived(
        cart,
        ($cart) =>{
            let price = 0;
            $cart.forEach(e => price = price + e.price);
            return price;
        }
);

export {cart,products,totalprice};