<template>
  <button :class="buttonClasses">
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-4 h-4 text-white" v-if="props.variant === 'blue' || props.variant === 'black'">
      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-5 h-5" v-if="props.variant === 'white'">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: 'blue' // Default variant
  }
});

const buttonClasses = [
  'rounded-lg',
  'font-semibold',
  'shadow-lg',
  'uppercase',
  'whitespace-nowrap',
  'flex items-center',
  'hover:brighten-90',
  {
    'bg-moo-blue-medium text-white gap-1 px-12 py-2.5': props.variant === 'blue',
    'bg-moo-black-jam text-white gap-1 px-12 py-2.5': props.variant === 'black',
    'bg-white text-moo-black-jam gap-4 px-4 py-2.5': props.variant === 'white',
  }
];
</script>

<style scoped>
/* Add any common styles here */
</style>
