<template>
    <nav class="border-gray-200 h-16 md:h-16 border-b relative bg-moo-blue-medium text-white">
        <Container class="h-full flex flex-wrap items-center justify-between">
            <RouterLink to="/" class="flex items-center text-3xl font-bold">LOGO</RouterLink>
            <!-- <div class="flex items-center md:order-2 relative">
                <button data-collapse-toggle="navbar-user" type="button"
                    class="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-white"
                    aria-controls="navbar-user" aria-expanded="false">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
                        class="w-6 h-6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"></path>
                    </svg>
                </button>
            </div> -->
            <div class="hidden w-full h-full md:flex md:items-center md:justify-between md:w-auto md:order-1">
                <ul class="h-full flex items-center gap-8 font-medium py-3">
                    <li v-for="(item, index) in navList" :key="index" class="flex items-center h-full">
                        <a href="/" class="hover:bg-gray-100 md:hover:bg-transparent capitalize w-full flex items-center">
                            {{ item.name }}
                        </a>
                    </li>
                    <li>
                        <a href=""
                            class="flex gap-1 items-center text-sm font-semibold rounded-md px-4 py-1 border-2 border-white hover:brightness-90">
                            LOGIN
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
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