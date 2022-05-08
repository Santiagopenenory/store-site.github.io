<script>
  import {cart} from "../stores.js";
  import InlineSVG from 'svelte-inline-svg';

  $: attributes = {
    width: 50,
    height: 50
  }    

  $: attributesCart = {
    width: 30,
    height: 30
  }
  $: size = cart.length;
</script>

<style>
</style>


<header>
  <div>
    <span><InlineSVG src="/images/logo.svg" {...attributes} /></span>
    <span>Small Coffee Company</span>
  </div>
  <div>
    <span><InlineSVG src="/images/shoppingcart.svg" {...attributesCart} /></span>
    <p>{size}</p>
  </div>
</header>

