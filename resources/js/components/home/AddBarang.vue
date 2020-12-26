<template id="add-barang">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-12">
				<h3>Add new Barang</h3>
				<form v-on:submit.prevent="createbarang">
					<div class="form-group">
						<label for="nofaktur">No Faktur</label>
						<input
							id="nofaktur"
							v-model="barang.nofaktur"
							class="form-control"
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
						Create barang
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
				barang: {
					nofaktur: "",
					kodebrg: "",
					qty: "",
				},
			};
		},
		methods: {
			createbarang: function () {
				let uri = this.$store.state.input_brg_masuk;
				this.$Axios.post(uri, this.barang).then((response) => {
					this.$router.push({ name: "Home" });
				});
			},
		},
	};
</script>