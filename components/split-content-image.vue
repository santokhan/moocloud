<template>
    <Container class="py-8 lg:py-14">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-moo-bkg items-center">
            <div class="space-y-4 lg:space-y-6" :class="[props.align === 'right' ? 'order-2' : '']">
                <slot name="content"></slot>
            </div>
            <div>
                <slot name="image"></slot>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
const props = defineProps({
    align: {
        type: String,
        default: 'left'
    }
})
</script>