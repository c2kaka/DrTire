<template>
    <div class="popover" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block">
          <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "tirePopover",
        data() {
            return {
                visible: false
            };
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0;
                }
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.popoverClick);
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open);
                this.$refs.popover.addEventListener('mouseleave', this.close);
            }
        },
        destroyed() {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.popoverClick);
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open);
                this.$refs.popover.removeEventListener('mouseleave', this.close);
            }
        },
        methods: {
            positionContent() {
                let {contentWrapper, triggerWrapper} = this.$refs;
                document.body.appendChild(contentWrapper);
                const {top, left, height, width} = triggerWrapper.getBoundingClientRect();
                const {height: contentHeight} = contentWrapper.getBoundingClientRect();
                const positions = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + height
                    },
                    left: {
                        left: left + window.scrollX,
                        top: top + (height - contentHeight) / 2 + window.scrollY
                    },
                    right: {
                        left: left + window.scrollX + width,
                        top: top + (height - contentHeight) / 2 + window.scrollY
                    }
                };
                contentWrapper.style.left = positions[this.position].left + 'px';
                contentWrapper.style.top = positions[this.position].top + 'px';
            },
            close() {
                this.visible = false;
                document.removeEventListener("click", this.onDocumentClick);
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onDocumentClick);
                });
            },
            onDocumentClick(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return undefined;
                }
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return undefined;
                }
                this.close();

            },
            popoverClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                    } else {
                        this.open();
                    }
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
        background: white;
        border-radius: $border-radius;
        padding: .5em 1em;
        word-break: break-all;
        max-width: 20em;

        &::before, &::after {
            content: "";
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10px;
                border-bottom: none;
            }

            &::before {
                border-top-color: black;
                top: 100%;
            }

            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
                border-top: none;
            }

            &::before {
                border-bottom-color: black;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }

        &.position-left {
            margin-left: -10px;
            transform: translateX(-100%);

            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
                border-right: none;
            }

            &::before {
                border-left-color: black;
                left: 100%;
            }

            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
                border-left: none;
            }

            &::before {
                border-right-color: black;
                right: 100%;
            }

            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
    }
</style>
