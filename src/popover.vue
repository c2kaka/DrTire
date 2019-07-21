<template>
    <div class="popover" @click="popoverClick" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
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
        methods: {
            positionContent() {
                let contentWrapper = this.$refs.contentWrapper;
                document.body.appendChild(contentWrapper);
                const {top, left, height} = this.$refs.triggerWrapper.getBoundingClientRect();
                contentWrapper.style.left = left + window.scrollX + 'px';
                contentWrapper.style.top = top + window.scrollY + 'px';
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
        transform: translateY(-100%);
        border: 1px solid $border-color;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
        background: white;
        border-radius: $border-radius;
        padding: .5em 1em;
        margin-top: -10px;
        word-break: break-all;
        max-width: 20em;

        &::before, &::after {
            content: "";
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
            left: 10px;
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
</style>
