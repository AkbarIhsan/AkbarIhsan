import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        AOS.init({
            duration: 1200, // durasi animasi dalam milidetik
            easing: 'ease-in-out', // jenis easing
            once: false, // animasi hanya sekali terjadi
            mirror: true,  // apakah animasi diputar ulang saat scroll ke atas
            offset: 400, // jarak offset antara elemen dan viewport
        });
    });
});
