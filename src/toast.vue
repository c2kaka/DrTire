<template>
    <div class="wrapper" :class="toastPosition">
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
    </div>
</template>

<script>
    export default {
        name: "tireToast",
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: false,
                validator(value) {
                    return value === false || typeof value === 'number';
                }
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
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
                }
            }
        },
        computed: {
            toastPosition() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$emit('close');
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
                    }, this.autoClose * 1000)
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
    $animation-duration: 300ms;
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;

            .toast {
                animation: slide-down $animation-duration;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }

        &.position-bottom {
            bottom: 0;

            .toast {
                animation: slide-up $animation-duration;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);

            .toast {
                animation: fade-in $animation-duration;
            }
        }
    }

    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        background: $toast-bg;
        line-height: 1.8;
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