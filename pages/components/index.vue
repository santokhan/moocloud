<template>
    <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
            <div class="p-4 border rounded-lg flex flex-col gap-3 items-start bg-gray-100" title="Button">
                <ButtonDefault>TRY IT NOW</ButtonDefault>
                <ButtonPrimary>TRY IT NOW</ButtonPrimary>
                <ButtonSecondary>START NOW</ButtonSecondary>
            </div>
            <div class="p-4 border rounded-lg flex flex-col gap-3 items-start bg-gray-100" title="Typography">
                <TypographyH6>Typography</TypographyH6>
                <TypographyH5>Typography</TypographyH5>
                <TypographyH4>Typography</TypographyH4>
                <TypographyH3>Typography</TypographyH3>
                <TypographyH2>Typography</TypographyH2>
                <TypographyH1>Typography</TypographyH1>
            </div>
            <div class="p-4 border rounded-lg flex flex-col gap-3 items-start bg-gray-100" title="">
                <div class="grid grid-cols-2 gap-4 items-start">
                    <div
                        class="col-span-2 p-6 rounded-lg bg-moo-gradient text-white flex items-center justify-between gap-4">
                        <TypographyH3>JAMflow platform works with everything</TypographyH3>
                        <ButtonSecondary>START NOW</ButtonSecondary>
                    </div>
                    <div class="space-y-6 p-6 rounded-lg bg-moo-gradient text-white">
                        <TypographyH3>JAMflow platform works with everything</TypographyH3>
                        <ButtonSecondary>START NOW</ButtonSecondary>
                    </div>
                    <div class="space-y-6 p-6 rounded-lg bg-moo-gradient text-white">
                        <TypographyH3>See some references</TypographyH3>
                        <ButtonSecondary>START NOW</ButtonSecondary>
                    </div>
                </div>
            </div>
            <div class="p-4 border rounded-lg flex flex-col gap-3 items-start bg-gray-100" title="">
                <div class="w-full h-full grid place-items-center p-6 rounded-lg bg-moo-gradient text-white">
                    <div class="space-y-2 text-center">
                        <p>[ JAMflow LowCode/Framework ]</p>
                        <TypographyH2>Build your website with our Framework</TypographyH2>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts"></script>