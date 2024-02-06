<template>
    <nav class="border-gray-200 h-16 md:h-16 border-b relative bg-moo-blue-medium text-white">
        <Container class="h-full flex flex-wrap items-center justify-between">
            <NuxtLink to="/" class="flex items-center text-3xl font-bold">LOGO</NuxtLink>
            <div class="hidden w-full h-full md:flex md:items-center md:justify-between md:w-auto md:order-1">
                <ul class="h-full flex items-center gap-8 font-medium py-3">
                    <li v-for="(item, index) in navList" :key="index" class="flex items-center h-full">
                        <a href="/" class="hover:bg-gray-100 md:hover:bg-transparent capitalize w-full flex items-center">
                            {{ item.name }}
                        </a>
                    </li>
                    <li>
                        <NuxtLink to=""
                            class="flex gap-1 items-center text-sm font-semibold rounded-md px-4 py-1 border-2 border-white hover:brightness-90">
                            LOGIN
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </Container>
    </nav>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const navList = appConfig.navbar.navList;
</script>