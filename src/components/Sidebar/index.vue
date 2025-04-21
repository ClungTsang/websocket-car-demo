<template>
  <aside
    class="sidebar-container transition-all"
    :class="{ 'translate-x-full': isHidden }"
    @mouseenter="$emit('keepVisible')"
    @mousemove="$emit('keepVisible')"
  >
    <nav class="sidebar-nav">
      <div
        v-for="(item, index) in SIDEBAR_ITEMS"
        :key="index"
        class="sidebar-icon"
        :class="{ active: activeIndex === index }"
      >
        <SvgIcon @click="handleCLick(index)" roundedFull :size="50" :iconName="item.icon" class="svg-icon"></SvgIcon>
        <span class="tooltip">{{ item.text }}</span>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import useHook from './hook'
const { isHidden, activeIndex, SIDEBAR_ITEMS, handleCLick } = useHook()
defineEmits(['keepVisible'])
</script>

<style scoped lang="scss">
@use './index.scss' as *;
</style>
