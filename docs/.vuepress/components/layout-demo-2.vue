<template>
    <div style="padding-top: 16px;">
        <h2>布局2</h2>
        <p>
            <strong>预览</strong>
        </p>


        <t-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <t-header style="height: 50px; background:lightskyblue;">
                header
            </t-header>
            <t-layout>
                <t-sider style="height: 100px; background:#3ba0e9; width:200px; color: white;">
                    sider
                </t-sider>
                <t-content style="height: 100px; background:deepskyblue;">
                    content
                </t-content>
            </t-layout>
            <t-footer style="height: 50px; background:lightskyblue;">
                footer
            </t-footer>
        </t-layout>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import TLayout from '../../../src/layout'
    import THeader from '../../../src/header'
    import TFooter from '../../../src/footer'
    import TContent from '../../../src/content'
    import TSider from '../../../src/sider'

    export default {
        components: {TLayout, THeader, TFooter, TContent, TSider},
        data() {
            return {
                content: `
          <t-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <t-header style="height: 50px; background:lightskyblue;">
              header
            </t-header>
            <t-layout>
              <t-sider style="height: 100px; background:#3ba0e9; width:200px; color: white;">
                sider
              </t-sider>
              <t-content style="height: 100px; background:deepskyblue;">
                content
              </t-content>
            </t-layout>
            <t-footer style="height: 50px; background:lightskyblue;">
              footer
            </t-footer>
          </t-layout>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>