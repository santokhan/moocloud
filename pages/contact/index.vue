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

        <Features>
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
                        <H variant="h3">{{ item.title }} {{ index }}</H>
                        <Text>{{ item.description }}</Text>
                    </FeatureCard>
                </FeatureGrid>
            </template>
        </Features>

        <Plan>
            <template #default>
                <div class="">
                    <H variant="h2">Build your plan</H>
                    <Text>Plans that empower you and your team to ship without friction.</Text>
                </div>
                <H variant="h3">
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
                        <ul role="list" class="my-7 space-y-5">
                            <PricingFeature>2 vCPU Xeon</PricingFeature>
                            <PricingFeature>2GB RAM DDR4</PricingFeature>
                            <PricingFeature>40GB SSSD NVMe</PricingFeature>
                            <PricingFeature>120 Visite/min</PricingFeature>
                        </ul>
                    </template>
                    <template #footer>
                        <PriceOnCard>49</PriceOnCard>
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
                    almost
                    as easy as drinking a glass of milk!
                </Text>
            </template>
        </Branding>

        <Faqs>
            <template #content>
                <H variant="h2">Frequently Asked Question</H>
            </template>
            <template #accordion>
                <Accordion v-for="(accordion, index) in faqs" :key="index">
                    <template #default>{{ accordion.summary }}</template>
                    <template #details>{{ accordion.details }}</template>
                </Accordion>

                <Text>For more information, check out our docs.</Text>
            </template>
        </Faqs>

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
const appConfig = useAppConfig();
const faqs = appConfig.faqs.accordions;
const features = appConfig.features.data;
</script>
  
<style scoped></style>