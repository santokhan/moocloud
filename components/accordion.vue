<template>
    <!-- Accordion -->
    <div class="w-full text-moo-bkg overflow-hidden transition-[height] duration-200 ease-out"
        :class="[isOpen ? 'bg-moo-blue-low overflow-hidden rounded-lg shadow-lg' : '']">
        <!-- Summary -->
        <button @click="isOpen = !isOpen"
            class="border-2 rounded-lg border-moo-blue-low flex w-full items-center justify-between p-4 py-4 text-left font-medium hover:bg-moo-blue-low">
            <H variant="h5" class="font-medium">
                <slot></slot>
            </H>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 24 24" fill="none">
                <path v-if="isOpen" d="M6 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path v-else d="M6 12h12M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
        <!-- Content -->
        <div v-if="isOpen" class="px-4 pb-4 transition-all ease-in duration-[5000ms] from-height-0 to-height-auto">
            <slot name="details"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false);
</script>