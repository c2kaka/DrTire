<template>
    <div style="padding-top: 16px;">
        <h2>支持 HTML</h2>
        <p>
            <strong>预览</strong>
        </p>

        <div>
            <t-button @click="onClickButton">上方弹出</t-button>
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style>
    .wrapper {
        z-index: 30 !important;
    }
</style>
<style scoped>
    * {
        box-sizing: border-box;
    }

</style>
<script>
    import plugin from '../../../src/plugin'
    import TButton from '../../../src/button'
    import Vue from 'vue'

    Vue.use(plugin)

    export default {
        components: {TButton},
        data() {
            return {
                content: `
          <style>
            .wrapper {
              z-index: 30;
            }
          </style>

          <div>
            <t-button @click="onClickButton">上方弹出</t-button>
          </div>

          methods: {
            onClickButton () {
              this.$toast('你知道我在等你吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
            }
        },
        methods: {
            onClickButton() {
                this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                    enableHTML: true
                })
            }
        },
    }
</script>