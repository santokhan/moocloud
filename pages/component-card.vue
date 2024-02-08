<template>
    <div>
        <UContainer class="">
            <div class="m-8"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <!-- <ULandingCard v-for="n in 9" class="text-center" title="JAMflow 123"
                    description="Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris mollis amet nunc. In porttitor pharetra molestie venenatis tortor vitae."
                    icon="i-heroicons-swatch" color="#052FDB" /> -->
            </div>
            <div class="m-8"></div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <UPageCard :ui="{
                    to: 'hover:ring-2 hover:ring-moocloud-500 dark:hover:ring-moocloud-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                }" title="Tailwind CSS"
                    description="Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS."
                    to="https://nuxt.com/modules/tailwindcss" target="_blank" />
                <UPageCard title="Tailwind CSS"
                    description="Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS."
                    to="https://nuxt.com/modules/tailwindcss" target="_blank" />
            </div>
            <div class="m-8"></div>
        </UContainer>
    </div>
</template>
  
<script lang="ts" setup></script>
  
<style scoped></style>
  