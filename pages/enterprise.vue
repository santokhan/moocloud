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
  