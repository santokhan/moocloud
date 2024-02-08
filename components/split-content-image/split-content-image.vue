<template>
    <Container class="py-14">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="px-4 space-y-6 text-moo-bkg">
                <slot name="content"></slot>
            </div>
            <div>
                <slot name="image"></slot>
            </div>
        </div>
    </Container>
</template>