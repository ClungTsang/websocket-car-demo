<script setup lang="ts">
/**
 * SVG图标组件属性接口
 */
interface SvgIconProps {
  /**
   * 图标名称，对应iconfont中的symbol id
   */
  iconName: string
  /**
   * 图标大小，单位为像素
   */
  size?: number
  /**
   * 是否显示为圆形
   */
  roundedFull?: boolean
}

/**
 * SVG图标组件
 * @description 基于iconfont的SVG图标组件，支持自定义颜色、大小和形状
 */
defineProps<SvgIconProps>()
</script>

<template>
  <svg
    class="icon"
    aria-hidden="true"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: roundedFull ? '50%' : '0',
    }"
  >
    <use :xlink:href="`#${iconName}`"></use>
  </svg>
</template>

<style>
.icon {
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
