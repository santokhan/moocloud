<template>
    <UContainer class="py-8 lg:py-14">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <UPageCard
                description="Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS."
                to="https://nuxt.com/modules/tailwindcss" target="_blank" title="Tailwind CSS" :ui="{
                    wrapper: 'bg-moo-gradient ring-0',
                    to: 'hover:ring-2 hover:ring-moo-blue-medium dark:hover:ring-moo-blue-medium',
                    title: 'text-moo-bkg text-xl',
                    description: 'text-moo-bkg',
                }" />
            <UPageCard
                description="Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS."
                to="https://nuxt.com/modules/tailwindcss" target="_blank" title="Tailwind CSS" :ui="{
                    wrapper: 'bg-moo-gradient ring-0',
                    to: 'hover:ring-2 hover:ring-moo-blue-medium dark:hover:ring-moo-blue-medium',
                    title: 'text-moo-bkg text-xl',
                    description: 'text-moo-bkg',
                }" />
        </div>
    </UContainer>
</template>
  
<script lang="ts" setup></script>
  
<style scoped>
.background-gradient-moocloud {
    background: radial-gradient(250px circle at blue, transparent 100%) !important;
}
</style>
  