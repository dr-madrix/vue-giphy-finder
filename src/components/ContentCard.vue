<template>
<div class="card" style="width: 18rem;">
  <img loader="lazy" class="card-img-top" :src="data.images.downsized.url" alt="Gif">
  <div class="card-body">
    <h5 class="card-title"> {{ data.title}} </h5>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</template>

<script>
export default {
	props: {
		data: Object
	}

}
</script>

<style>

</style>