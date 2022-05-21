<script>
  import {cart,totalprice} from "../stores.js";
  import InlineSVG from 'svelte-inline-svg';

  $: attributes = {
    width: 50,
    height: 50
  }    

  $: attributesCart = {
    width: 30,
    height: 30
  }
  export let name = "Guest";
  import { getContext } from "svelte"; 
  const { loggedIn } = getContext('key');
  $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
</script>

<style>
</style>


<header>
  <div>
    <span><InlineSVG src="/images/logo.svg" {...attributes} /></span>
    <span>Small Coffee Company</span>
  </div>
  <div class="basket">
    {#if loggedIn}
      <div>Hi,{name} | Logout</div>
    {:else}
      <div>Hi,Guest | Login</div>
    {/if}
    <span><InlineSVG src="/images/shoppingcart.svg" {...attributesCart} /></span>
    <span>{$cart.length} items: ${total}</span>
  </div>
</header>

