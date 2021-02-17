const app = Vue.createApp({

    data() {
        return {
            showMenu : false
        }
    },
    methods: {
        showMenus() {
            this.showMenu = !this.showMenu
        }
    },

})

app.mount('#app')