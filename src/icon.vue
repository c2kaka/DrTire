<template>
    <svg class="t-icon" aria-hidden="true">
        <use :xlink:href=`#i-${icon}`></use>
    </svg>
</template>

<script>
    import "./svg"
    export default {
        name: "tireIcon",
        props:["icon"]
    }
</script>

<style lang="scss" scoped>
    .t-icon{
        width: 1em;
        height: 1em;
    }
</style>