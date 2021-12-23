<template>
	<div class="container border mt-2">
		<h1>Stickers</h1>
		<hr>
		<search @accion="getGifs" :placeTxt="searchTxt" />
		<Loader v-if="loading"/>
		<div class="row">
			<div class="col-sm-4" v-for="sticker in stickers" :key="sticker.id">
				<content-card  :data="sticker"/>
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
		  stickers: {},
		  loading: false,
		  searchTxt: "Busca tu sticker"
	  }
  },
  methods: {
      async getGifs(searchReq="SpongeBob") {
	      this.loading = true;
	      const key =  "eKGEn6xmrGnXHnPne3p7uFJUmVFAPEHF";
	      const {data} = await this.axios.get(`https://api.giphy.com/v1/stickers/search?q=${searchReq}&api_key=${key}`)

	      console.log(data.data)
	      console.log(searchReq)
	      this.stickers = data.data
	      this.loading = false;
      }
    },
    created(){
      this.getGifs();
    }

}
</script>