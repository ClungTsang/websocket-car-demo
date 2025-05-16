<script setup lang="ts">
import { ref, provide } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import Footer from './components/Footer/index.vue'

const isSidebarHidden = ref(false)
provide('isSidebarHidden', isSidebarHidden)
const route = useRoute()

useHead({
  title: () => route.meta.title || '汽车渲染',
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title,
    },
  ],
})
</script>
<template>
  <div class="h-screen w-screen relative">
    <router-view />
    <Sidebar :is-hidden="isSidebarHidden" @keep-visible="isSidebarHidden = false"></Sidebar>
    <Footer></Footer>
  </div>
</template>
