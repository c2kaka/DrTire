<template>
    <div class="collapse-item">
        <div class="title" @click="open=!open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tireCollapseItem",
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .collapse-item {
        $border-color: #ddd;
        $border-radius: 4px;

        > .title {
            border: 1px solid $border-color;
            margin: -1px -1px 0 -1px;
            padding: 0 8px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }

        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }

        > .content {
            padding: 0 8px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }
    }
</style>