<script>
  import { cart } from "../stores";
  import CTAButton from "./CTAButton.svelte";
  
  const removeItem = (product) => {
    for(let item of $cart) {
      if(item.id === product.id) {
        if(product.quantity > 1 ) {
          product.quantity -= 1
          $cart = $cart
        } else {
          $cart = $cart.filter((cartItem) => cartItem != product)
        }
        return;
      }
    }
  }
  
  const addItem = (product) => {
    for(let item of $cart) {
      if(item.id === product.id) {
        product.quantity += 1
        $cart = $cart;
        return;
      }
    }
  }

  $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
</script>

<style>
  .title { 
    font-size: 24px; 
    font-weight: bold; 
  }

  .cart-list { 
    border: 2px solid; 
    padding: 10px;   
    width: 330px; 
    margin-left: 30px; 
  }

  h4 { 
    border-bottom: 1px solid #d7d7d7; 
    padding: 21px; 
    margin: 0; 
  }
  .item > button { 
    height: 25px; 
  }
  button{
    margin-top: 10px;
  }
  .cart-item { 
    display: grid; 
    grid-template-columns: 50px 100px 50px 30px 30px 50px; 
    border-bottom: 1px solid #d7d7d7; padding: 10px; 
  }
 
  
  .cart-item > span:nth-child(6) { 
    padding-left: 15px; 
  }
  
  .total { 
    text-align: right; 
  }
</style>
<div class="cart-list">
  <span class="title">Cart</span>
    <div class="total">
      <h4>Total: $ {total}</h4>
    </div>  
      {#each $cart as item}
        {#if item.quantity > 0}
          <div class="cart-item">
            <img width="50" src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <div>
              {item.quantity} <br>
              <button on:click={() => addItem(item)}>+</button>
              <button on:click={() => removeItem(item)}>-</button>
            </div>
            <span>${item.price * item.quantity}</span>
          </div>
        {/if}
      {/each}
</div>

