<template>
    <button class="t-button" :class="{[`icon-${position}`]:true}" @click="$emit('click')">
        <t-icon class="icon" v-if="icon && !loading" :name="icon"></t-icon>
        <t-icon class="loading icon" v-if="loading" name="loading"></t-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from "./icon"
    export default {
        name: "tireButton",
        components:{
          "t-icon": Icon
        },
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
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

<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;

    @keyframes spin {
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }

    .t-button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: bottom;
        font-size: $font-size;
        height: $button-height;
        background: $button-bg;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        &:hover{
            border-color: $border-color-hover;
        }

        &:active{
            background: $button-active-bg;
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