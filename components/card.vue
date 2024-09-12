<template>
    <div class="w-96 h-[400px] bg-hunt7 flex flex-col rounded-xl p-5 gap-3 z-10">
        <div class="w-full h-1/2 shadow-full rounded-xl">
            <slot name="image"/>
        </div>
        <div class="w-full h-1/2 rounded-xl bg-hunt8">
            <slot name="kalimat"/>
        </div>
    </div>
</template>