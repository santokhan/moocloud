<template>
    <details class="w-full text-moo-bkg">
        <summary
            class="border-2 rounded-lg border-moo-blue-low flex w-full items-center justify-between p-4 py-4 text-left font-medium">
            <slot></slot>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 plus" viewBox="0 0 24 24" fill="none">
                <path d="M6 12h12M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 minus" viewBox="0 0 24 24" fill="none">
                <path d="M6 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
            </svg>
        </summary>
        <div class="px-4 pb-4">
            <slot name="details"></slot>
        </div>
    </details>
</template>

<script setup lang="ts"></script>