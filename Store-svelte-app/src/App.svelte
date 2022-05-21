<script>
	import { Products, Footer, Header, Product, Cart,Disclaimer } from "./components";
  
	import About from "./pages/About.svelte";
	import Home from "./pages/Home.svelte";
	import Coffee from "./pages/Coffee.svelte";
	import Contact from "./pages/Contact.svelte";
  
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
	  <Link to="/contact">Contact us</Link>
	</nav>
	<Disclaimer/>
	<main>
		<Route path="/"><Home/></Route> 
		<Route path="products"><Products /></Route> 
		<Route path="about"><About /></Route> 
		<Route path="coffee"><Coffee /></Route> 
		<Route path="contact"><Contact /></Route>
		<Route path="/product/:id"><Product/></Route>
	</main>
  </Router>
  <Footer />