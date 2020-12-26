<template id="barang-edit">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-12">
				<h3>Update barang</h3>
				<form v-on:submit.prevent="updatebarang">
					<div class="form-group">
						<label for="nofaktur">No Faktur</label>
						<input
							id="nofaktur"
							v-model="barang.nofaktur"
							class="form-control"
							disabled
							required
						/>
					</div>
					<div class="form-group">
						<label for="kodebrg">Kode Barang</label>
						<input
							id="kodebrg"
							v-model="barang.kodebrg"
							class="form-control"
							required
						/>
					</div>
					<div class="form-group">
						<label for="qty">Qty</label>
						<input
							id="qty"
							v-model="barang.qty"
							class="form-control"
							required
						/>
					</div>

					<button type="submit" class="btn btn-xs btn-primary">
						Update barang
					</button>
					<router-link class="btn btn-xs btn-warning" v-bind:to="'/'"
						>Cancel</router-link
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
			Axios.post(uri, this.barang_id).then((response) => {
				this.barang = response.data.data.find_brg_masuk[0];
			});
		},
		methods: {
			updatebarang: function () {
				let uri = this.$store.getters.update_brg_masuk;
				Axios.put(uri, this.barang)
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