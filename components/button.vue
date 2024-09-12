<template>
    <NuxtLink
        :to="to"
        :class="{
            'text-hunt5 bg-gradient-to-r from-hunt4/40 to-hunt4/10 py-5 px-10 rounded-full hover:bg-hunt4/60 hover:shadow-hunt4/40 hover:shadow-full transition-all duration-300': variant === 'primary',
            ' ': variant === 'secondary',
            '': variant === 'transparent',
            }">
        <slot/>
    </NuxtLink>
</template>

<script setup lang="ts">
    const props = defineProps({
        to: {
            type: String,
        },
        variant: {
            type: String,
            default: 'primary',
        },
    })
</script>