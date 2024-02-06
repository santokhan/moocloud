<template>
    <nav class="h-16 md:h-16 relative bg-moo-blue-medium text-white">
        <Container class="h-full flex flex-wrap items-center justify-between">
            <Logo />
            <div class="hidden w-full h-full md:flex md:items-center md:justify-between md:w-auto md:order-1">
                <ul class="h-full flex items-center gap-8 font-medium py-3">
                    <li v-for="(item, index) in navList" :key="index" class="flex items-center h-full">
                        <NuxtLink :to="item.to"
                            class="hover:bg-gray-100 md:hover:bg-transparent capitalize w-full flex items-center">
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                    <li>
                        <Anchor to="/auth/login" variant="outline-white">LOGIN</Anchor>
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