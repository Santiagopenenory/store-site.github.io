<script>
	import { Products, Footer, Header, Product, CartLength, Cart } from "./components";
  
	import About from "./pages/About.svelte";
	import Home from "./pages/Home.svelte";
	import Coffee from "./pages/Coffee.svelte";
  
	import { Router, Link, Route } from "svelte-routing";
	import { setContext } from "svelte";
	export let name;
	let loggedIn;
	if (name == "") { 
		loggedIn = false; 
	}else { 
		loggedIn = true; 
	}
	setContext('key', { loggedIn });
	export let url = "";   

  </script>
  
  <style>
  </style>
  
  <Header name={name} />
  <Router url="{url}">
	<nav>
	  <Link to="/">Home</Link>
	  <Link to="/products">Shop</Link>
	  <Link to="/about">Our Story</Link>
	  <Link to="/coffee">Our Coffee</Link>
	</nav>
	<main>
	  <Route path="/" component="{Home}" />
	  <Route path="products" component="{Products}" />
	  <Route path="about" component="{About}" />
	  <Route path="coffee" component="{Coffee}" />
	  <Route path="/product/:id" component="{Product}" />
	</main>
  </Router>
  <Footer />