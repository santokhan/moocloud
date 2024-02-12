<template>
    <div class="relative space-y-4 text-moo-bkg h-full">
        <div class="w-1/2">
            <slot name="image"></slot>
        </div>
        <div class="flex flex-col items-start gap-2 h-full">
            <slot name="details"></slot>
        </div>
    </div>
</template>