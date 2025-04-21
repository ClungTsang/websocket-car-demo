import { ref } from "vue";
import { inject } from "vue";
import type { Ref } from "vue";
import useCarHook from '@/components/Car/hook'

export const FOOTER_ITEMS = [
  { icon: "icon-icon_4", activeIcon: 'icon-icon_3', text: "进气口", value: 'jinqikou' },
  { icon: "icon-icon_2", activeIcon: 'icon-icon_1', text: "天窗", value: 'tianchuang' },
  { icon: "icon-icon_6", activeIcon: 'icon-icon_5', text: "尾箱", value: 'weixiang' },
];

export const FOOTER_ICON_SELECTION1 = [
  { color: '#ccd9ea', pic: "", isPic: false, value: '20 1, 215, 230' },
  { color: '#4e627c', pic: "", isPic: false, value: '78, 98, 124' },
  { color: '#000000', pic: "", isPic: false, value: '0, 0, 0' },
  { color: '#d7174a', pic: "", isPic: false, value: '215, 23, 74' },
  { color: '#ffc51c', pic: "", isPic: false, value: '255, 197, 28' },
  { color: '#01b7ff', pic: "", isPic: false, value: '1, 183, 2551' },
  { color: '#7300ff', pic: "", isPic: false, value: '115, 0, 255' },
  { color: '', pic: '/src/assets/skins/skin1.png', isPic: true, value: 'skin_1' },
  { color: '', pic: '/src/assets/skins/skin2.png', isPic: true, value: 'skin_2' },
  { color: '', pic: '/src/assets/skins/skin3.png', isPic: true, value: 'skin_3' },
  { color: '', pic: '/src/assets/skins/skin4.png', isPic: true, value: 'skin_4' },
  { color: '', pic: '/src/assets/skins/skin5.png', isPic: true, value: 'skin_4' },
]

export default () => {
  const isHidden = inject("sidebarHidden") as Ref<boolean>;
  const activeIndex = ref(0);
  const activeSelectedIndex = ref<number>();
  const handleClickScene = (index: number) => {
    activeIndex.value = index;
    activeSelectedIndex.value = -1
    useCarHook().handleClickCommand(FOOTER_ITEMS[index].value)
  }
  const handleClickSkin = (index: number) => {
    activeSelectedIndex.value = index
    useCarHook().handleClickCommand(FOOTER_ICON_SELECTION1[index].value)
  }
  return {
    isHidden,
    activeIndex,
    activeSelectedIndex,
    FOOTER_ICON_SELECTION1,
    FOOTER_ITEMS,
    handleClickScene,
    handleClickSkin
  }
}
