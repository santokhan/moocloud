<template>
  <Container>
    <div class="py-6 grid place-items-center">
      <RouterLink to="/components"
        class="px-12 py-2.5 bg-moo-blue-medium hover:brighten-90 rounded-lg text-white font-semibold shadow-lg uppercase">
        Go to component page</RouterLink>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>