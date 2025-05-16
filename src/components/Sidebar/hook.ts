import { ref, inject } from 'vue'
import type { Ref } from 'vue'
// import useCarHook from '@/components/Car/hook'
import useChat from '@/hooks/useChat.ts'
const { sendMessage } = useChat()

/**
 * 侧边栏导航项配置接口
 * @interface SidebarItem
 */
interface SidebarItem {
  /** 图标标识 */
  icon: string
  /** 导航项文本 */
  text: string
  /** 导航项对应的值 */
  value: string
}


export const SIDEBAR_ITEMS: SidebarItem[] = [
  { icon: 'icon-icon_shouye', text: 'Porsche', value: 'home' },
  { icon: 'icon-icon_zhijia', text: '智驾', value: 'smart_drive' },
  { icon: 'icon-icon_fengzu', text: '风阻', value: 'aerodynamics' },
  { icon: 'icon-icon_neiwaishi', text: '内外饰', value: 'interior_exterior' },
  { icon: 'icon-icon_zidingyi', text: '自定义', value: 'customization' },
]

/**
 * 侧边栏组件逻辑hook
 */
export default () => {
  /** 侧边栏是否隐藏 */
  const isHidden = inject('isSidebarHidden') as Ref<boolean>
  /** 当前激活的导航项索引 */
  const activeIndex = ref(0)

  /**
   * 处理导航项点击
   * @param index - 点击的导航项索引
   */
  const handleCLick = (index: number) => {
    activeIndex.value = index
    // useCarHook().handleClickCommand(SIDEBAR_ITEMS[index].value)
    sendMessage(SIDEBAR_ITEMS[index].value)
  }

  return {
    isHidden,
    activeIndex,
    SIDEBAR_ITEMS,
    handleCLick,
  }
}
