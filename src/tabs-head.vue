<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actionsWrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tireTabsHead",
        inject: ['eventBus']
    }
</script>

<style scoped lang="scss">
    .tabs-head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;

        > .actionsWrapper {
            margin-left: auto;
        }
    }
</style>