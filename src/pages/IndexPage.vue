<template>
  <Car @mousedown="isSidebarHidden = true" @mouseup="isSidebarHidden = false"></Car>
</template>

<script setup>
import { inject } from 'vue'
import Car from '@/components/Car/index.vue'

import useChat from '@/hooks/useChat'
const { connect } = useChat()
connect()

const isSidebarHidden = inject('isSidebarHidden')
</script>
