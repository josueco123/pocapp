<template>
  <NavBar />
  <div class="md:container md:mx-auto items-center rounded-lg shadow-lg  m-5 dark:border-gray-700 dark:bg-gray-800">

    <RouterView class="router-view" v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
<script >
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    NavBar: defineAsyncComponent(() => import('../components/NavBar.vue'))
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>