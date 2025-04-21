<template>
  <Car @mousedown="sidebarHidden = true" @mouseup="sidebarHidden = false"></Car>
</template>

<script setup>
import { inject } from 'vue'
import Car from '@/components/Car/index.vue'

const sidebarHidden = inject('sidebarHidden')
</script>
