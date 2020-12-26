<template id="barang-list">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-12">
				<div class="card-body">
					<h2>{{}}</h2>

					<div class="pull-right">
						<router-link
							class="btn btn-primary"
							v-bind:to="{ path: '/barang/add' }"
						>
							<span class="glyphicon glyphicon-plus"></span>
							Add new barang
						</router-link>
						<a href="#" class="btn btn-primary">
							<span class="glyphicon glyphicon-export"></span> Import CSV
						</a>
						<br />
						<br />
					</div>
					<table class="table">
						<thead>
							<tr>
								<th>#</th>
								<th>KODE BARANG</th>
								<th>NAMA</th>
								<th>NO FAKTUR</th>
								<th>QTY</th>
								<th class="col-md-2">Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(barang, index) in filteredbarang" v-bind:key="index">
								<td>{{ index + 1 }}</td>
								<td>{{ barang.kodebrg }}</td>
								<td>{{ barang.nama }}</td>
								<td>{{ barang.nofaktur }}</td>
								<td>{{ barang.qty }}</td>
								<td>
									<router-link
										class="btn btn-info btn-xs"
										v-bind:to="{
											name: 'Viewbarang',
											params: { id: barang.id },
										}"
									>
										<i
											class="glyphicon glyphicon-eye-open"
											aria-hidden="true"
										></i>
										Show
									</router-link>
									<router-link
										class="btn btn-warning btn-xs"
										v-bind:to="{
											name: 'Editbarang',
											params: { id: barang.id },
										}"
									>
										<i class="glyphicon glyphicon-edit" aria-hidden="true"></i>
										Edit
									</router-link>

									<router-link
										class="btn btn-danger btn-xs"
										v-bind:to="{
											name: 'Deletebarang',
											params: { id: barang.id },
										}"
									>
										<i class="glyphicon glyphicon-trash"></i> Delete
									</router-link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "home",

		data: function () {
			return {
				barang: "",
			};
		},

		created: function () {
			let uri = this.$store.state.sh_brg_masuk;
			this.$Axios
				.get(uri)
				.then((response) => {
					this.barang = response.data.data.sh_brg_masuk;
				})
				.catch((err) => {});
		},

		computed: {
			filteredbarang: function () {
				// i think this check for null data
				if (this.barang.length) {
					return this.barang;
				}
			},
		},
	};
</script>
