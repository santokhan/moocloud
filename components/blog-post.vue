<template>
    <div class="py-8 lg:py-14">
        <Container class="text-moo-bkg">
            <div class="flex flex-col items-center text-center mx-auto max-w-4xl">
                <slot></slot>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 py-14">
                <slot name="posts"></slot>
            </div>
        </Container>
    </div>
</template>