<template>
    <div class="w-full mx-auto max-w-sm space-y-5 rounded-xl border-4 border-moo-blue-low p-4 sm:p-6 text-moo-bkg">
        <slot name="header"></slot>
        <hr class="border-t border-moo-blue-low opacity-60" />
        <slot name="main"></slot>
        <div class="py-4"></div>
        <slot name="footer"></slot>
    </div>
</template>