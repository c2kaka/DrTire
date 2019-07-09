import Vue from "vue"
import Button from "./button"
import Icon from "./icon"

Vue.component('t-button',Button);
Vue.component('t-icon',Icon);

new Vue({
    el:"#app",
    data:{
        loading1: true,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
        loading6: false,
        loading7: false,
        loading8: false,
    }
});