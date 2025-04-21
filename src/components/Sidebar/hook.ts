import { ref, inject } from "vue";
import type { Ref } from "vue";
import useCarHook from '@/components/Car/hook'
export const SIDEBAR_ITEMS = [
  { icon: "icon-icon_shouye", text: "Porsche", value: 'home' },
  { icon: "icon-icon_zhijia", text: "智驾", value: 'smart' },
  { icon: "icon-icon_fengzu", text: "风阻", value: 'fengzu' },
  { icon: "icon-icon_neiwaishi", text: "内外饰", value: 'neiwaishi' },
  { icon: "icon-icon_zidingyi", text: "自定义", value: 'zidingyi' },
];

export default () => {
  const isHidden = inject("sidebarHidden") as Ref<boolean>;
  const activeIndex = ref(0);

  const handleCLick = (index: number) => {
    activeIndex.value = index
    useCarHook().handleClickCommand(SIDEBAR_ITEMS[index].value)
  }
  return {
    isHidden,
    activeIndex,
    SIDEBAR_ITEMS,
    handleCLick
  }
}
