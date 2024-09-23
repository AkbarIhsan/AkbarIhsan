<template>
        <!-- logo+available -->
        <div class="w-full absolute h-20 hidden lg:flex justify-between items-end py-3 px-10 z-35">
            <div class="flex items-center pl-5">
                <img class="w-14 h-14" src="D:\magang\tugas\portofolio\AkbarIhsan\assets\logo.png" alt="">
            </div>
            <NuxtLink class="text-hunt5 text-sm bg-hunt6 border border-hunt5 shadow-full shadow-hunt5/20 font-dm rounded-full relative hidden lg:flex overflow-hidden w-44" to="https://wa.me/081459177100">
                <div class="py-3 animate-marquee whitespace-nowrap">
                    <span class="mx-2">Available for work</span>
                </div>
                <div class="absolute top-0 py-3 animate-marquee2 whitespace-nowrap">
                    <span class="mx-2">Available for work</span>
                </div>

                <div class="absolute inset-0 w-full h-full rounded-full flex items-center justify-between">
                    <div class="w-10 h-full bg-hunt6 border-l left-0 rounded-l-full flex items-center justify-center">
                        <div class="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div class="w-6 h-full bg-hunt6 border-r right-0 rounded-r-full"></div>
                </div>
            </NuxtLink>
        </div>
</template>