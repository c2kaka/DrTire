<template>
    <transition name="slide">
        <div class="sider" v-if="showSider">
            <slot></slot>
            <button @click="showSider=false">close</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "tireSider",
        data() {
            return {
                showSider: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .sider {
        position: relative;

        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .slide-enter-active, .slide-leave-active {
        transition: opacity .3s;
    }

    .slide-enter, .slide-leave-to {
        opacity: 0;
    }
</style>