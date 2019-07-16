<template>
    <div class="col" :class="colClasses"
         :style="colStyle">
        <div class="innerCol">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tireCol",
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClasses() {
                const {span, offset} = this;
                return [`col-${span}`, offset && `offset-${offset}`];
            },
            colStyle() {
                const {gutter} = this;
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        width: 50%;
        > .innerCol {
            height: 50px;
            background: deepskyblue;
            border: 1px solid greenyellow;
        }

        $classPrefix: col-;
        @for $n from 1 through 24 {
            &.#{$classPrefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $classPrefix: offset-;
        @for $n from 1 through 24 {
            &.#{$classPrefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>