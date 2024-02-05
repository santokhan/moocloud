<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Body>
        <LangSwitcher />
        <h1>hello2</h1>
        <div><slot /></div>
      </Body>
    </Html>
  </div>
</template>

<script lang="ts" setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>

<style>

</style>
