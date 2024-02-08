<template>
    <div class="bg-blue-500/5">
        <Container class="pt-16 space-y-2">
            <div class="max-w-2xl mx-auto text-center space-y-4">
                <slot name="header"></slot>
            </div>
            <div class="grid grid-cols-3 sm:grid-cols-6">
                <img :class="imageClasses" src="/assets/images/powered-by/python.png" alt="python" />
                <img :class="imageClasses" src="/assets/images/powered-by/go.png" alt="go" />
                <img :class="imageClasses" src="/assets/images/powered-by/node.png" alt="node" />
                <img :class="imageClasses" src="/assets/images/powered-by/scala.png" alt="scala" />
                <img :class="imageClasses" src="/assets/images/powered-by/ruby.png" alt="ruby" />
                <img :class="imageClasses" src="/assets/images/powered-by/java.png" alt="java" />
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
const imageClasses = "px-3 aspect-square object-cover";
</script>