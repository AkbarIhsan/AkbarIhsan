<script lang="ts" setup>
    const isScrolled = ref(false)
    const handleScroll = () => {
    isScrolled.value = window.scrollY > 500
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<template>
    <div class="w-full h-auto bg-black shadow-full shadow-black z-10 relative pb-10">
        <div class="absolute w-60 h-60 rounded-full bg-hunt4 blur-[140px] top-0"></div>
        <div class="absolute w-60 h-60 rounded-full bg-hunt4/80 blur-[180px] right-0 top-0"></div>
        <div class="bg-black blur-xl bottom-0 -right-10 w-full h-44 absolute z-10 hidden lg:flex"></div>
        <div class="w-full h-screen flex flex-row">
            <div class="flex flex-col gap-10 items-center justify-center text-center ">
                <!-- <h1 class="text-5xl font-pixelify font-semibold text-shadow-custom-hunt">Hello, I'm Akbar</h1> -->
                <div class="text-5xl font-pixelify font-semibold text-shadow-custom-hunt flex flex-row justify-center items-end">
                    <span class="hover:pb-5">H</span>
                    <span class="hover:pb-5">e</span>
                    <span class="hover:pb-5">l</span>
                    <span class="hover:pb-5">l</span>
                    <span class="hover:pb-5">o</span>
                    <span class="hover:pb-5">,</span>
                    <span class="hover:pb-5 ml-3">I</span>
                    <span class="hover:pb-5">'</span>
                    <span class="hover:pb-5">m</span>
                    <span class="hover:pb-5 ml-3">A</span>
                    <span class="hover:pb-5">k</span>
                    <span class="hover:pb-5">b</span>
                    <span class="hover:pb-5">a</span>
                    <span class="hover:pb-5">r</span>
                </div>
                <div class="">
                    <h2 class="text-sm px-10 text-hunt5/70">Welcome to my dynamic and evolving world of web development! I am a student of Information Technology at Politeknik Negeri Malang, with a primary focus on frontend web development. Through my projects, I have honed my skills not only in technical execution but also in creative problem-solving, allowing me to contribute both as an individual and as part of a collaborative team. <br><br>Explore my work and experience the intersection of technology and creativity through my projects!</h2>
                </div>
            </div>
            <div class="w-[2000px] h-full relative hidden lg:flex">
                <img data-aos="zoom-out" class="aos-init w-full h-[600px] grayscale z-5" src="@\assets\aku1.png" alt="">
            </div>
        </div>
    </div>
    <div class="w-full h-screen bg-black shadow-2xl shadow-hunt4/50 z-10 flex lg:flex-row flex-col relative lg:justify-center items-center">
        <div class="w-full h-full flex justify-center items-center lg:pl-20">
            <img :class="['md:w-72 md:h-44 w-60 h-32 rounded-xl absolute transition-all duration-300', {'md:-translate-x-44 md:translate-y-0 -translate-y-12 md:-rotate-0 rotate-[30deg] shadow-full shadow-hunt4/30':isScrolled}]" src="@\assets\malangcamp.png" alt="">
            <img :class="['md:w-72 md:h-44 w-60 h-32 rounded-xl absolute transition-all duration-300', {'md:-translate-y-52 md:translate-x-44 -translate-y-10 md:-rotate-0 rotate-12 shadow-full shadow-hunt4/30':isScrolled}]" src="@\assets\falldetection.png" alt="">
            <img :class="['md:w-72 md:h-44 w-60 h-32 rounded-xl absolute transition-all duration-300', {'md:translate-x-44 md:translate-y-0 -translate-y-5 shadow-full shadow-hunt4/30':isScrolled}]" src="@\assets\wma.png" alt="">
            <div :class="['md:w-72 md:h-44 w-60 h-32 rounded-xl absolute transition-all duration-300 bg-hunt7 flex justify-center items-center', {'md:-translate-x-44 md:-translate-y-52 translate-y-1 md:-rotate-0 -rotate-6 shadow-full shadow-hunt4/30':isScrolled, 'shadow-full shadow-white/30':!isScrolled}]">
                <h1 class="text-shadow-custom-hunt font-pixelify text-lg">My Projects</h1>
            </div>
        </div>
        <div class="w-full h-full flex justify-center items-center px-10">
            <h1 :class="['absolute text-4xl md:text-7xl md:top-[450px] lg:top-5 top-60 lg:right-24 font-pixelify text-shadow-custom-hunt transition-all duration-300', {'translate-x-[800px]':!isScrolled, 'translate-x-0':isScrolled}]">Experience</h1>
            <div :class="['lg:w-full w-full md:h-96 lg:h-auto bg-hunt7 p-5 lg:p-10 mb-[95px] lg:ml-12 rounded-lg lg:text-end text-center flex items-center transition-all duration-300', {'translate-y-96':!isScrolled, 'flex':isScrolled}]">
                <p class="text-sm md:text-2xl lg:text-base">It can be seen from my coursework that I have been working on Frontend Web development from my early semesters up until my internship. In my first web project, 'Malang Camp,' our team used the Laravel framework, and I worked as a fullstack developer. In the next project, 'Fall Detection,' I was responsible for the frontend using the Next.js framework. Then, in 'WeMakeArtisty,' I worked on the frontend using the Nuxt.js framework.</p>
            </div>
        </div>
        <Button class="absolute lg:bottom-28 md:bottom-7 bottom-4" to="/project">
            Go to my project
        </Button>
    </div>
    <div class="w-full h-screen z-5"></div>
</template>