<template>
    <li class="relative h-full capitalize">
        <NuxtLink :to="props.to" class="text-moo-bkg block py-2 font-medium transition-all ease-in">
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