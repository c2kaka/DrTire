<template>
    <div class="tabs-pane" :class="paneClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tireTabsPane",
        inject: ['eventBus'],
        props: {
            name: {
                type: String | Number,
                required: true
            }
        },
        data() {
            return {
                active: false
            }
        },
        computed: {
            paneClass() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on("update:selected", (name) => {
                return this.active = name === this.name;
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        display: none;
        padding: 1em;
        &.active {
            display: block;

        }
    }
</style>