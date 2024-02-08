<template>
    <Container class="py-8 lg:py-14">
        <div v-if="footerNavs" class="z-10 mx-auto flex max-w-screen-xl flex-wrap justify-between px-4">
            <div class="w-full py-2 sm:w-1/2 lg:w-2/12 lg:py-0" v-for="(nav, index) in footerNavs" :key="index">
                <FooterNavTitle>{{ nav.title }}</FooterNavTitle>
                <ul class="flex flex-col items-start">
                    <FooterNavItem v-for="(link, index) in nav.links.slice(0, 3)" :key="index" :to="link.to">
                        {{ link.name }}
                    </FooterNavItem>
                </ul>
            </div>
        </div>
    </Container>
    <Container>
        <div class="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            <Logo />
            <span class="text-sm text-gray-500 sm:text-center text-moo-bkg">© 2023 <a class="hover:underline"
                    href="https://github.com/santokhan">Santo</a>. All Rights Reserved.</span>
        </div>
    </Container>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const footerNavs = appConfig.footer.navs;
</script>