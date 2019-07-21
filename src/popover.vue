<template>
    <div class="popover" @click="popoverClick" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
                contentWrapper.style.top = top + window.scrollY - height + 'px';
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
                } else {
                    this.close();
                }
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
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        transform: translateY(-100%);
        border: 1px solid #ddd;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    }
</style>
