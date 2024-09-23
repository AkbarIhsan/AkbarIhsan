<template>
    <div id="home" class="w-full h-auto flex flex-col relative bg-black z-30">
        <div class="flex flex-col lg:flex-row justify-between w-full h-full relative">
            <!-- foto -->
            <div class="w-full h-auto flex justify-center">
                <img data-aos="zoom-out" class="aos-init w-[90%] lg:w-full lg:h-[600px] h-[500px] grayscale z-10" src="@\assets\aku1.png" alt="">
                <div class="bg-black blur-xl top-[400px] left-3 lg:top-[500px] lg:-left-10  w-full h-48 absolute z-10"></div>
            </div>

            <!-- kata kata -->
            <div class="w-full h-auto flex flex-col text-center lg:text-start gap-5 justify-center px-5 z-20 lg:px-0 ">
                    <h1 class="text-hunt4 tracking-widest">JUNIOR FRONTEND WEB DEVELOPER</h1>
                    <h2 class="text-hunt5 font-handjet font-bold text-4xl lg:text-6xl">Your New Junior Frontend Web Developer is Ready to Turn Your Web Ideas into Reality</h2>
                    <h3 class="text-hunt5">Focused on Aesthetically pleasing and functional designs</h3>
                    <div class="flex justify-center lg:justify-start">
                        <Button class="text-lg flex flex-row items-center relative" to="https://wa.me/081459177100">
                            <h1 class="pr-10">Happy to chat on WhatsApp</h1>
                            <img class="w-auto h-[80%] right-2 absolute hover:shadow-lg" src="@\assets\whatsapp.png" alt="">
                        </Button>
                    </div>
            </div>
        </div>
        
        <!-- background efek -->
        <div class="w-[400px] h-[600px] absolute bg-hunt4/70 block rounded-[50%] -inset-y-[20%] -inset-x-[13%] blur-[140px] z-10"></div>
        <div class="w-64 h-64 absolute bg-hunt4/80 block rounded-[50%] blur-[140px] inset-y-1/4 inset-x-3/4  z-10"></div>
    </div>

    <div class="w-full h-auto bg-black z-20">
        <div class="flex w-full h-[700px] lg:h-screen items-center justify-center relative aos-init"  data-aos="zoom-in">
            <!-- inti -->
            <div class="w-80 h-80 rounded-full bg-hunt4 blur-[160px]"></div>
            
            <!-- jalur luar -->
            <div class="w-[450px] h-[450px] rounded-full border border-dashed absolute flex items-center justify-center">
                <Planet class="right-20 top-0">
                    Nuxt.Js
                </Planet>
                <Planet class="lg:-left-5 left-5 top-16">
                    Next.Js
                </Planet>
                <Planet class="right-20 bottom-40">
                    Laravel
                </Planet>
                <Planet class="lg:-right-48 right-0 top-14">
                    HTML
                </Planet>
                <Planet class="lg:-left-40 left-0 bottom-36 ">
                    CSS
                </Planet>
                <Planet class="right-0 bottom-5">
                    Tailwind
                </Planet>
                <Planet class="lg:left-0 left-20 bottom-0">
                    PHP
                </Planet>
            </div>
            
            <!-- jalur dalam -->
            <div class="w-[250px] h-[250px] rounded-full border border-dashed absolute"></div>

            <!-- logo -->
            <div class="absolute transform origin-center animate-spinSlow">
                <img src="@\assets\mars.png" alt="mars" class="w-10 h-10">
            </div>

            <div class="absolute w-2/3 text-center">
                <h1 class="text-4xl lg:text-7xl font-extrabold leading-tight">I AM SKILLED IN VARIOUS TECHNOLOGIES AND FRAMEWORKS.</h1>
            </div>
        </div>
    </div>

    <div class="w-full h-auto bg-black shadow-2xl shadow-hunt4/50 flex flex-col items-center py-10 relative z-20">
        <!-- ini bg -->
        <div class="absolute -top-16 animate-bounce">
            <div class=" w-32 h-32 rounded-full shadow-full shadow-black bg-gradient-to-tl from-hunt4 to-hunt1 rotate-90 flex justify-center font-handjet font-semibold text-7xl py-6">-></div>
        </div>
        <div class="absolute w-[400px] h-[400px] bg-hunt4 rounded-full blur-[180px] right-20 top-52"></div>
        <div class="absolute w-72 h-72 bg-hunt4 rounded-full blur-[140px] left-0 top-32"></div>
        
        <!-- ini judul -->
        <div class="w-full flex flex-col items-center gap-8 py-20 relative">
            <h4 class="text-sm text-hunt4 tracking-widest">HOW CAN I HELP?</h4>
            <h1 class="lg:text-[110px] text-7xl font-medium tracking-wider">Services</h1>
        </div>
        <div class="w-full flex flex-wrap lg:flex-nowrap justify-between px-10 gap-10">
            <div class="w-full h-[380px] border border-hunt5/30 lg:px-20 px-5 backdrop-blur-3xl rounded-3xl flex flex-col justify-center">
                <div class="w-full h-full flex flex-row items-center">
                    <h1 class="text-[110px] font-handjet">01</h1>
                    <h1 class="text-4xl font-karla font-extrabold tracking-widest px-3">UI DESIGN</h1>
                </div>
                <div class="w-full h-full">
                    <p class="text-hunt5/70">
                        Bring your references, goals, and ideas, and we will design a website that you and your audience will love. <br><br> UI Design and handoff made on Figma.
                    </p>
                </div>
            </div>
            <div class="w-full h-[380px] border border-hunt5/30 lg:px-20 px-5 py-5 backdrop-blur-3xl rounded-3xl flex flex-col justify-center">
                <div class="w-full h-full flex flex-row items-center">
                    <h1 class="text-[110px] font-handjet">02</h1>
                    <h1 class="text-xl lg:text-4xl font-karla font-extrabold tracking-widest px-3">WEB DEVELOPMENT</h1>
                </div>
                <div class="w-full h-full">
                    <p class="text-hunt5/70">
                        Share your vision and needs, and I will develop a fast, responsive website tailored to your requirements. As a frontend engineer, I ensure clean code and use the latest technologies for optimal performance.
                    </p>
                </div>                
            </div>
        </div>

        <Button class="my-20" to="/project">
            Want to see my project?
        </Button>
    </div>

    <div class="w-full h-screen z-0">

    </div>
</template>