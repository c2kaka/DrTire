<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-input value="中文"></t-input>
        <t-input value="中文" disabled></t-input>
        <t-input value="中文" readonly></t-input>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components: {
            't-input': Input
        },
        data() {
            return {
                selected: '1',
                content: `<t-input value="中文"></t-input>
                  <t-input value="中文" disabled></t-input>
                  <t-input value="中文" readonly></t-input>
      `.replace(/\t+| +/g, '').trim()
            }
        }
    }
</script>