<template>
  <Container class="py-8 lg:py-14 text-moo-bkg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12  rounded-xl" :class="{
      'border-moo-blue-low border-4': border,
      'divide-moo-blue-low lg:divide-x-4': divider,
    }">
      <slot></slot>
    </div>
  </Container>
</template>

<script setup lang="ts">
const { divider, border } = defineProps({
  divider: {
    type: Boolean,
    default: true,
  },
  border: {
    type: Boolean,
    default: true,
  },
});
</script>
