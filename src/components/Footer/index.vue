<template>
  <footer
    class="footer-container transition-all"
    :class="{ 'translate-y-full': isHidden }"
    @mouseenter="$emit('keepVisible')"
    @mousemove="$emit('keepVisible')"
  >
    <nav class="footer-nav">
      <!-- 场景 -->
      <UseMouseInElement
        v-slot="{ isOutside }"
        v-for="(item, index) in FOOTER_ITEMS"
        :key="index"
        class="nav-icon"
        :class="{ active: activeIndex === index }"
        @click="handleClickScene(index)"
      >
        <SvgIcon roundedFull :size="50" :iconName="isOutside && activeIndex !== index ? item.icon : item.activeIcon">
        </SvgIcon>
      </UseMouseInElement>
      <section v-for="(selection, i) in FOOTER_ICON_SELECTION1" :key="i" @click="handleClickSkin(i)">
        <!-- 图片 -->
        <img
          v-if="selection.isPic"
          :src="selection.pic"
          class="nav-icon"
          :class="{ active: activeSelectedIndex === i }"
        />
        <!-- 色块 -->
        <div
          v-else
          :class="{ active: activeSelectedIndex === i }"
          :style="getBackgroundColor(selection.color)"
          class="w-full h-full rounded-full nav-icon"
        ></div>
      </section>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { UseMouseInElement } from '@vueuse/components'
import useHook from './hook.ts'

// 定义辅助函数，确保返回值符合 CSSProperties 类型
const getBackgroundColor = (color: string) => {
  return { backgroundColor: color } as const
}

const {
  isHidden,
  activeIndex,
  activeSelectedIndex,
  FOOTER_ITEMS,
  FOOTER_ICON_SELECTION1,
  handleClickScene,
  handleClickSkin,
} = useHook()
defineEmits(['keepVisible'])
</script>

<style scoped lang="scss">
@use './index.scss' as *;
</style>
