<template>
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
            <div class="grid grid-cols-2 gap-4 items-start">
                <FooterBanner>
                    <H variant="h3">JAMflow platform works with everything</H>
                    <Button variant="white">START NOW</Button>
                </FooterBanner>
                <div class="space-y-6 p-6 rounded-lg bg-moo-gradient text-white">
                    <H variant="h3">JAMflow platform works with everything</H>
                    <Button variant="white">START NOW</Button>
                </div>
                <div class="space-y-6 p-6 rounded-lg bg-moo-gradient text-white">
                    <H variant="h3">See some references</H>
                    <Button variant="white">START NOW</Button>
                </div>
            </div>
        </ComponentBox>
        <ComponentBox>
            <div class="w-full h-full grid place-items-center p-6 rounded-lg bg-moo-gradient text-white">
                <div class="space-y-2 text-center">
                    <p>[ JAMflow LowCode/Framework ]</p>
                    <H variant="h2">Build your website with our Framework</H>
                </div>
            </div>
        </ComponentBox>
        <ComponentBox class="lg:col-span-2">
            <Features />
        </ComponentBox>
    </Container>

    <Container>
        <FooterBanner>
            <H variant="h3">A platform to build your network as agile as your business. See it in action</H>
            <Button variant="white">START NOW</Button>
        </FooterBanner>
    </Container>
</template>

<script setup lang="ts"></script>