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
            <div class="p-4 border rounded-lg flex flex-col gap-3 items-start bg-gray-100">
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
            <div class="p-4 border rounded-lg flex flex-col gap-3 items-start bg-gray-100">
                <div class="w-full h-full grid place-items-center p-6 rounded-lg bg-moo-gradient text-white">
                    <div class="space-y-2 text-center">
                        <p>[ JAMflow LowCode/Framework ]</p>
                        <TypographyH2>Build your website with our Framework</TypographyH2>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-2  p-4 border rounded-lg flex flex-col gap-3 items-start bg-gray-100">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="(item, index) in [1, 2, 3]" :key="index"
                        class="w-full h-full p-6 rounded-lg bg-moo-black-jam text-moo-bkg">
                        <div class="space-y-2 text-center flex flex-col items-center">
                            <svg class="w-16 h-16" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 6V12M42 6V12M24 54V60M42 54V60M12 24H6M12 42H6M60 24H54M60 42H54M18 54H48C49.5913 54 51.1174 53.3679 52.2426 52.2426C53.3679 51.1174 54 49.5913 54 48V18C54 16.4087 53.3679 14.8826 52.2426 13.7574C51.1174 12.6321 49.5913 12 48 12H18C16.4087 12 14.8826 12.6321 13.7574 13.7574C12.6321 14.8826 12 16.4087 12 18V48C12 49.5913 12.6321 51.1174 13.7574 52.2426C14.8826 53.3679 16.4087 54 18 54ZM24 24H42V42H24V24Z"
                                    stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <TypographyH3>Agency Lorem {{ item }}</TypographyH3>
                            <p class="text-gray-300">
                                Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris
                                mollis amet nunc. In porttitor pharetra molestie venenatis tortor vitae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts"></script>