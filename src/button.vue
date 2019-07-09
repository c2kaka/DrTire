<template>
    <button class="t-button">按钮</button>
</template>

<script>
    export default {
        name: "t-button"
    }
</script>

<style lang="scss">
    .t-button{
        font-size: var(--font-size);
        height: var(--button-height);
        background: var(--button-bg);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        &:hover{
            border-color: var(--border-color-hover);
        }

        &:active{
            background: var(--button-active-bg);
        }

        &:focus{
            outline: none;
        }
    }
</style>