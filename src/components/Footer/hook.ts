import { ref } from 'vue'
import { inject } from 'vue'
import type { Ref } from 'vue'
// import useCarHook from '@/components/Car/hook'
import useChat from '@/hooks/useChat.ts'
const { sendMessage } = useChat()
/**
 * 底部导航项配置项接口
 * @interface FooterItem
 */
interface FooterItem {
  /** 未激活状态下的图标标识 */
  icon: string
  /** 激活状态下的图标标识 */
  activeIcon: string
  /** 导航项文本 */
  text: string
  /** 导航项对应的值 */
  value: string
}

/**
 * 底部图标选择项配置接口
 * @interface IconSelection
 */
interface IconSelection {
  /** 颜色值（当isPic为false时有效） */
  color: string
  /** 图片路径（当isPic为true时有效） */
  pic: string
  /** 是否为图片类型标识 */
  isPic: boolean
  /** 选项文本 */
  text: string
  /** 选项对应的值 */
  value: string
}
/**
 * 底部导航项配置
 */
export const FOOTER_ITEMS: FooterItem[] = [
  { icon: 'icon-icon_4', activeIcon: 'icon-icon_3', text: '进气口', value: 'air_intake' },
  { icon: 'icon-icon_2', activeIcon: 'icon-icon_1', text: '天窗', value: 'sunroof' },
  { icon: 'icon-icon_6', activeIcon: 'icon-icon_5', text: '尾箱', value: 'trunk' },
]

/**
 * 底部图标选择项配置
 */
export const FOOTER_ICON_SELECTION1: IconSelection[] = [
  { color: '#ccd9ea', pic: '', isPic: false, text: '灰色', value: '#ccd9ea' },
  { color: '#4e627c', pic: '', isPic: false, text: '深灰色', value: '#4e627c' },
  { color: '#000000', pic: '', isPic: false, text: '黑色', value: '#000000' },
  { color: '#d7174a', pic: '', isPic: false, text: '红色', value: '#d7174a' },
  { color: '#ffc51c', pic: '', isPic: false, text: '黄色', value: '#ffc51c' },
  { color: '#01b7ff', pic: '', isPic: false, text: '浅蓝色', value: '#01b7ff' },
  { color: '#7300ff', pic: '', isPic: false, text: '紫色', value: '#7300ff' },
  { color: '', pic: '/assets/skins/skin1.png', isPic: true, text: '皮肤1', value: 'skin_1' },
  { color: '', pic: '/assets/skins/skin2.png', isPic: true, text: '皮肤2', value: 'skin_2' },
  { color: '', pic: '/assets/skins/skin3.png', isPic: true, text: '皮肤3', value: 'skin_3' },
  { color: '', pic: '/assets/skins/skin4.png', isPic: true, text: '皮肤4', value: 'skin_4' },
  { color: '', pic: '/assets/skins/skin5.png', isPic: true, text: '皮肤5', value: 'skin_4' },
]

/**
 * 底部导航组件逻辑hook
 */
export default () => {
  const isHidden = inject('isSidebarHidden') as Ref<boolean>
  const activeIndex = ref(0)
  const activeSelectedIndex = ref<number>()

  /**
   * 处理导航项点击
   * @param {number} index - 点击的导航项索引
   */
  const handleClickScene = (index: number) => {
    activeIndex.value = index
    activeSelectedIndex.value = -1
    // useCarHook().handleClickCommand(FOOTER_ITEMS[index].value)
    sendMessage(FOOTER_ITEMS[index].value)
  }

  /**
   * 处理图标选择项点击
   * @param {number} index - 点击的选择项索引
   */
  const handleClickSkin = (index: number) => {
    activeSelectedIndex.value = index
    // useCarHook().handleClickCommand(FOOTER_ICON_SELECTION1[index].value)
    sendMessage(FOOTER_ICON_SELECTION1[index].value)
  }

  return {
    isHidden,
    activeIndex,
    activeSelectedIndex,
    FOOTER_ICON_SELECTION1,
    FOOTER_ITEMS,
    handleClickScene,
    handleClickSkin,
  }
}
