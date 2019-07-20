<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue"

    export default {
        name: "tireTabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0;
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        created() {
            //this.$emit('update:selected','xxx')
        },
        mounted() {
            if (this.$children.length <= 0) {
                console && console.warn && console.warn('tabs子组件必须是tabs-head和tabs-body组件!')
            }
            this.$children.forEach(vm => {
                if (vm.$options.name === 'tireTabsHead') {
                    vm.$children.forEach(childVm => {
                        if (childVm.$options.name === 'tireTabsItem' && childVm.$props.name === this.selected) {
                            this.eventBus.$emit("update:selected", this.selected, childVm);
                        }
                    })
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs {
    }
</style>