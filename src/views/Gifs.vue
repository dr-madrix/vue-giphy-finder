<template>
	<div class="container">
		<h1>Gifs</h1>
		<hr>
		<search @accion="getGifs" :placeTxt="searchTxt" />
		<Loader v-if="loading"/>
		<div class="row">
			<div class="col-sm-4" v-for="gif in gifs" :key="gif.id">
				<content-card  :data="gif"/>
			</div>	
		</div>
	</div>
</template>

<script>
import ContentCard from '../components/ContentCard.vue';
import Search from '../components/Search.vue';
import Loader from '../components/Loader.vue';

export default {
  components: { ContentCard, Search, Loader },
  data(){
	  return{
		  gifs: {},
		  loading: false,
		  searchTxt: "Busca tu gif"
	  }
  },
  methods: {
      async getGifs(searchReq="SpongeBob") {
	      this.loading = true;
	      const key =  "eKGEn6xmrGnXHnPne3p7uFJUmVFAPEHF";
	      const {data} = await this.axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchReq}&api_key=${key}`)

	      console.log(data.data)
	      console.log(searchReq)
	      this.gifs = data.data
	      this.loading = false;
      }
    },
    created(){
      this.getGifs();
    }

}
</script>