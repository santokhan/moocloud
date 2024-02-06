<template>
    <li class="relative h-full capitalize">
        <NuxtLink :to="props.to"
            class="text-moo-bkg block py-2 font-medium transition-all ease-in hover:translate-x-2 hover:underline hover:decoration-2 hover:underline-offset-4">
            <slot></slot>
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        default: ""
    }
})
</script>