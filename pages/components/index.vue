<template>
    <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
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
                    <div class="col-span-2 space-y-6 p-6 bg-white rounded-lg bg-moo-gradient text-white flex items-center">
                        <TypographyH3>JAMflow platform works with everything</TypographyH3>
                        <ButtonSecondary>START NOW</ButtonSecondary>
                    </div>
                    <div class="space-y-6 p-6 bg-white rounded-lg bg-moo-gradient text-white">
                        <TypographyH3>JAMflow platform works with everything</TypographyH3>
                        <ButtonSecondary>START NOW</ButtonSecondary>
                    </div>
                    <div class="space-y-6 p-6 bg-white rounded-lg bg-moo-gradient text-white">
                        <TypographyH3>See some references</TypographyH3>
                        <ButtonSecondary>START NOW</ButtonSecondary>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts"></script>