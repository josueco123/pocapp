<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th v-for="{ key, label } in fields" scope="col" class="px-6 py-3">
                        {{ label }}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Actions
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="item in paginatedItems" :key="item.uuid"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4" v-for="{ key } in fields" :key="key">
                        <slot :name="`cell(${key})`" :value="item[key]" :item="item">
                            {{ item[key] }}
                        </slot>
                    </td>
                    <td class="px-6 py-4">
                        <button type="button"
                            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            @click="action(item['id'])">Show</button>
                        <button type="button"
                            class=" mt-5 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            @click="addFavorite(item['id'])">
                            <svg  class="w-4 h-4 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
</svg>
                         
                            <span class="sr-only">Icon description</span>
                        </button>
                        
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="text-align: right">
            <button
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                :disabled="pagination.currentPage <= 1" @click="pagination.currentPage--">
                Prev Page
            </button>
            Page {{ pagination.currentPage }} of {{ pagination.totalPages }}
            <button
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                :disabled="pagination.currentPage >= pagination.totalPages" @click="pagination.currentPage++">
                Next Page
            </button>
        </div>
    </div>
</template>
<script setup>
import { computed, reactive, watch } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    fields: {
        type: Array,
        required: true,
    },
    action: {
        type: Function,
    },
    addFavorite: {
        type: Function,
    }

});


const pagination = reactive({
    currentPage: 1,
    perPage: 10,
    totalPages: computed(() =>
        Math.ceil(props.items.length / pagination.perPage)
    ),
});

const paginatedItems = computed(() => {
    const { items } = props;

    const { currentPage, perPage } = pagination;
    const start = (currentPage - 1) * perPage;
    const stop = start + perPage;

    return items.slice(start, stop);
});

watch(
    () => pagination.totalPages,
    () => (pagination.currentPage = 1)
);
</script>