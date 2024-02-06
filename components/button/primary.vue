<template>
    <button
        class="px-12 py-2.5 bg-moo-black-jam hover:brighten-90 rounded-lg text-white font-semibold shadow-lg flex items-center gap-1 border-4 border-white uppercase whitespace-nowrap">
        <slot></slot>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </button>
</template>

<script setup lang="ts"></script>