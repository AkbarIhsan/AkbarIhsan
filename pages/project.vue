<template>
    <div class="w-full h-auto shadow-2xl shadow-hunt4/50 bg-black z-10 flex flex-col items-center mt-10 py-20">
        <div class="absolute w-60 h-60 rounded-full bg-hunt4/80 blur-[180px] left-0 top-0"></div>
        <div class="absolute w-60 h-60 rounded-full bg-hunt4/80 blur-[180px] right-0 bottom-0"></div>
        <h1 class="lg:text-[110px] text-6xl font-medium tracking-wide text-center">My Projects</h1>
        <div class="w-full h-full flex flex-wrap justify-center gap-5 py-10">
            <Card>
                <template #image>
                    <div class="w-full h-full flex justify-center relative">
                        <img class="rounded-xl w-full h-full" src="@\assets\falldetection.png" alt="">
                    </div>
                </template>
                <template #kalimat>
                    <div class="p-5 w-full h-full flex flex-col justify-between">
                        <div class="flex flex-col gap-3">
                            <h1 class="text-3xl font-semibold">Fall Detection</h1>
                            <h2>Malang - Indonesia</h2>
                            <h3 class="text-xs text-hunt5/30">Next.Js</h3>    
                        </div>
                        <h3 class="text-xs text-hunt5/30">Design by : Bryan Saputra & Sufina</h3>
                    </div>
                </template>
            </Card>
            
            <Card>
                <template #image>
                    <img class="rounded-xl w-full h-full" src="@\assets\wma.png" alt="">
                </template>
                <template #kalimat>
                    <div class="p-5 w-full h-full flex flex-col justify-between">
                        <div class="flex flex-col gap-3">
                            <h1 class="text-3xl font-semibold">WeMakeArtistry</h1>
                            <h2>Malang - Indonesia</h2>
                            <h3 class="text-xs text-hunt5/30">Nuxt.Js</h3>  
                        </div>
                        <h3 class="text-xs text-hunt5/30">Design by : Maria Fadilla</h3>
                    </div>
                </template>
            </Card>   

            <Card>
                <template #image>
                    <img class="rounded-xl w-full h-full" src="@\assets\malangcamp.png" alt="">
                </template>
                <template #kalimat>
                    <div class="p-5 w-full h-full flex flex-col justify-between">
                        <div class="flex flex-col gap-3">
                            <h1 class="text-3xl font-semibold">Malang Camp</h1>
                            <h2>Malang - Indonesia</h2>
                            <h3 class="text-xs text-hunt5/30">Laravel</h3>  
                        </div>
                        <h3 class="text-xs text-hunt5/30">Design by : Amalia Salsa L</h3>
                    </div>
                </template>
            </Card>        
        </div>
        <div class="flex flex-col w-auto items-center gap-5">
            <h4 class="text-sm text-hunt4 tracking-widest">CONTACT ME IF YOU ARE INTERESTED</h4>
            <Button class="text-lg flex flex-row items-center relative" to="https://wa.me/081459177100">
                    <h1 class="pr-10">Happy to chat on WhatsApp</h1>
                    <img class="w-auto h-[80%] right-2 absolute hover:shadow-lg" src="@\assets\whatsapp.png" alt="">
            </Button>
        </div>
    </div>
    <div class="w-full h-screen z-5"></div>
</template>