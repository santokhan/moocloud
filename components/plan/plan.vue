<template>
    <Container class="py-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 text-moo-bkg">
            <div class="lg:col-span-2 w-full space-y-6">
                <slot></slot>
            </div>
            <div class="w-full">
                <slot name="pricing-card"></slot>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
</script>