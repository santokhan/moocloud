<template>
    <NuxtLink to="/" class="hover:brightness-90">
        <img :src="logo" alt="logo" class="w-32" />
    </NuxtLink>
</template>

<script setup lang="ts">
import logo from '~/assets/images/logo/logo.svg';
</script>