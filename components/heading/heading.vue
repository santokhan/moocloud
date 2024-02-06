<template>
    <component :is="variant" :class="`font-bold mb-${getMargin()} text-${getFontSize()}`">
        <slot></slot>
    </component>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'h6' // Default variant
    }
});

const getMargin = () => {
    switch (props.variant) {
        case 'h1':
            return '2';
        case 'h2':
            return '2';
        case 'h3':
            return '1';
        case 'h4':
            return '1';
        case 'h5':
            return '0.5';
        case 'h6':
            return '0.5';
        default:
            return '0';
    }
};

const getFontSize = () => {
    switch (props.variant) {
        case 'h1':
            return '6xl';
        case 'h2':
            return '5xl';
        case 'h3':
            return 'xl';
        case 'h4':
            return 'lg';
        case 'h5':
            return 'base';
        case 'h6':
            return 'sm';
        default:
            return '0';
    }
};
</script>
  