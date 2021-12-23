<template>
	<div class="container-fluid fixed-bottom text-center bg-dark text-white p-1 bg-gradient">
		<footer>
			<h3 class="mt-3">&copy;{{currentYear}} - Dr. Madrix</h3>
		</footer>
	</div>
</template>

<script>
export default {
	computed: {
		currentYear(){
				const cYear = new Date().getFullYear();
				return cYear;
		}
	}
}
</script>

<style>

</style>