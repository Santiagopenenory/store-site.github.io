<script>
  import {products, cart} from "../stores.js";
  import {Link} from "svelte-routing";
  import CTAButton from "./CTAButton.svelte";
  
  let individualID = document.location.pathname.split("/")[2];
  console.log(individualID)
  //let individualName;
  
  const addToCart = (product) => {
    // for(let item of $cart) {
    //     if(item.id === product.id) {
      //       return;
      //     }
      // }
    product.quantity = 1
    $cart = $cart;
    $cart = [...$cart, product]
  }
  let getShopMenuItem = document.querySelector("nav > a:nth-child(2)"); 
  if (individualID.indexOf("/product") != -1) {
     getShopMenuItem.style.borderBottom = "5px solid #552200"; 
  }else{ 
    getShopMenuItem.style.borderBottom = "none"; 
    }
</script>


<style>
  #productdetails { 
    display: flex; 
    max-width: 800px;    
    margin: 0 auto; 
  }

  #productdetails div:nth-child(2) h2 { 
    text-align: right; 
  }

  #productdetails div:nth-child(2) p:nth-child(1) {    
    font-size: 36px; 
    font-weight: bold; 
    border-bottom: 1px solid grey; 
    margin-bottom: 0; 
  }

  #productdetails div:nth-child(2) p:nth-child(2) {    
    color: lightgrey; 
  }
</style>
<Link to="products">{"<< Back to Shop"}</Link>

<div id="productdetails">
  {#each $products as product }
    {#if product.id == individualID}
      <div>
        <p><img src="{product.large_image}" alt="{product.name}" /></p>
      </div>
      <div>
        <p>{product.name}</p>
        <p>SKU: {individualID}</p>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <CTAButton on:click={() => addToCart(product)}>
          Add to cart
        </CTAButton><br>
      </div>
    {/if}
  {/each}
</div>

