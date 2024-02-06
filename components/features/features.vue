<template>
    <FeatureGrid class="py-12">
        <FeatureCard v-for="(item, index) in [1, 2, 3]" :key="index">
            <svg class="w-16 h-16" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 6V12M42 6V12M24 54V60M42 54V60M12 24H6M12 42H6M60 24H54M60 42H54M18 54H48C49.5913 54 51.1174 53.3679 52.2426 52.2426C53.3679 51.1174 54 49.5913 54 48V18C54 16.4087 53.3679 14.8826 52.2426 13.7574C51.1174 12.6321 49.5913 12 48 12H18C16.4087 12 14.8826 12.6321 13.7574 13.7574C12.6321 14.8826 12 16.4087 12 18V48C12 49.5913 12.6321 51.1174 13.7574 52.2426C14.8826 53.3679 16.4087 54 18 54ZM24 24H42V42H24V24Z"
                    stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <H variant="h3">Agency Lorem {{ item }}</H>
            <p class="text-gray-300">
                Lorem ipsum dolor sit amet consectetur. Dignissim feugiat pellentesque vel dolor mauris
                mollis amet nunc. In porttitor pharetra molestie venenatis tortor vitae.
            </p>
        </FeatureCard>
    </FeatureGrid>
</template>