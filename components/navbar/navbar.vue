<template>
    <UHeader :ui="{
        wrapper: 'bg-moo-blue-medium border-none sticky top-0 z-50',
        container: 'flex jusitfy-between px-4',
        right: 'flex items-center justify-end'
    }">
        <template #logo>
            <Logo />
        </template>
        <template #right>
            <UIcon name="i-heroicons-bars-2" class="block lg:hidden text-white w-10 h-10" />
            <div class="hidden lg:flex items-center gap-8">
                <UHeaderLinks :links="navList" :ui="{
                    wrapper: 'flex items-center gap-8',
                    base: 'text-white text-base capitalize',
                    inactive: ' hover:text-white/75',
                }" />
                <Anchor to="/auth/login" variant="outline-white">LOGIN</Anchor>
            </div>
        </template>
    </UHeader>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const navList = appConfig.navbar.navList;
</script>