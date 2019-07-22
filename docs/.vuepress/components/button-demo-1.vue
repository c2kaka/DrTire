<template>
    <div>
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-button>默认按钮</t-button>
        <t-button :loading="true" icon="settings">按钮</t-button>
        <t-button :loading="true" icon="settings" position="right">按钮</t-button>
        <t-button icon="thumbsUp">按钮</t-button>
        <t-button icon="download">按钮</t-button>
        <t-button icon="down">按钮</t-button>
        <t-button icon="left">按钮</t-button>
        <t-button icon="right">按钮</t-button>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'

    export default {
        components: {
            't-button': Button
        },
        data() {
            return {
                content: `
            <t-button>默认按钮</t-button>
            <t-button :loading="true" icon="settings">按钮</t-button>
            <t-button :loading="true" icon="settings" position="right">按钮</t-button>
            <t-button icon="thumbsUp">按钮</t-button>
            <t-button icon="download">按钮</t-button>
            <t-button icon="down">按钮</t-button>
            <t-button icon="left">按钮</t-button>
            <t-button icon="right">按钮</t-button>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>