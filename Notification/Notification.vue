<template>
	<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight" :duration="500">
		<div class="popup_notificacion" v-if="visible">
			<div class="imagen"><img class="error" src="./assets/ico_alert.svg" v-if="type === 'error'" alt="error"></div>
			<div class="imagen"><img class="success" src="./assets/ico_success.svg" v-if="type === 'success'" alt="success"></div>
			<h1>{{title}}</h1>
			<p>{{message}}</p>
		</div>
	</transition>
</template>
<style scoped>
	.popup_notificacion {width: 300px; padding: 20px; margin: 0 0 10px; animation-duration: 0.5s; transition: all 0.5s linear; background-color: #ffffff; color: #000000; box-shadow: 1px 1px 5px}
	.popup_notificacion .imagen {display: flex; justify-content: center;}
	.popup_notificacion h1 {color: #595959; font-size: 24px; text-align: center; font-weight: 600; text-transform: none; margin: 0 0 20px; padding: 0; line-height: 40px;}
	.popup_notificacion p {font-size: 16px; text-align: left; color: #545454;}
	.popup_notificacion img.error {width: 40px; height: 40px}
	.popup_notificacion img.success {width: 40px; height: 40px}
</style>
<script>
	export default {
		props: {
			title: {type: String, required: true},
			message: {type: String, required: true},
			type: {type: String, required: true},
		},
		data() {
			return {
				visible: false,
			}
		},
		mounted() {
			setTimeout(() => this.visible = true, 100);
		}
	}
</script>
