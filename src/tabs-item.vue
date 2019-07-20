<template>
    <div class="tabs-item" :class="itemClass" @click="itemClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tireTabsItem",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
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
            itemClass() {
                return {
                    active: this.active
                }
            }
        },
        inject: ['eventBus'],
        created() {
            this.eventBus.$on("update:selected", (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            itemClick() {
                this.eventBus.$emit("update:selected", this.name);
            }
        }
    }
</script>

<style scoped lang="scss">
    $item-height: 40px;
    .tabs-item {
        height: $item-height;
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;

        &.active {
            background: red;
        }
    }
</style>