<template>
    <div class="t-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "t-button-group"
    }
</script>

<style lang="scss">
    .t-button-group{
        display: inline-flex;
        vertical-align: bottom;
        >.t-button{
            border-radius: 0;
            margin-left: -1px;
            &:first-child{
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>