<template>
    <div v-if="footerNavs" class="z-10 mx-auto flex max-w-screen-xl flex-wrap justify-between border-b px-4 py-8 lg:py-16">
        <div class="w-full py-2 sm:w-1/2 lg:w-2/12 lg:py-0" v-for="(nav, index) in footerNavs" :key="index">
            <div class="mb-2 font-bold uppercase">{{ nav.title }}</div>
            <ul class="flex flex-col items-start">
                <li class="relative h-full capitalize" v-for="(link, index) in nav.links.slice(0, 3)" :key="index">
                    <NuxtLink :to="link.to"
                        class="text-raisin block py-2 font-medium transition-all ease-in hover:translate-x-2 hover:underline hover:decoration-2 hover:underline-offset-4">
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const footerNavs = appConfig.footer.navs;
</script>