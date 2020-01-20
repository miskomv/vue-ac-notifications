<template>
	<div class="area">
		<Notification v-for="el in notifications" :key="el.id" :title="el.title" :message="el.message" :type="el.type"/>
	</div>
</template>
<style scoped>
	.area { position: fixed; top: 1rem; right: 1rem; z-index: 9999; display: flex; flex-direction: column }
</style>
<script>
	import Notification from "./Notification";

	export default {
		components: {Notification},
		data() {
			return {
				notifications: [],
			}
		},
		methods: {

			insert(notification) {
				this.notifications.push({...notification, id: Math.random()});
			},
			remove() {
				this.notifications = [...this.notifications.shift()];
			},

			notificacionAgregar(notification) {
				this.insert(notification);
				setTimeout(this.remove, 2500);
			},
			notificacionError(title, error) {

				let err = 'Error al realizar la petición con el servidor.';

				if (typeof error.response !== 'undefined')
					err = (error.response.status === 422) ? error.response.data.errors[Object.keys(error.response.data.errors)[0]][0] : error.response.data;
				else if (typeof error.message !== 'undefined')
					err = error.message;
				else if (typeof error.name !== 'undefined')
					err = error.name;
				else if (typeof error.stack !== 'undefined')
					err = error.stack;

				this.notificacionAgregar({title, message: err, type: 'error'});
			},
		}
	}
</script>
