<template>
    <component :is="variant" class="font-bold leading-tight" :class="[getMargin(), getFontSize()]">
        <slot></slot>
    </component>
</template>
  
<script setup lang="ts">
const props = defineProps({
    variant: {
        type: String,
        default: 'h6' // Default variant
    }
});

const getMargin = () => {
    const marginValues: Record<string, string> = {
        h1: 'mb-3',
        h2: 'mb-2.5',
        h3: 'mb-2',
        h4: 'mb-1.5',
        h5: 'mb-1',
        h6: 'mb-0.5',
    };
    return marginValues[props.variant] || '';
};

const getFontSize = () => {
    const variantToSizeMap: Record<string, string> = {
        h1: 'text-4xl lg:text-6xl',
        h2: 'text-3xl lg:text-5xl',
        h3: 'text-xl lg:text-2xl',
        h4: 'text-lg lg:text-xl',
        h5: 'text-base lg:text-lg',
        h6: 'text-sm',
    };
    return variantToSizeMap[props.variant] || '';
};
</script>
  