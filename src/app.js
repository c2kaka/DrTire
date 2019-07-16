import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./t-button-group"
import Input from "./input"
import Row from "./row"
import Col from "./col"

Vue.component('t-button', Button);
Vue.component('t-icon', Icon);
Vue.component("t-button-group", ButtonGroup);
Vue.component("t-input", Input);
Vue.component("t-row", Row);
Vue.component("t-col", Col);

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
        message: "hi"
    },
    methods: {
        inputChange(e) {
            console.log(e);
        }
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

