<template id="barang-delete">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-12">
				<h3>Delete barang {{ barang.nama }}</h3>
				<form v-on:submit.prevent="deletebarang">
					<p>The action cannot be undone</p>
					<button class="btn btn-xs btn-danger" type="submit" name="button">
						Delete
					</button>
					<router-link class="btn btn-xs btn-primary" v-bind:to="'/'"
						>Back</router-link
					>
				</form>
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
		methods: {
			deletebarang: function () {
				let uri = this.$store.getters.delete_brg_masuk;
				Axios.delete(uri, { data: { id: this.barang_id } })
					.then((response) => {
						this.$router.push({ name: "Home" });
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>