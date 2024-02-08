<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Body class="bg-moo-black-jam">
      <header>
        <!-- <LangSwitcher /> -->
        <Navbar />
      </header>
      <main>
        <slot />
      </main>
      <footer class="bg-moo-black-jam text-moo-bkg">
        <FooterNav />
        <Copyright />
      </footer>
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

<style></style>
