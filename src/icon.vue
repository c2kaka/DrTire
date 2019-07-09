<template>
    <svg class="t-icon" aria-hidden="true">
        <use :xlink:href=`#i-${icon}`></use>
    </svg>
</template>

<script>
    export default {
        props:["icon"]
    }
</script>

<style lang="scss">
    .t-icon{
        width: 1em;
        height: 1em;
    }
</style>