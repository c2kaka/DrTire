<template>
    <div style="padding-top: 16px;">
        <h2>双向绑定</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-input v-model="value"></t-input>
        <div>
            value: {{value}}
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import TInput from '../../../src/input'

    export default {
        components: {TInput},
        data() {
            return {
                value: '1',
                content: `
          data:{
            value: '1'
          }

          <t-input v-model="value"></t-input>
          <div>
            value: {{value}}
          </div>
      `.replace(/\t+| +/g, '').trim()
            }
        }
    }
</script>