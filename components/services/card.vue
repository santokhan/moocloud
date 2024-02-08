<template>
    <div class="space-y-4 text-moo-bkg p-4 lg:p-6">
        <div>
            <slot name="image"></slot>
        </div>
        <div class="space-y-3">
            <slot name="details"></slot>
        </div>
        <div class="py-4"></div>
        <div class="flex">
            <slot name="footer"></slot>
        </div>
    </div>
</template>