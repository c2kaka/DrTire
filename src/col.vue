<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tireCol",
        props: {
            span: {
                type: [String, Number]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        background: deepskyblue;
        width: 50%;
        border: 1px solid greenyellow;

        $classPrefix: col-;
        @for $n from 1 through 24 {
            &.#{$classPrefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>