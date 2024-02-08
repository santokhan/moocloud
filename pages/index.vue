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

    <SplitContentImage>
      <template #content>
        <H variant="h2">
          One platform to rule them all, one platform
        </H>
        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
          Simplify the management of your digital office and streamline your workflow with MooCloud. It's
          almost as easy as drinking a glass of milk!
        </Text>
      </template>
      <template #image>
        <DummyImage />
      </template>
    </SplitContentImage>

    <SplitContentImage :align="'right'">
      <template #content>
        <H variant="h2">One platform to rule them all, one platform</H>

        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
          Simplify the management of your digital office and streamline your workflow with MooCloud. It's
          almost as easy as drinking a glass of milk!
        </Text>
      </template>
      <template #image>
        <DummyImage />
      </template>
    </SplitContentImage>

    <BlogPost>
      <template #default>
        <H variant="h2" class="leading-tight">Articles</H>
        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
          Simplify the management of your digital office and streamline your workflow with MooCloud.
        </Text>
      </template>
      <template #posts>
        <Post v-for="(item, index) in [1, 2, 3]" :key="index">
          <template #headings>
            <DummyImage class="w-full" />
          </template>
          <template #features>
            <H variant="h4" class="leading-tight">Blog post title {{ index + 1 }}</H>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris
            </Text>
          </template>
          <template #footer>
            <Anchor variant="blue" class="justify-center" to="">CONTACT US TO BEGIN</Anchor>
          </template>
        </Post>
      </template>
    </BlogPost>

    <Services>
      <ServicesCard v-for="(item, index) in [1, 2]" :key="index">
        <template #image>
          <DummyImage />
        </template>
        <template #details>
          <H variant="h4" class="leading-tight">Embracing Minimalism: The Art of Decluttering Your Life</H>
          <Text>
            In a world filled with constant noise and distractions, embracing minimalism has become more than just a
            trend; it's a lifestyle choice that can bring clarity, focus, and a sense of calm to our everyday lives. In
            this blog post, we'll explore the principles of minimalism and how they can help you declutter not just your
            physical space, but your mind and schedule as well.
          </Text>
          <Spacing size="small" />
          <Anchor variant="outline-white" class="w-auto" to="">CONTACT US TO BEGIN</Anchor>
        </template>
      </ServicesCard>
    </Services>

    <Plan>
      <template #default>
        <div class="">
          <H variant="h2">Build your plan</H>
          <Text>Plans that empower you and your team to ship without friction.</Text>
        </div>
        <H variant="h4">
          Lorem ipsum dolor
          sed do
          consectetur adipiscing
          sit amet
          elit
          sed do
          eiusmod tempor incididunt
          sit amet
          et dolore magna
          sit amet
          aliqua
        </H>
      </template>

      <template #pricing-card>
        <PricingCard>
          <template #header>
            <H variant="h2">Plan A</H>
            <Text>Perfect for a small company</Text>
          </template>
          <template #main>
            <Text>This plan Includes</Text>
            <ul role="list" class="space-y-5">
              <PricingFeature>2 vCPU Xeon</PricingFeature>
              <PricingFeature>2GB RAM DDR4</PricingFeature>
              <PricingFeature>40GB SSSD NVMe</PricingFeature>
            </ul>
            <Spacing size="small" />
            <PricingAmount>49</PricingAmount>
            <Anchor variant="blue" class="justify-center" to="">CONTACT US TO BEGIN</Anchor>
          </template>
        </PricingCard>
      </template>
    </Plan>

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

    <Branding>
      <template #header>
        <H variant="h2" class="leading-tight text-moo-bkg">JAM flow works with</H>
        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
          Simplify the management of your digital office and streamline your workflow with MooCloud. It's
          almost as easy as drinking a glass of milk!
        </Text>
      </template>
    </Branding>

    <Faqs>
      <template #content>
        <H variant="h2">Frequently Asked Question</H>
      </template>
      <template #accordion>
        <Accordion v-for="(accordion, index) in faqs" :key="index">
          <template #default>{{ accordion.label }}</template>
          <template #details>{{ accordion.content }}</template>
        </Accordion>
        <Text>For more information, check out our docs.</Text>

        <!-- 
        <UAccordion :items="faqs" class="space-y-4" color="">
          <template #default="{ item, open }">
            <UButton
              class="rounded-lg flex items-center justify-between p-4 py-4 text-left font-medium bg-transparent border-2 border-moo-blue-low hover:bg-moo-blue-low"
              :class="[open ? 'bg-moo-blue-low' : '']">
              <H variant="h5">{{ item.label }}</H>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 24 24" fill="none">
                <path v-if="open" d="M6 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round">
                </path>
                <path v-else d="M6 12h12M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </UButton>
          </template>
          <template #item="{ item }">
            <Text>{{ item.content }}</Text>
          </template>
        </UAccordion> 
        -->
      </template>
    </Faqs>

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
