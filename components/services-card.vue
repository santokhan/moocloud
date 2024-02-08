<template>
    <div class="space-y-4 text-moo-bkg p-4 lg:p-6">
        <slot name="image"></slot>
        <div class="flex flex-col items-start gap-3">
            <slot name="details"></slot>
        </div>
    </div>
</template>