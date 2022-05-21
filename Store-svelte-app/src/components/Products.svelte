<script>
  import {products, cart} from "../stores.js";
  import Cart from "./Cart.svelte";  
  import Button from "./Button.svelte";
  import {Link} from "svelte-routing";

  export let location;
  
  const addToCart = (product) => {
    console.log("Added");
    for (let item of $cart) {
        if(item.id === product.id) {
          product.quantity += 1
          $cart = $cart;
          return;
        }
    }
    $cart = [product,...$cart]
  }
</script>

<style>
</style>


<div class="product-list">
  {#await $products}
    <p>...loading products</p>
  {:then} 
    {#each $products as product}
      <div>
        <img src="{product.image}" alt="">
        <h4><Link to="product/{product.id}">{product.name}</Link></h4>
        <div class="cta">
          <p>${product.price}</p>
          <Button on:click={() => addToCart(product)}>
            Add to cart
          </Button>
        </div>
      </div>
    {/each}
  {/await}
</div>
<Cart />