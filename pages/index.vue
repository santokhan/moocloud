<template>
  <Hero />
  <SplitContentImage />
  <Features />
  <Plan />
  <Branding />
  <Faqs />
  <Container class="py-14">
    <FooterBanner>
      <H variant="h3" class="max-w-xl">
        A platform to build your network as agile as your business. See it in action
      </H>
      <Button variant="white" class="">taka a tour</Button>
    </FooterBanner>
  </Container>
  <div class="py-4 grid place-items-center">
    <NuxtLink to="/components"
      class="px-12 py-2.5 bg-moo-blue-medium hover:brighten-90 rounded-lg text-white font-semibold shadow-lg uppercase">
      Go to component page
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>