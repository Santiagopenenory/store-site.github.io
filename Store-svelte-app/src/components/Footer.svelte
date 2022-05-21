<script>
  import InlineSVG from 'svelte-inline-svg';
  

  $: attributes = {
    width: 30,
    height: 30,
    fill: "#fff",
  }  
</script>
<style> 
footer { 
  background: linear-gradient(360deg, #594c59 0%, #343334 100%); color: #fff; display: flex; 
  justify-content: space-around; 
} 
footer > div { 
  min-height: 100px;
  display: flex;      
  justify-content: center; 
  flex-direction: column; 
} 
footer div span a { 
  margin-right: 5px; 
  } 
</style>
<footer>
  <div>
    <span>&copy; Small Coffee Shop 2021</span>
  </div>
  <div>
    <span>
      <a href="https://facebook.com/smallcoffeeshop"><InlineSVG src="/images/facebook.svg" {...attributes} /></a>
      <a href="https://instagram.com/smallcoffeeshop"><InlineSVG src="/images/instagram.svg" {...attributes} /></a>
      <a href="https://Twitter.com/smallcoffeeshop"><InlineSVG src="/images/twitter.svg" {...attributes} /></a>      
    </span>
  </div>
</footer>