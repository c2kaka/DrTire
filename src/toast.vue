<template>
    <div class="toast">
        <slot></slot>
        <template v-if="closeButton">
            <div class="line"></div>
            <span class="close" @click="buttonClose">
                {{closeButton.text}}
            </span>
        </template>
    </div>
</template>

<script>
    export default {
        name: "tireToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            },
            buttonClose() {
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.close();
                    this.closeButton.callback(this);
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        height: $toast-height;
        background: $toast-bg;
        line-height: 1.8;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        color: white;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;
        display: flex;
        align-items: center;

        > .line {
            height: 100%;
            margin-left: 16px;
            border-left: 1px solid white;
        }

        > .close {
            margin-left: 16px;
            cursor: pointer;
        }
    }
</style>