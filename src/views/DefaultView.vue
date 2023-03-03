<template>
    <div class="columns-2 w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div></div>
        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <BarChart  />
        </div>
       <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <PieChart  />
       </div>
        
    </div>
</template>
  
<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        BarChart: defineAsyncComponent(() => import('../components/BarChart.vue')),
        PieChart: defineAsyncComponent(() => import('../components/PieChart.vue'))
    }

}
</script>