<template>
    <div class="t-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            for (let node of this.$el.children) {
                let nodeName = node.nodeName.toLowerCase();
                if (nodeName !== "button") {
                    console.warn(`t-button-group的子元素类型应该是button，而当前类型是${nodeName}!`);
                }
            }
        }
    }
</script>

<style lang="scss">
    .t-button-group {
        display: inline-flex;
        vertical-align: bottom;

        > .t-button {
            border-radius: 0;

            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>