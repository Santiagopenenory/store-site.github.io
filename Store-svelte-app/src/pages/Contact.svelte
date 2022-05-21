<script>
    let formValue = {
        name:"",
        email:"",
        message:""
    }
</script>

<section> 
    <h2>Contact Us</h2> 
    <!-- image from https://www.pexels.com/photo/beans-beverage-blackcoffee-breakfast-373888/ --> 
    <div id="banner"> 
        <img src="images/banner.jpg" alt="banner" /> 
    </div> 
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed odio id nulla gravida rhoncus. Suspendisse potenti. In volutpat nibh non tellus laoreet, vitae faucibus ipsum sollicitudin. Duis viverra pulvinar tempus. Phasellus odio nunc, imperdiet vitae diam quis, sollicitudin pretium massa. Donec molestie mauris id semper sagittis.
    </p>

    <form on:submit|preventDefault={window.alert(formValue.name + formValue.email)}>
        <label for="name">Name</label>
        <input
          name="name"
          bind:value={formValue.name}
        />
        <label for="email">Email</label>
        <input name="email"bind:value={formValue.email}><br>
        <textarea name="yourmessage" cols="30" rows="10" 
            bind:value={formValue.yourmessage} placeholder="Enter Message"></textarea><br>
        <button type="submit">submit</button>
      </form>
</section>
  
