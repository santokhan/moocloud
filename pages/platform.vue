<template>
  <div>
    <Hero>
      <Text>[ LOREM IPSUM ]</Text>
      <H variant="h1" class="leading-tight">Deploy your website in minutes</H>
      <div class="flex justify-center mt-4">
        <Anchor variant="outline-white">GET STARTED</Anchor>
      </div>
    </Hero>

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

    <Faqs>
      <template #content>
        <H variant="h2">Frequently Asked Question</H>
      </template>
      <template #accordion>
        <UAccordion :items="faqs" :ui="{
          wrapper: 'w-full space-y-4',
          container: 'w-full flex flex-col space-y-4',
          item: {
            base: 'text-white bg-moo-blue-low rounded-lg',
            size: 'text-base',
            padding: 'p-4'
          },
        }">
          <template #default="{ item, open }">
            <UButton
              class="flex items-center justify-between p-4 py-4 text-left font-medium bg-transparent border-2 border-moo-blue-low hover:bg-moo-blue-low"
              :class="[open ? 'bg-moo-blue-low' : '']">
              <H variant="h5">{{ item.label }}</H>
              <UIcon v-if="open" name="i-heroicons-minus" class="w-6 h-6" />
              <UIcon v-else name="i-heroicons-plus" class="w-6 h-6" />
            </UButton>
          </template>
        </UAccordion>
        <Text>For more information, check out our docs.</Text>
      </template>
    </Faqs>

    <Container class="py-8 lg:py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Banner>
          <H variant="h3" class="max-w-xl">
            A platform to build your network as agile as your business. See it in action
          </H>
          <Button variant="white" class="">taka a tour</Button>
        </Banner>
        <Banner>
          <H variant="h3" class="max-w-xl">
            A platform to build your network as agile as your business. See it in action
          </H>
          <Button variant="white" class="">taka a tour</Button>
        </Banner>
      </div>
    </Container>

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
