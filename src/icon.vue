<template>
    <svg class="t-icon" aria-hidden="true">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    import "./svg"
    export default {
        name: "tireIcon",
        props: ["name"]
    }
</script>

<style lang="scss" scoped>
    .t-icon{
        width: 1em;
        height: 1em;
    }
</style>