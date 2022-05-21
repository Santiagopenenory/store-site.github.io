import {readable,writable,derived} from "svelte/store"
let cart = writable([])
import * as myjson from '../public/stock.json';
let products = readable(myjson.default);
// let products = readable([{
//         id: 1,
//         name: "Italian House Blend",
// }]);

let totalprice = derived(
        cart,
        ($cart) =>{
            console.log("estoy aca")
            let price = 0;
            $cart.forEach(e => price = price + e.price);
            return price;
        }
);

export {cart,products,totalprice};