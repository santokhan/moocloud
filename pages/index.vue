<template>
  <div>
    <Hero>
      <Text>{{ t("headerSection.spam") }}</Text>
      <H variant="h1" class="leading-tight"> {{ t("headerSection.title") }}</H>
      <div class="flex justify-center mt-4">
        <Anchor variant="outline-white"> {{ t("headerSection.btn") }}</Anchor>
      </div>
    </Hero>

    <Content>
      <H variant="h2">{{ t("content.header") }}</H>
      <Text>
        {{ t("content.description") }}
      </Text>
      <div class="flex items-center gap-4">
        <Anchor variant="blue">{{ t("content.tryItNow") }}</Anchor>
        <Anchor variant="outline-white" size="medium">
          {{ t("content.goToDocumentation") }}
        </Anchor>
      </div>
    </Content>

    <!--     <SplitContentImage>
      <template #content>
        <H variant="h2">{{ t("ctaSelect.header") }}</H>
        <Text>
          {{ t("ctaSelect.description") }}
        </Text>
        <div class="flex items-center gap-4">
          <Anchor variant="blue">{{ t("ctaSelect.tryItNow") }}</Anchor>
          <Anchor variant="outline-white" size="medium">
            {{ t("ctaSelect.goToDocumentation") }}
          </Anchor>
        </div>
      </template>
      <template #image>
        <DummyImage />
      </template>
    </SplitContentImage> -->

    <Services :divider="false" :border="false">
      <ServicesCard>
        <template #image>
          <DummyImage />
        </template>
        <template #details>
          <H variant="h2" class="leading-tight">Serverless and Scalable.</H>
          <Text>
            MooCloud new JAMflow serverless plaform allow your project to scale
            from o to 100 in seconds, allowing your to support high pick of
            demmands with no crash and offreing amazing expreriance to your
            visitors.
          </Text>
          <Spacing size="small" />
          <Anchor variant="outline-white" class="w-auto" to=""
            >CONTACT US TO BEGIN</Anchor
          >
        </template>
      </ServicesCard>
      <ServicesCard>
        <template #image>
          <DummyImage />
        </template>
        <template #details>
          <H variant="h2" class="leading-tight">The LowCode Framework!</H>
          <Text>
            Our pre-built starter kit is designed for ease of use, requiring
            only a basic understanding of HTML and JSON to begin crafting
            stunning websites. However, for those with advanced JavaScript
            skills, the full potential of the underlying framework used like
            Vue, Nuxt and UnJS can be unlocked, offering a more powerful and
            expansive development experience.
          </Text>
          <Spacing size="small" />
          <Anchor variant="outline-white" class="w-auto" to=""
            >Find out more</Anchor
          >
        </template>
      </ServicesCard>
    </Services>

    <Feature>
      <template #headings>
        <H variant="h2" class="leading-tight"
          >Performance, Security, and the Swiss privacy</H
        >
        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant
          support of our technicians. Simplify the management of your digital
          office and streamline your workflow with MooCloud.
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
        <H variant="h2"> One platform to rule them all, one platform </H>
        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant
          support of our technicians. Simplify the management of your digital
          office and streamline your workflow with MooCloud. It's almost as easy
          as drinking a glass of milk!
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
          Build and manage ultra-fast websites with ease thanks to the constant
          support of our technicians. Simplify the management of your digital
          office and streamline your workflow with MooCloud. It's almost as easy
          as drinking a glass of milk!
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
          Build and manage ultra-fast websites with ease thanks to the constant
          support of our technicians. Simplify the management of your digital
          office and streamline your workflow with MooCloud.
        </Text>
      </template>
      <template #posts>
        <Post v-for="(item, index) in [1, 2, 3]" :key="index">
          <template #headings>
            <DummyImage class="w-full" />
          </template>
          <template #features>
            <H variant="h4" class="leading-tight"
              >Blog post title {{ index + 1 }}</H
            >
            <Text>
              Lorem ipsum dolor sit amet consectetur. Dignissim feugiat
              pellentesque vel dolor mauris
            </Text>
          </template>
          <template #footer>
            <Anchor variant="blue" class="justify-center" to=""
              >CONTACT US TO BEGIN</Anchor
            >
          </template>
        </Post>
      </template>
    </BlogPost>

    <Plan>
      <template #default>
        <div class="">
          <H variant="h2">Build your plan</H>
          <Text
            >Plans that empower you and your team to ship without
            friction.</Text
          >
        </div>
        <H variant="h4">
          Lorem ipsum dolor sed do consectetur adipiscing sit amet elit sed do
          eiusmod tempor incididunt sit amet et dolore magna sit amet aliqua
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
            <Anchor variant="blue" class="justify-center" to=""
              >CONTACT US TO BEGIN</Anchor
            >
          </template>
        </PricingCard>
      </template>
    </Plan>

    <Branding>
      <template #header>
        <H variant="h2" class="leading-tight text-moo-bkg"
          >JAM flow works with</H
        >
        <Text>
          Build and manage ultra-fast websites with ease thanks to the constant
          support of our technicians. Simplify the management of your digital
          office and streamline your workflow with MooCloud. It's almost as easy
          as drinking a glass of milk!
        </Text>
      </template>
    </Branding>

    <Faqs>
      <template #content>
        <H variant="h2">Frequently Asked Question</H>
      </template>
      <template #accordion>
        <!--
                <Accordion v-for="(accordion, index) in faqs" :key="index">
                    <template #default>{{ accordion.label }}</template>
                    <template #details>{{ accordion.content }}</template>
                </Accordion>
                -->
        <UAccordion
          :items="faqs"
          :ui="{
            wrapper: 'w-full space-y-4',
            container: 'w-full flex flex-col space-y-4',
            item: {
              base: 'text-white bg-moo-blue-low rounded-lg',
              size: 'text-base',
              padding: 'p-4',
            },
          }"
        >
          <template #default="{ item, open }">
            <UButton
              class="flex items-center justify-between p-4 py-4 text-left font-medium bg-transparent border-2 border-moo-blue-low hover:bg-moo-blue-low"
              :class="[open ? 'bg-moo-blue-low' : '']"
            >
              <H variant="h5">{{ item.label }}</H>
              <UIcon v-if="open" name="i-heroicons-minus" class="w-6 h-6" />
              <UIcon v-else name="i-heroicons-plus" class="w-6 h-6" />
            </UButton>
          </template>
        </UAccordion>
        <Text>For more information, check out our docs.</Text>
      </template>
    </Faqs>

    <Content>
      <H variant="h2">
        One platform to rule them all, one platform to find them, one platform
        to bring them all
      </H>
      <Text>
        Build and manage ultra-fast websites with ease thanks to the constant
        support of our technicians. Simplify the management of your digital
        office and streamline your workflow with MooCloud. It's almost as easy
        as drinking a glass of milk!
      </Text>
    </Content>

    <FooterBanner>
      <H variant="h3" class="max-w-xl">
        A platform to build your network as agile as your business. See it in
        action
      </H>
      <Button variant="white" class=""> taka a tour</Button>
    </FooterBanner>

    <GoToComponentPage />
  </div>
</template>

<i18n lang="yaml">
en:
  headerSection:
    spam: From code to deployment
    title: Deploy your website in minutes
    btn: Get started
  content:
    header: Build with JAMflow, a LowCode Enviroment with a distributed and scalable infrastructure.
    description: "Build and manage ultra-fast websites with ease thanks to the constant support of our technicians. Simplify the management of your digital office and streamline your workflow with MooCloud. It's almost as easy as drinking a glass of milk!"
    tryItNow: "TRY IT NOW"
    goToDocumentation: "GO TO DOCUMENTATION"
  ctaSelect:
    header: "One platform to rule them all, one platform to find them"
    description: "Build and manage ultra-fast websites with ease thanks to the constant support of our technicians. Simplify the management of your digital office and streamline your workflow with MooCloud. It's almost as easy as drinking a glass of milk!"
    tryItNow: "TRY IT NOW"
    goToDocumentation: "GO TO DOCUMENTATION"

it:
  headerSection:
    spam: From code to deployment
    title: Deploy your website in minutes
    btn: Get started
  content:
    header: Costruisci con JAMflow, un ambiente LowCode con un'infrastruttura distribuita e scalabile.
    description: "Crea e gestisci siti web ultra-veloci con facilità grazie al costante supporto dei nostri tecnici. Semplifica la gestione del tuo ufficio digitale e rendi più efficiente il tuo flusso di lavoro con MooCloud. È quasi facile come bere un bicchiere di latte!"
    tryItNow: "PROVALO ORA"
    goToDocumentation: "VAI ALLA DOCUMENTAZIONE"
  ctaSelect:
    header: "Una piattaforma per governarle tutte, una piattaforma per trovarle"
    description: "Crea e gestisci siti web ultra-veloci con facilità grazie al costante supporto dei nostri tecnici. Semplifica la gestione del tuo ufficio digitale e rendi più efficiente il tuo flusso di lavoro con MooCloud. È quasi facile come bere un bicchiere di latte!"
    tryItNow: "PROVALO ORA"
    goToDocumentation: "VAI ALLA DOCUMENTAZIONE"

de:
  headerSection:
    spam: From code to deployment
    title: Deploy your website in minutes
    btn: Get started
  content:
    header: Erstellen Sie mit JAMflow, einer LowCode-Umgebung mit einer verteilten und skalierbaren Infrastruktur.
    description: "Erstellen und verwalten Sie ultraschnelle Websites mit Leichtigkeit dank der ständigen Unterstützung unserer Techniker. Vereinfachen Sie die Verwaltung Ihres digitalen Büros und optimieren Sie Ihren Arbeitsablauf mit MooCloud. Es ist fast so einfach wie ein Glas Milch zu trinken!"
    tryItNow: "JETZT AUSPROBIEREN"
    goToDocumentation: "ZUR DOKUMENTATION GEHEN"
  ctaSelect:
    header: "Eine Plattform, um sie alle zu beherrschen, eine Plattform, um sie zu finden"
    description: "Erstellen und verwalten Sie ultraschnelle Websites mit Leichtigkeit dank der ständigen Unterstützung unserer Techniker. Vereinfachen Sie die Verwaltung Ihres digitalen Büros und optimieren Sie Ihren Arbeitsablauf mit MooCloud. Es ist fast so einfach wie ein Glas Milch zu trinken!"
    tryItNow: "JETZT AUSPROBIEREN"
    goToDocumentation: "ZUR DOKUMENTATION GEHEN"
</i18n>

<script lang="ts" setup>
const { t } = useI18n({
  useScope: "local",
});

const features = [
  {
    title: "Agency Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris mollis amet nunc.",
  },
  {
    title: "Agency Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris mollis amet nunc.",
  },
  {
    title: "Agency Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris mollis amet nunc.",
  },
];

const faqs = [
  {
    label: "Getting Started",
    defaultOpen: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Theming",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Layouts",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>

<style scoped></style>
