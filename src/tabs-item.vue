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
                    active: this.active,
                    disabled: this.disabled
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
                if (this.disabled) {
                    return;
                }
                this.eventBus.$emit("update:selected", this.name, this);
            }
        }
    }
</script>

<style scoped lang="scss">
    $item-color: #1a73e8;
    $disabled-text-color: grey;
    .tabs-item {
        height: 100%;
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        display: flex;
        align-items: center;
        &.active {
            color: $item-color;
            font-weight: bold;
        }

        &.disabled {
            color: $disabled-text-color;
        }
    }
</style>