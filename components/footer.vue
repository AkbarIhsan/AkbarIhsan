<template>
    <div class="w-full h-screen flex flex-col items-center fixed z-5">
        <nuxtLink to="https://wa.me/081459177100" class="w-full h-2/4 flex relative overflow-hidden mt-5 custom-cursor">
            <div class="flex whitespace-nowrap font-extrabold text-hunt5">
                <div class="animate-marquee3 whitespace-nowrap">
                    <span class="text-[280px] mr-2">- LETS TALK</span>
                    <span class="text-[280px] mr-2">- LETS TALK</span>
                    <span class="text-[280px] mr-2">- LETS TALK</span>
                    <span class="text-[280px] mr-2">- LETS TALK</span>
                </div>
                <div class="absolute animate-marquee4 whitespace-nowrap">
                    <span class="text-[280px] mr-2">- LETS TALK</span>
                    <span class="text-[280px] mr-2">- LETS TALK</span>
                    <span class="text-[280px] mr-2">- LETS TALK</span>
                    <span class="text-[280px] mr-2">- LETS TALK</span>
                </div>
            </div>
        </nuxtLink>

        <div class="w-[90%] h-16 mt-14">
            <div class="w-full h-full flex justify-between items-center border rounded-full text-hunt5 cursor-pointer">
                <div class="border-r rounded-l-full w-full h-full hover:bg-hunt4/20">
                    <NuxtLink class="w-full h-full items-center justify-center flex" to="https://www.instagram.com/akbar.ihs?igsh=aDV4YmIzNmd5dm14">INSTAGRAM</NuxtLink>
                </div>
                <div class="border-x w-full h-full hover:bg-hunt4/20">
                    <NuxtLink class="w-full h-full items-center justify-center flex" to="https://www.linkedin.com/in/muhammad-akbar-nur-ihsan-a241002a5?">LINKEDIN</NuxtLink>
                </div>
                <div class="border-x w-full h-full hover:bg-hunt4/20">
                    <NuxtLink class="w-full h-full items-center justify-center flex" to="https://line.me/ti/p/PrzLvLQGUx">LINE</NuxtLink>
                </div>
                <div class="border-l rounded-r-full w-full h-full items-center justify-center flex hover:bg-hunt4/20">
                    <NuxtLink class="w-full h-full items-center justify-center flex" to="https://wa.me/081459177100">
                        WHATSAPP
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="w-full h-auto mt-16 px-20 flex flex-row justify-between">
            <div class="w-full flex flex-row gap-2 items-center">
                <img class="w-12 h-12" src="D:\magang\tugas\portofolio\AkbarIhsan\assets\logo.png" alt="">
                <h1>mnakbarihsan@gmail.com</h1>
            </div>
            <div class="w-full text-end">
                &copy; MyPortofolio2024
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-cursor {
    cursor: url('/assets/arrow.png') 64 64, auto;
}
</style>