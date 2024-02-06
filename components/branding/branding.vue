<template>
    <div class="py-8">
        <div class="bg-blue-500/5">
            <Container class="pt-16 space-y-2">
                <div class="max-w-2xl mx-auto text-center space-y-4">
                    <H variant="h2" class="leading-tight text-moo-bkg">JAM flow works with</H>
                    <Text>
                        Build and manage ultra-fast websites with ease thanks to the constant support of our technicians.
                        Simplify the management of your digital office and streamline your workflow with MooCloud. It's
                        almost
                        as easy as drinking a glass of milk!
                    </Text>
                </div>
                <div class="flex flex-wrap">
                    <div class="px-3 w-2/6 md:w-1/6 aspect-square object-cover">
                        <img :src="python" alt="python" />
                    </div>
                    <div class="px-3 w-2/6 md:w-1/6 aspect-square object-cover">
                        <img :src="node" alt="node" />
                    </div>
                    <div class="px-3 w-2/6 md:w-1/6 aspect-square object-cover">
                        <img :src="java" alt="java" />
                    </div>
                    <div class="px-3 w-2/6 md:w-1/6 aspect-square object-cover">
                        <img :src="ruby" alt="ruby" />
                    </div>
                    <div class="px-3 w-2/6 md:w-1/6 aspect-square object-cover">
                        <img :src="scala" alt="scala" />
                    </div>
                    <div class="px-3 w-2/6 md:w-1/6 aspect-square object-cover">
                        <img :src="go" alt="go" />
                    </div>
                </div>
            </Container>
        </div>
    </div>
</template>

<script setup lang="ts">
import python from '~/assets/images/powered-by/python.png';
import node from '~/assets/images/powered-by/node.png';
import java from '~/assets/images/powered-by/java.png';
import ruby from '~/assets/images/powered-by/ruby.png';
import scala from '~/assets/images/powered-by/scala.png';
import go from '~/assets/images/powered-by/go.png';
</script>