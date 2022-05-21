<script>
  import {products, cart} from "../stores.js";
  import {Link} from "svelte-routing";
  import Button from "./Button.svelte";
  
  let individualID = document.location.pathname.split("/")[2];
  console.log(individualID)
  //let individualName;
  
  const addToCart = (product) => {
    for(let item of $cart) {
        if(item.id === product.id) {
          product.quantity += 1
          $cart = $cart;
          return;
        }
    }
    $cart = [...$cart, product]
  }
</script>


<style>
</style>

<Link to="products">{"<< Back to Shop"}</Link>

<div id="productdetails">
  {#each $products as product }
    {#if product.id == individualID}
      <div>
        <p><img src="{product.image}" alt="{product.name}" /></p>
      </div>
      <div>
        <p>{product.name}</p>
        <p>SKU: {individualID}</p>
        <h2>${product.price}</h2>
        <Button on:click={() => addToCart(product)}>
          Add to cart
        </Button>
      </div>
    {/if}
  {/each}
</div>

