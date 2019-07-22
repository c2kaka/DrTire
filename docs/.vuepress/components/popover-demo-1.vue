<template>
    <div style="padding-top: 16px;">
        <h2>支持 HTML</h2>
        <p>
            <strong>预览</strong>
        </p>

        <t-popover>
            <t-button>上方弹出</t-button>
            <template slot="content">
                弹出内容
            </template>
        </t-popover>
        <t-popover position="bottom">
            <t-button>下方弹出</t-button>
            <template slot="content">
                弹出内容
            </template>
        </t-popover>
        <t-popover position="left">
            <t-button>左边弹出</t-button>
            <template slot="content">
                弹出内容
            </template>
        </t-popover>
        <t-popover position="right">
            <t-button>右边弹出</t-button>
            <template slot="content">
                弹出内容
            </template>
        </t-popover>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
    import TButton from '../../../src/button'
    import TPopover from '../../../src/popover'


    export default {
        components: {TButton, TPopover},
        data() {
            return {
                content: `
          <t-popover>
            <t-button>上方弹出</t-button>
            <template slot="content">
              弹出内容
            </template>
          </t-popover>
          <t-popover position="bottom">
            <t-button>下方弹出</t-button>
            <template slot="content">
              弹出内容
            </template>
          </t-popover>
          <t-popover position="left">
            <t-button>左边弹出</t-button>
            <template slot="content">
              弹出内容
            </template>
          </t-popover>
          <t-popover position="right">
            <t-button>右边弹出</t-button>
            <template slot="content">
              弹出内容
            </template>
          </t-popover>
      `.replace(/^ {8}/gm, '').trim()
            }
        },
        methods: {
            onClickButton() {
                this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                    enableHtml: true
                })
            }
        },
    }
</script>