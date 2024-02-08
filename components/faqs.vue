<template>
    <Container class="py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 text-moo-bkg">
            <div class="">
                <slot name="content"></slot>
            </div>
            <div class="space-y-4">
                <slot name="accordion"></slot>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
</script>