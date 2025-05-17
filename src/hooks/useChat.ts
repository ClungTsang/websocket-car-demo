import { ref, onUnmounted, type Ref } from "vue";

/** 消息类型接口 */
interface Message {
  content: string;
  type: string;
  time: string;
}

/** 消息列表，存储所有发送和接收的消息 */
const messages: Ref<Message[]> = ref([]);

/** 存储当前连接ID */
const currentId: Ref<string> = ref('');

/** WebSocket连接实例 */
const socket: Ref<WebSocket | null> = ref(null);

/** 当前连接状态（connected: 已连接，disconnected: 未连接） */
const status: Ref<"connected" | "disconnected"> = ref("disconnected");

/** WebSocket服务器地址 */
const server: Ref<string> = ref("localhost:3000");
export default function useChat() {
  /**
   * 连接WebSocket服务器
   */
  const connect = (): void => {
    // 检查是否已连接，避免重复连接
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      return;
    }

    // 如果存在旧连接，先关闭
    if (socket.value) {
      socket.value.close();
    }

    // 清空输入框内容
    // 根据当前协议选择ws或wss
    const protocol = window.location.protocol === "https:" ? "wss://" : "ws://";
    // 创建新的WebSocket连接
    socket.value = new WebSocket(`${protocol}${server.value}`);
    // 连接成功回调
    socket.value.onopen = () => {
      // 更新连接状态
      status.value = "connected";
      console.log("WebSocket connected");
    };

    // 收到消息回调
    socket.value.onmessage = (event) => {
      console.log("event", event);
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'welcome') {
          currentId.value = data.id;
          console.log('已接收初始ID:', currentId.value);
          return;
        }
      } catch (e) {
        // 非JSON格式消息，按原逻辑处理
      }
      // 过滤掉打字状态通知
      if (event.data !== "TYPING_START" && event.data !== "TYPING_END") {
        // 构造接收到的消息对象
        const message = {
          content: event.data,
          type: "received",
          time: new Date().toLocaleTimeString(),
        };
        // 添加到消息列表
        messages.value.push(message);
      }
    };

    // 连接关闭回调
    socket.value.onclose = () => {
      // 更新连接状态
      status.value = "disconnected";
      console.log("WebSocket disconnected");
    };
  };


  /**
 * 发送消息
 * @param {string} content - 要发送的消息内容
 */
  const sendMessage = (content: string): void => {
    console.log('发送内容 :>> ', content);
    // WebSocket模式处理
    console.log('WebSocket状态:', socket.value?.readyState) // 调试：输出当前socket连接状态
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      // 构造发送的消息对象
      const message = {
        content,
        type: "sent",
        time: new Date().toLocaleTimeString(),
      };
      // 通过WebSocket发送并添加到消息列表
      // 发送时携带当前ID
      socket.value.send(JSON.stringify({ targetId: currentId.value, message: content, type: "message" }));
      messages.value.push(message);
    }
  };

  /**
   * 发送颜色消息
   * @param {string} color - 要发送的颜色值
   */
  const sendColorMessage = (color: string): void => {
    sendMessage(color)
  };

  /**
 * 断开WebSocket连接
 */
  const disconnect = (): void => {
    // 如果存在WebSocket连接
    if (socket.value) {
      // 关闭连接并清空引用
      socket.value.close();
      socket.value = null;
    }
    // 更新连接状态
    status.value = "disconnected";
  };



  /**
 * 清空消息列表
 */
  const clearMessages = (): void => {
    // 清空消息列表
    messages.value = [];
  };

  onUnmounted(() => {
    disconnect();
  });

  return {
    messages,
    socket,
    status,
    server,
    connect,
    disconnect,
    sendMessage,
    clearMessages,
    sendColorMessage,
  };
}
