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
    switch (props.variant) {
        case 'h1':
            return 'mb-2';
        case 'h2':
            return 'mb-2';
        case 'h3':
            return 'mb-1';
        case 'h4':
            return 'mb-1';
        case 'h5':
            return 'mb-0.5';
        case 'h6':
            return 'mb-0.5';
        default:
            return '';
    }
};

const getFontSize = () => {
    switch (props.variant) {
        case 'h1':
            return 'text-6xl';
        case 'h2':
            return 'text-5xl';
        case 'h3':
            return 'text-xl';
        case 'h4':
            return 'text-lg';
        case 'h5':
            return 'text-base';
        case 'h6':
            return 'text-sm';
        default:
            return '';
    }
};
</script>
  