const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    });
    it('接受gutter属性.', (done) => {
        Vue.component('t-row', Row);
        Vue.component('t-col', Col);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <t-row gutter="20">
                <t-col span="12"></t-col>
                <t-col span="12"></t-col>
            </t-row>
       `;
        const vm = new Vue({
            el: div
        });

        setTimeout(() => {
            const row = vm.$el.querySelector('.row');
            expect(getComputedStyle(row).marginLeft).to.eq('-10px');
            expect(getComputedStyle(row).marginRight).to.eq('-10px');
            const cols = vm.$el.querySelectorAll('.col');
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq("10px");
            expect(getComputedStyle(cols[0]).paddingRight).to.eq("10px");
            done();
            vm.$el.remove();
            vm.$destroy();
        }, 100)
    });
    it('可以接受align属性.', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div);
        const row = vm.$el;
        expect(getComputedStyle(row).justifyContent).to.eq("flex-end");
        div.remove();
        vm.$destroy()
    })
});