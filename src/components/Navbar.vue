<template>
  <div>
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
    
     
        <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent" >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page"  to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">Sign in</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Sign up</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
          </ul>
          <p class=" lyes"><span class="L">L</span>yes <span class="S">S</span>hop</p>
        </div>
      </div>
    </nav>
  </div>
<router-view/>
</template>
<script>
export default {
  name: "Nav-Bar",
};
</script>

<style>
.navbar{
    
background: linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}
.lyes{
  /* font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  font-family: 'Protest Revolution', sans-serif;
  font-weight: 400;
  font-size:24px;
  padding-right:40px;
 
color: #091bd2;
  
}
.L,.S{
  font-family: 'Protest Revolution', sans-serif;
font-family: 'Sixtyfour', sans-serif;
}

</style>
