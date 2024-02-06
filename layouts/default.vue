<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

  <Body class="bg-moo-black-jam">
    <!-- <LangSwitcher /> -->
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer />
  </Body>

  </Html>
</template>

<script lang="ts" setup>
import Navbar from '~/components/navbar/navbar.vue';

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>

<style></style>
