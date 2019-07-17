<template>
    <div class="toast" ref="toast">
        <div class="message">
            <slot v-if="!enableHTML"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <template v-if="closeButton">
            <div class="line" ref="line"></div>
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
            },
            enableHTML: {
                type: Boolean,
                default: false
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
            },
            excAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close();
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
                })
            }
        },
        mounted() {
            this.updateStyle();
            this.excAutoClose();
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
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

        > .message {
            padding: 8px 0;
        }

        > .line {
            height: 100%;
            margin-left: 16px;
            border-left: 1px solid white;
        }

        > .close {
            margin-left: 16px;
            cursor: pointer;
            flex-shrink: 0;
        }
    }
</style>