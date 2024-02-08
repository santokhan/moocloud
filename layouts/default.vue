<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Body class="bg-moo-black-jam">
      <!-- <LangSwitcher /> -->
      <Navbar />
      <div>
        <slot />
      </div>
      <footer class="bg-moo-black-jam text-moo-bkg">
        <FooterNav />
        <Copyright />
      </footer>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>

<style></style>
