<template>
    <div :class="[getSize()]">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
const props = defineProps({
    size: {
        type: String,
        default: 'small' // Default variant
    }
});

const getSize = () => {
    const sizes: Record<string, string> = {
        small: 'w-full h-8',
        medium: 'w-full h-16',
        large: 'w-full h-32',
        xlarge: 'w-full h-56',
    };
    return sizes[props.size] || '';
};
</script>
  