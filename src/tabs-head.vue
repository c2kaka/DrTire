<template>
    <div class="tabs-head" ref="head">
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
                let {width, left} = vm.$el.getBoundingClientRect();
                let {left: headLeft} = this.$refs.head.getBoundingClientRect();
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.left = `${left - headLeft}px`;
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