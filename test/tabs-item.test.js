const expect = chai.expect;
import Vue from 'vue'
import TabsItem from "../src/tabs-item"

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist;
    });

    it('接受name属性.', () => {
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData: {
                name: 'sports'
            }
        }).$mount();
        expect(vm.$el.getAttribute('tab-name')).to.eq('sports');
        vm.$el.remove();
        vm.$destroy()
    });

    it('接受disabled属性.', () => {
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount();
        expect(vm.$el.classList.contains('disabled')).to.eq(true);
        const callback = sinon.fake();
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.not.been.called;
        vm.$el.remove();
        vm.$destroy()
    });


});