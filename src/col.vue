<template>
    <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
         :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px' }">
        <div style="border: 1px solid greenyellow;height: 100px">
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
        }
    }
</script>

<style scoped lang="scss">
    .col {
        /*height: 100px;*/
        /*background: deepskyblue;*/
        width: 50%;
        /*border: 1px solid greenyellow;*/

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