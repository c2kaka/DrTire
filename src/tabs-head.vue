<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actionsWrapper">
            <slot name="actions"></slot>
        </div>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name: "tireTabsHead",
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on("update:selected", (name, vm) => {
                this.$refs.line.style.width = `${vm.$el.getBoundingClientRect().width}px`;
                this.$refs.line.style.left = `${vm.$el.getBoundingClientRect().left - 20}px`;
            })
        }
    }
</script>

<style scoped lang="scss">
    $item-height: 40px;
    $border-color: #ddd;
    $line-color: #1a73e8;
    .tabs-head {
        display: flex;
        justify-content: flex-start;
        height: $item-height;
        border-bottom: 1px solid $border-color;
        position: relative;
        transition: all .3s;
        > .actionsWrapper {
            margin-left: auto;
        }

        > .line {
            position: absolute;
            bottom: -1px;
            border-bottom: 1px solid $line-color;
        }
    }
</style>