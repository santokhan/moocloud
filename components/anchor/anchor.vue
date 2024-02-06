<template>
    <NuxtLink to="" :class="linkClasses">
        <slot></slot>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </NuxtLink>
</template>

<script setup lang="ts">
type Variant = 'outline-white' | 'blue' | 'white' | 'black';
type Size = 'small' | 'medium';

const props = defineProps({
    variant: {
        type: String,
        default: 'outline-white' as Variant // Default variant
    },
    to: {
        type: String,
        default: ""
    }
});

const linkClasses = [
    'text-sm font-semibold uppercase',
    'rounded-md',
    'shadow-lg',
    'whitespace-nowrap',
    'flex gap-1 items-center',
    'hover:brightness-90',
    {
        'bg-moo-blue-medium text-white px-12': props.variant === 'blue',
        'bg-moo-black-jam text-white': props.variant === 'black',
        'bg-bkg text-moo-black-jam px-4': props.variant === 'white',
        'border-2 border-white px-4 py-1': props.variant === 'outline-white',
    },
];
</script>
  
<style scoped>
/* Add any common styles here */
</style>
  