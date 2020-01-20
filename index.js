import NotificationsArea from "./Notification/NotificationsArea";

export default {
	install(Vue, options) {

		const root = new Vue({render: createElement => createElement(NotificationsArea)});
		root.$mount(document.body.appendChild(document.createElement('div')));

		const notificationArea = root.$children[0];

		Vue.prototype.$notifySuccess = (title, message) => {
			notificationArea.notificacionAgregar({title, message, type: 'success'});
		};

		Vue.prototype.$notifyError = (title, message) => {
			notificationArea.notificacionAgregar({title, message, type: 'error'});
		};

		Vue.prototype.$notifyException = (title, error) => {
			notificationArea.notificacionError(title, error);
		};
	}
};
