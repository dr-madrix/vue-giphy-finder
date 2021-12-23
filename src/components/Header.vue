<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <router-link to="/" class="navbar-brand">Gif Router</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
	      <li class="nav-item">
		      <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
		      <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
	      </li>
	      <li class="nav-item">
		      <router-link to="/about" class="nav-link active" aria-current="page">About</router-link>
		       <!-- <a class="nav-link" href="#">Features</a> -->
	      </li>
        <li class="nav-item">
          <router-link to="/gifs" class="nav-link active" aria-current="page">Gifs</router-link>
	      </li>
        <li class="nav-item">
          <router-link to="/stickers" class="nav-link active">Stickers</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>