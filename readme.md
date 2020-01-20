# AC Notifications (vue-ac-notifications)

**vue-ac-notifications** is a plugin for show UI notifications.

### Install it
```zsh
npm install vue-ac-notifications
``` 

### Enable it
```javascript
import Vue from "vue";
import AcNotifications from 'vue-ac-notifications';
Vue.use(AcNotifications);
```
### Use it

##### Success
```javascript
this.$notifySuccess(title, message) ;
```

##### Error
```javascript
this.$notifyError(title, message) ;
```

##### Exception
```javascript
this.$notifyException(title, exception) ;
```

### NuxtJS
install the plugin `npm install vue-ac-notifications`

Create `plugins/vue-ac-notifications.js`
```javascript
import Vue from 'vue';
import Notifications from 'vue-ac-notifications';
Vue.use(Notifications);
```

Add `'@/plugins/vue-ac-notifications.js'` in `nuxt.config.js` `plugins` object
```javascript
	plugins: [
		'@/plugins/vue-ac-notifications.js'
	]
``` 
