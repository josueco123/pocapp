<template>
    <div>
        <div></div>
        <Toast :isActive="toastHidden"/>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent"
                role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile"
                        type="button" role="tab" aria-controls="profile" aria-selected="false">All Movies</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="favorite-tab" data-tabs-target="#favorite" type="button" role="tab" aria-controls="favorite"
                        aria-selected="false">Favorite</button>
                </li>

            </ul>
        </div>
        <div id="myTabContent">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
                aria-labelledby="profile-tab">
                <Table :items="movies" :fields="fields" :action="goToDetail" :addFavorite="addToFavorite">
                </Table>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="favorite" role="tabpanel"
                aria-labelledby="favorite-tab">
                <p v-if="favorites.length == 0" class="text-sm text-gray-500 dark:text-gray-400"><strong
                        class="font-medium text-2xl text-gray-800 dark:text-white">You haven't chosen any movie yet</strong> </p>
                <div v-else>
                    <div v-for="movie in favorites" :key="movie.uuid">

                        <a :href="'/movies/detail/'+movie.id"
                            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                :src="movie.Images[0]" alt="">
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                                    movie.Title }}</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ movie.Plot }}</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ movie.Actors }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue'
import { defineAsyncComponent } from 'vue'
import movies from '../fakeApi/movies.json'
import { useRouter } from 'vue-router'
import { initTabs } from 'flowbite'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        Table: defineAsyncComponent(() => import('../components/Table.vue')),
        Toast: defineAsyncComponent(() => import('../components/Toast.vue')),
    },
    setup() {
        const router = useRouter()
        const store = useStore()
        const toastHidden = ref(true)
        const fields = [
            { key: 'Title', label: 'Title' },
            { key: 'Year', label: 'Year' },
            { key: 'Released', label: 'Released' },
            { key: 'Genre', label: 'Genre' },
            { key: 'Type', label: 'Type' },
        ];

        onMounted(() => {
            initTabs();
        })

        return {
            fields,
            movies,
            toastHidden,
            favorites: computed(() => store.getters.getFavorites),
            goToDetail: async (id) => {
                router.push({ path: `/movies/detail/${id}` })
            },
            addToFavorite: (id) => {
                toastHidden.value = false
                store.dispatch('addMovieToFavorite', movies[id])
            }
        }
    }
}
</script>
  