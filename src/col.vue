<template>
    <div class="col" :class="colClasses"
         :style="colStyle">
            <slot></slot>
    </div>
</template>

<script>
    const validator = (value) => {
        const keys = Object.keys(value);
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                return false;
            }
        });
        return true;
    };
    export default {
        name: "tireCol",
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            },
            ipad: {
                type: Object,
                validator
            },
            narrowPc: {type: Object, validator,},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,}
        },
        data() {
            return {
                gutter: 0
            }
        },
        methods: {
            createClasses(obj, infix = '') {
                let classes = [];
                if (!obj) {
                    return [];
                }
                if (obj.span) {
                    classes.push(`col-${infix}${obj.span}`);
                }
                if (obj.offset) {
                    classes.push(`col-${infix}${obj.offset}`);
                }
                return classes;
            }
        },
        computed: {
            colClasses() {
                const {span, offset, ipad, narrowPc, pc, widePc} = this;
                const createClasses = this.createClasses;
                return [
                    ...createClasses({span, offset}),
                    ...createClasses(ipad, 'ipad-'),
                    ...createClasses(narrowPc, 'narrow-pc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(widePc, 'wide-pc-'),
                ];
            },
            colStyle() {
                const {gutter} = this;
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
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

        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>