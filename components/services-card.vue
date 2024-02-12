<template>
    <div class="relative space-y-4 text-moo-bkg p-4 lg:p-10 h-full">
        <slot name="image"></slot>
        <div class="flex flex-col items-start gap-3 h-full">
            <slot name="details"></slot>
        </div>
    </div>
</template>