const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    });
    it('可以设置position', (done) => {
        Vue.component('t-popover', Popover);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <t-popover position="top" ref="test">
                <template slot="content">
                    <div>
                        content
                    </div>
                </template>
                <button>top</button>
            </t-popover>
        `;

        const vm = new Vue({el: div});
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click();
            vm.$nextTick(() => {
                const contentWrapper = vm.$refs.test.$refs;
                expect(contentWrapper.classList.contains('position-top')).to.be.true;
                done();
            })
        })
    });
});