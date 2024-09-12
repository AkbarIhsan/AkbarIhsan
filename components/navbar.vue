<script lang="ts" setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import { useRouter } from 'vue-router'

    const isScrolled = ref(false)
    const router = useRouter()

    const isActive = (path: string) => router.currentRoute.value.path === path

    const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<template>
    <div class="w-full flex justify-center">
        <nav class="w-full h-20 fixed items-end flex justify-center z-40">
            <ul :class="['text-hunt5 tracking-widest font-dm flex flex-row justify-center py-4 transition-all duration-300', {'w-full': !isScrolled, 'w-96 backdrop-blur-lg bg-hunt4/10 rounded-full shadow-full shadow-hunt1/10 ': isScrolled}]">
                <li class="px-5">
                    <NuxtLink :class="{'text-hunt4 hover:border-none' : isActive('/')}" class="hover:border-b hover:border-b-hunt4" to="/">HOME</NuxtLink>
                </li>
                <li :class="['px-5 transition-all duration-300', {'border-x border-x-transparent':!isScrolled , 'border-x border-x-hunt5':isScrolled}]">
                    <NuxtLink :class="{'text-hunt4 hover:border-none' : isActive('/about')}" class="hover:border-b hover:border-b-hunt4" to="/about">ABOUT ME</NuxtLink>
                </li>
                <li class="px-5">
                    <NuxtLink :class="{'text-hunt4 hover:border-none' : isActive('/project')}" class="hover:border-b hover:border-b-hunt4" to="/project">PROJECT</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>