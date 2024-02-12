<template>
    <Container class="py-8 lg:py-14">
        <div class="space-y-12 text-moo-bkg">
            <div class="space-y-2 max-w-2xl">
                <slot name="headings"></slot>
            </div>
            <div class="">
                <slot name="features"></slot>
            </div>
        </div>
    </Container>
</template>