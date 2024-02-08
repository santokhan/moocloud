<template>
  <div>
    <Hero>
      <Text>[ LOREM IPSUM ]</Text>
      <H variant="h1" class="leading-tight">Deploy your website in minutes</H>
      <div class="flex justify-center mt-4">
        <Anchor variant="outline-white">GET STARTED</Anchor>
      </div>
    </Hero>

    <SplitContentImage>
      <template #content>
        <H variant="h2">
          One platform to rule them all, one platform to find them
        </H>
        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
          Simplify the management of your digital office and streamline your workflow with MooCloud. It's
          almost as easy as drinking a glass of milk!
        </Text>
        <div class="flex items-center gap-4">
          <Anchor variant="blue">TRY IT NOW</Anchor>
          <Anchor variant="outline-white" size="medium">GO TO DOCUMENTATION</Anchor>
        </div>
      </template>
      <template #image>
        <DummyImage />
      </template>
    </SplitContentImage>

    <Feature>
      <template #headings>
        <H variant="h2" class="leading-tight">Performance, Security, and the Swiss privacy</H>
        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
          Simplify the management of your digital office and streamline your workflow with MooCloud.
        </Text>
      </template>
      <template #features>
        <FeatureGrid class="py-12">
          <FeatureCard v-for="(item, index) in features" :key="index">
            <IconFeature />
            <H variant="h4">{{ item.title }} {{ index }}</H>
            <Text>{{ item.description }}</Text>
          </FeatureCard>
        </FeatureGrid>
      </template>
    </Feature>

    <Content>
      <H variant="h2">
        One platform to rule them all, one platform to find them, one platform to bring them all
      </H>
      <Text>
        Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
        Simplify the management of your digital office and streamline your workflow with MooCloud. It's
        almost as easy as drinking a glass of milk!
      </Text>
    </Content>

    <FooterBanner>
      <H variant="h3" class="max-w-xl">
        A platform to build your network as agile as your business. See it in action
      </H>
      <Button variant="white" class="">taka a tour</Button>
    </FooterBanner>

    <GoToComponentPage />
  </div>
</template>

<script lang="ts" setup>
const features = [
  {
    title: "Agency Lorem",
    description: "Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris mollis amet nunc."
  },
  {
    title: "Agency Lorem",
    description: "Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris mollis amet nunc."
  },
  {
    title: "Agency Lorem",
    description: "Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris mollis amet nunc."
  },
]

const faqs = [
  {
    label: 'Getting Started',
    // defaultOpen: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
  {
    label: 'Theming',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
  {
    label: 'Layouts',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
]
</script>

<style scoped></style>
