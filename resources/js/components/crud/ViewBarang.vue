<template id="view-barang">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-12">
				<h3>{{ barang.kodebrg }}</h3>
				<strong>Body :</strong>
				<div>{{ barang.nama }}</div>
				<strong>No Faktur :</strong>
				<div>{{ barang.nofaktur }}</div>

				<br />
				<span class="glyphicon glyphicon-arrow-left"></span>
				<router-link v-bind:to="'/'">Back to barang list</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				barang: "",
				barang_id: {
					id: this.$route.params.id, // from click home params
				},
			};
		},
		created: function () {
			let uri = this.$store.getters.find_brg_masuk;
			Axios.post(uri, this.barang_id)
				.then((response) => {
					this.barang = response.data.data.find_brg_masuk[0];
				})
				.catch((err) => {
					console.log(err);
				});
		},
	};
</script>