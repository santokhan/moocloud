<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Body>
      <!-- <LangSwitcher /> -->
      <Navbar />
      <div>
        <slot />
      </div>
    </Body>

    </Html>
  </div>
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
