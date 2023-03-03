<template>
  <NavBar />
  <div class="md:container md:mx-auto">
   <hr />

    <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and  to `fade` -->
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script >
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    NavBar: defineAsyncComponent(() => import('../components/NavBar.vue'))
  }
}
</script>