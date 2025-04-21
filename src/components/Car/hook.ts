import { onMounted, ref, } from 'vue'
import { Config, PixelStreaming } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.5'
import { Application, PixelStreamingApplicationStyle } from '@epicgames-ps/lib-pixelstreamingfrontend-ui-ue5.5'
const stream = ref()
const handleClickCommand = (command: string) => {
  console.log('stream实体', stream.value)
  if (stream.value) {
    console.log('给stream实体发送内容', command)
    stream.value.emitUIInteraction(command)
    console.log('给stream实体发送成功: start fps')
  }
}
export default () => {
  onMounted(() => {
    const PixelStreamingApplicationStyles = new PixelStreamingApplicationStyle()
    PixelStreamingApplicationStyles.applyStyleSheet()

    const config = new Config({
      useUrlParams: true,
      initialSettings: {
        HideUI: true,
        AutoConnect: true,
        HoveringMouse: true,
      },
    })

    stream.value = new PixelStreaming(config)
    console.log('stream实体创建成功', stream.value)
    const application = new Application({
      stream: stream.value,
      onColorModeChanged: isLightMode => PixelStreamingApplicationStyles.setColorMode(isLightMode),
    })
    document.getElementById('car')?.appendChild(application.rootElement)
  })

  return {
    handleClickCommand
  }
}
