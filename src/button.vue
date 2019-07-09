<template>
    <button class="t-button" :class="{[`icon-${position}`]:true}">
        <t-icon class="icon" v-if="icon" :icon="icon"></t-icon>
        <t-icon class="loading" icon="loading"></t-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props:{
            icon:{},
            position:{
                type: String,
                default: "left",
                validator(value){
                    return value === "left" || value === "right";
                }
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }

    .t-button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: bottom;
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

        >.content{
            order: 2;
        }

        >.icon{
            width: 1em;
            height: 1em;
            margin-right: .4em;
            order: 1;
        }

        &.icon-right{
            >.content{
                order: 1;
            }

            >.icon{
                margin-right: 0;
                margin-left: 0.4em;
                order: 2;
            }
        }

        .loading{
            animation: spin 2s infinite linear;
        }
    }
</style>