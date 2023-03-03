<template>
      <div class="max-w-xs relative ml-auto space-y-3">
  
        <input
          type="text"
          id="search"
          v-model="searchTerm"
          placeholder="Search movie..."
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
  
        <ul
          v-if="searchItems.length"
          class="w-full rounded bg-white border border-gray-300 px-4 py-2 space-y-1 absolute z-10"
        >
          <li class="px-1 pt-1 pb-2 font-bold border-b border-gray-200">
            Showing {{ searchItems.length }} of {{ items.length }} results
          </li>
          <li
              v-for="item in searchItems"
              :key="item.name"
              class="cursor-pointer hover:bg-gray-100 p-1"
          >
            {{ item.Title }}
          </li>
        </ul>
      </div>
  </template>
  <script>
  import {ref, computed} from 'vue'
  export default {
    props:{
        data: Array
    },
    setup(props) {
        const items = props.data
      let searchTerm = ref('')
      const searchItems = computed(() => {
        if (searchTerm.value === '') {
          return []
        }
        let matches = 0
        return items.filter(item => {
          if (item.Title.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
            matches++
            return item
          }
        })
      });
      return {
        items,
        searchTerm,
        searchItems,
      }
    }
  }
  </script>