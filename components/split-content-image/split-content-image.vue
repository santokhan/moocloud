<template>
    <Container class="py-14">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="flex w-full items-center">
                <div class="px-4 py-6 space-y-6 text-moo-bkg">
                    <H variant="h2">
                        One platform to rule them all, one platform to find them, one platform to bring them all
                    </H>
                    <Text>
                        Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
                        Simplify the management of your digital office and streamline your workflow with MooCloud. It's
                        almost as easy as drinking a glass of milk!
                    </Text>
                    <div class="flex items-center gap-4">
                        <Anchor variant="blue">TRY IT NOW</Anchor>
                        <Anchor variant="outline-white" size="medium">GO TO DOCUMENTATION</Anchor>
                    </div>
                </div>
            </div>
            <div class="flex w-full items-center justify-center">
                <svg class="w-full" viewBox="0 0 950 593" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_dd_2_322)">
                        <rect x="15.5" y="5.66992" width="919" height="562" rx="15" fill="url(#pattern0)" />
                    </g>
                    <defs>
                        <filter id="filter0_dd_2_322" x="0.5" y="0.669922" width="949" height="592"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="3" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_322" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset dy="10" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_2_322" result="effect2_dropShadow_2_322" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_322" result="shape" />
                        </filter>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_2_322" transform="matrix(0.00101753 0 0 0.00166389 -0.111026 0)" />
                        </pattern>
                        <image id="image0_2_322" width="1201" height="601"
                            xlink:href="data:image/png;base64,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" />
                    </defs>
                </svg>
            </div>
        </div>
    </Container>
</template>