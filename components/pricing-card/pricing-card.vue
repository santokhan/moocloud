<template>
    <div class="w-full mx-auto max-w-sm space-y-5 rounded-xl border-4 border-moo-blue-low p-4 sm:p-6 text-moo-bkg">
        <H variant="h2">Plan A</H>
        <Text>Perfect for a small company</Text>
        <hr class="border-t border-moo-blue-low opacity-60" />
        <Text>This plan Includes</Text>
        <ul role="list" class="my-7 space-y-5">
            <PricingFeature>2 vCPU Xeon</PricingFeature>
            <PricingFeature>2GB RAM DDR4</PricingFeature>
            <PricingFeature>40GB SSSD NVMe</PricingFeature>
            <PricingFeature>120 Visite/min</PricingFeature>
        </ul>
        <div class="py-4"></div>
        <div class="flex items-baseline gap-1">
            <span class="text-5xl font-bold tracking-tight">49</span>
            <span class="ml-1 flex items-center gap-1 font-normal"> <span>$</span>/<span>month</span> </span>
        </div>
        <Anchor variant="blue" class="justify-center">CONTACT US TO BEGIN</Anchor>
    </div>
</template>