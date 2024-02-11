<template>
    <footer>
        <UFooterColumns :links="footerNavs.map(nav => { nav.children = nav.children.slice(0, 3); return nav; })" :ui="{
            wrapper: 'w-full flex flex-col lg:grid xl:grid-cols-1 gap-8 mx-auto max-w-screen-xl px-4 py-8 lg:py-14',
            label: 'mb-2 font-bold uppercase text-moo-bkg text-base',
            base: 'text-moo-bkg block py-1 font-medium transition-all ease-in text-base',
            list: 'space-y-2 mt-4',
            center: 'grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row xl:col-span-1 gap-10',
            left: 'mb-0'
        }" />
        <Container>
            <div class="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                <Logo />
                <span class="text-sm+ text-gray-500 sm:text-center text-moo-bkg font-semibold"><a class="hover:underline"
                        href="https://github.com/santokhan">MooCloud</a>. by M. Rezzin Via Ripari Tondi 10 6500
                    Bellinzona</span>
            </div>
        </Container>
    </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const footerNavs = appConfig.footer.navs;
</script>