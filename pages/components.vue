<template>
  <div class="text-moo-bkg">
    <Container class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-12">
      <ComponentBox>
        <Button variant="blue">TRY IT NOW</Button>
        <Button variant="black">TRY IT NOW</Button>
        <Button variant="white">START NOW</Button>
      </ComponentBox>
      <ComponentBox>
        <H v-for="(h, index) in ['h6', 'h5', 'h4', 'h3', 'h2', 'h1']" :key="index" :variant="h">
          Typography {{ h }}
        </H>
      </ComponentBox>
      <ComponentBox>
        <FooterBanner>
          <H variant="h3" class="max-w-xl">
            JAMflow platform works with everything
          </H>
          <Button variant="white" class="">taka a tour</Button>
        </FooterBanner>
      </ComponentBox>
      <ComponentBox>
        <FooterBanner>
          <H variant="h3" class="max-w-xl">
            See some references
          </H>
          <Button variant="white" class="">taka a tour</Button>
        </FooterBanner>
      </ComponentBox>
      <ComponentBox class="lg:col-span-2">
        <Hero>
          <Text>[ LOREM IPSUM ]</Text>
          <H variant="h1" class="leading-tight">Deploy your website in minutes</H>
          <div class="flex justify-center mt-4">
            <Anchor variant="outline-white">GET STARTED</Anchor>
          </div>
        </Hero>
      </ComponentBox>
      <ComponentBox class="lg:col-span-2">
        <FeatureGrid class="py-12">
          <FeatureCard v-for="(item, index) in features.slice(0, 3)" :key="index">
            <svg class="w-16 h-16" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 6V12M42 6V12M24 54V60M42 54V60M12 24H6M12 42H6M60 24H54M60 42H54M18 54H48C49.5913 54 51.1174 53.3679 52.2426 52.2426C53.3679 51.1174 54 49.5913 54 48V18C54 16.4087 53.3679 14.8826 52.2426 13.7574C51.1174 12.6321 49.5913 12 48 12H18C16.4087 12 14.8826 12.6321 13.7574 13.7574C12.6321 14.8826 12 16.4087 12 18V48C12 49.5913 12.6321 51.1174 13.7574 52.2426C14.8826 53.3679 16.4087 54 18 54ZM24 24H42V42H24V24Z"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <H variant="h4">{{ item.title }}</H>
            <p class="text-gray-300">{{ item.description }}</p>
          </FeatureCard>
        </FeatureGrid>
      </ComponentBox>
      <ComponentBox class="lg:col-span-2">
        <Content>
          <H variant="h2">
            One platform to rule them all, one platform to find them, one platform to bring them all
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
        </Content>
      </ComponentBox>
      <ComponentBox class="lg:col-span-2">
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
      </ComponentBox>
      <ComponentBox>
        <ServicesCard v-for="(item, index) in [1]" :key="index">
          <template #image>
            <DummyImage class="w-56" />
          </template>
          <template #details>
            <H variant="h4" class="leading-tight">Embracing Minimalism: The Art of Decluttering Your Life</H>
            <Text>
              In a world filled with constant noise and distractions, embracing minimalism has become more than just a
              trend; it's a lifestyle choice that can bring clarity, focus, and a sense of calm to our everyday lives. In
              this blog post, we'll explore the principles of minimalism and how they can help you declutter not just your
              physical space, but your mind and schedule as well.
            </Text>
          </template>
          <template #footer>
            <Anchor variant="outline-white" class="justify-center" to="">CONTACT US TO BEGIN</Anchor>
          </template>
        </ServicesCard>
      </ComponentBox>
      <ComponentBox>
        <Accordion v-for="(accordion, index) in faqs" :key="index">
          <template #default>{{ accordion.label }}</template>
          <template #details>{{ accordion.content }}</template>
        </Accordion>
      </ComponentBox>
      <ComponentBox class="lg:col-span-2 space-y-2">
        <H variant="h4">Spacing</H>
        <Spacing v-for="(size, index) in ['small', 'medium', 'large', 'xlarge']" :key="index" :size="size"
          class="bg-moo-black-jam">
          <H variant="h6">{{ size }}</H>
        </Spacing>
      </ComponentBox>
    </Container>

    <Container>
      <FooterBanner>
        <H variant="h3">A platform to build your network as agile as your business. See it in
          action</H>
        <Button variant="white">START NOW</Button>
      </FooterBanner>
    </Container>
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
