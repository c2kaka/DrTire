const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from "../src/tabs-head"
import TabsItem from "../src/tabs-item"
import TabsBody from "../src/tabs-body"
import TabsPane from "../src/tabs-pane"

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist;
    });

    it('接受selected属性.', (done) => {
        Vue.component("t-tabs", Tabs);
        Vue.component("t-tabs-head", TabsHead);
        Vue.component("t-tabs-item", TabsItem);
        Vue.component("t-tabs-body", TabsBody);
        Vue.component("t-tabs-pane", TabsPane);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <t-tabs selected="sports">
                <t-tabs-head>
                    <t-tabs-item name="woman">
                        美女
                    </t-tabs-item>
                    <t-tabs-item name="finance" disabled>财经</t-tabs-item>
                    <t-tabs-item name="sports">体育</t-tabs-item>
                </t-tabs-head>
                <t-tabs-body>
                    <t-tabs-pane name="woman">美女相关资讯</t-tabs-pane>
                    <t-tabs-pane name="finance">财经相关资讯</t-tabs-pane>
                    <t-tabs-pane name="sports">体育相关资讯</t-tabs-pane>
                </t-tabs-body>
            </t-tabs>
       `;
        const vm = new Vue({
            el: div
        });

        vm.$nextTick(() => {
            const sportsItem = vm.$el.querySelector(".tabs-item[tab-name='sports']");
            expect(sportsItem.classList.contains('active')).to.eq(true);
            done();
            vm.$el.remove();
            vm.$destroy();
        })
    });

});