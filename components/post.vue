<template>
    <div class="space-y-4 text-moo-bkg">
        <div>
            <slot name="headings"></slot>
        </div>
        <div class="">
            <slot name="features"></slot>
        </div>
        <div class="flex">
            <slot name="footer"></slot>
        </div>
    </div>
</template>