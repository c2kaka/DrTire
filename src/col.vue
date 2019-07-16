<template>
    <div class="col" :class="colClasses"
         :style="colStyle">
        <div class="innerCol">
            <slot></slot>
        </div>
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
            phone: {
                type: Object,
                validator
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
        computed: {
            colClasses() {
                const {span, offset, phone, ipad, narrowPc, pc, widePc} = this;
                return [
                    `col-${span}`,
                    offset && `offset-${offset}`,
                    phone && `col-phone-${phone.span}`,
                    ipad && `col-ipad-${ipad.span}`,
                    narrowPc && `col-narrowPc-${narrowPc.span}`,
                    pc && `col-pc-${pc.span}`,
                    widePc && `col-widePc-${widePc.span}`
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
        width: 50%;

        > .innerCol {
            height: 50px;
            background: deepskyblue;
            border: 1px solid greenyellow;
        }

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

        @media (max-width: 576px) {
            $class-prefix: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 577px) and (max-width: 768px) {
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
        @media (min-width: 769px) and (max-width: 992px) {
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
        @media (min-width: 993px) and (max-width: 1200px) {
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