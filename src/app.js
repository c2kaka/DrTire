import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./t-button-group"
import Input from "./input"
import Row from "./row"
import Col from "./col"
import Layout from "./layout"
import Header from "./header"
import Content from "./content"
import Sider from "./sider"
import Footer from "./footer"
import Toast from "./toast"
import Plugin from "./plugin"
import Tabs from "./tabs"
import TabsHead from "./tabs-head"
import TabsItem from "./tabs-item"
import TabsBody from "./tabs-body"
import TabsPane from "./tabs-pane"
import Popover from "./popover"

Vue.component('t-button', Button);
Vue.component('t-icon', Icon);
Vue.component("t-button-group", ButtonGroup);
Vue.component("t-input", Input);
Vue.component("t-row", Row);
Vue.component("t-col", Col);
Vue.component("t-layout", Layout);
Vue.component("t-header", Header);
Vue.component("t-content", Content);
Vue.component("t-sider", Sider);
Vue.component("t-footer", Footer);
Vue.component("t-toast", Toast);
Vue.use(Plugin);

Vue.component("t-tabs", Tabs);
Vue.component("t-tabs-head", TabsHead);
Vue.component("t-tabs-item", TabsItem);
Vue.component("t-tabs-body", TabsBody);
Vue.component("t-tabs-pane", TabsPane);

Vue.component("t-popover",Popover);

new Vue({
    el: "#app",
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
        loading6: false,
        loading7: false,
        loading8: false,
        message: "hi",
        selectedTab: 'woman'
    },
    methods: {
        inputChange(e) {
            console.log(e);
        },
        showToast(message, position) {
            this.$toast(message, {
                closeButton: {
                    text: "知道了",
                    callback(toast) {
                        console.log("用户说知道了" + toast);
                    }
                },
                enableHTML: false,
                autoClose: false,
                position: position
            });
        }
    },
    created() {
    }
});

//单元测试
// import chai from "chai"
// import spies from "chai-spies"
//
// chai.use(spies);
// const expect = chai.expect;
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     });
//     vm.$mount();
//     let useElement = vm.$el.querySelector("use");
//     let href = useElement.getAttribute("xlink:href");
//     expect(href).to.eq("#i-settings");
//     vm.$el.remove();
//     vm.$destroy();
// }
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'loading'
//         }
//     });
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute("xlink:href");
//     expect(href).to.eq("#i-loading");
//     vm.$el.remove();
//     vm.$destroy();
// }
//
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: "settings",
//             loading: true
//         }
//     });
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute("xlink:href");
//     expect(href).to.eq("#i-loading");
//     vm.$el.remove();
//     vm.$destroy();
// }
//
// {
//     const div = document.createElement("div");
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: "settings",
//         }
//     });
//     vm.$mount(div);
//     let svg = vm.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq("1");
//     vm.$el.remove();
//     vm.$destroy();
// }
//
// {
//     const div = document.createElement("div");
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: "settings",
//             position: "right"
//         }
//     });
//     vm.$mount(div);
//     let svg = vm.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq("2");
//     vm.$el.remove();
//     vm.$destroy();
// }
//
// {
//     //mock
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: "settings"
//         }
//     });
//     vm.$mount();
//     let spy = chai.spy(function () {
//     });
//     vm.$on('click', spy);
//     let button = vm.$el;
//     button.click();
//     expect(spy).to.have.been.called();
//     vm.$el.remove();
//     vm.$destroy();
// }

