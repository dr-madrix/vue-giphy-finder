<template>
  <form @submit.prevent="getSearch">
	  <div class="form-group">
		<label>Categoría</label>
		<input type="text" class="form-control" :placeholder="placeTxt" v-model="searchReq">
	 </div>
	<button type="submit" class="btn btn-primary">Submit</button> 
 </form>
</template>

<script>
export default {
	data(){
		return{
			searchReq: ""
		}
	},
	methods: {
		getSearch(){
			this.$emit("accion", this.searchReq)
		}
	},
	props: {
		placeTxt: String
	}

}
</script>

<style>

</style>