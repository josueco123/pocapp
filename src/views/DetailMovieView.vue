<template>
    <div id="animation-carousel" class="relative" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-48 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img :src="movie.Images[0]" class="absolute block w-full object-scale-down h-72 w-144" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img :src="movie.Images[1]" class="absolute block w-full object-scale-down h-72 w-144" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item="active">
            <img :src="movie.Images[2]" class="absolute block w-full object-scale-down h-72 w-144" alt="...">
        </div>             
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

<div class="bg-white justify-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="p-5 m-8">        
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ movie.Title }}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Description: </strong>{{ movie.Plot }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Actors: </strong>{{ movie.Actors }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Geneder: </strong>{{ movie.Genre }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Duration: </strong>{{ movie.Runtime }}</p>
        
    </div>
</div>

</template>
<script>
import { ref } from 'vue';
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { initCarousels } from 'flowbite'
import movies from '../fakeApi/movies.json'

export default {

    setup(){
        const route = useRoute()
        const movie = ref(movies[route.params.id])

       onMounted(() =>{
        initCarousels();
       })

        return{
            movie,

        }
        
    }
}
</script>