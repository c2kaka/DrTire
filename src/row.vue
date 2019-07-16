<template>
    <div class="row" :style="rowStyle" :class="alignDirection">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tireRow",
        props: {
            gutter: {
                type: [String, Number]
            },
            align: {
                type: String,
                validator(value) {
                    return ["left", "right", "center"].includes(value);
                }
            }
        },
        computed: {
            rowStyle() {
                const {gutter} = this;
                return {
                    marginLeft: -gutter / 2 + 'px',
                    marginRight: -gutter / 2 + 'px'
                }
            },
            alignDirection() {
                const {align} = this;
                return [align && `align-${align}`]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter;
            })
        }
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        flex-wrap: wrap;
        &.align-left {
            justify-content: flex-start;
        }

        &.align-center {
            justify-content: center;
        }

        &.align-right {
            justify-content: right;
        }
    }
</style>